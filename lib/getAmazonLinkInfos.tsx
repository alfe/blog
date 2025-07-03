import fs from "fs"
import { chromium } from 'playwright-core';

const filePath = "./public/amznUrls.txt";

export type AmznData = {
  title: string;
  bylineInfo: string;
  imgUrl: string;
  url: string;
};

const getAmazonLinkInfos = async (amznUrls: string[]) => {
  const AmznData: AmznData[] = [];
  if (amznUrls.length === 0) return AmznData;

  // Read file inside function to avoid blocking at module load
  let file = '';
  try {
    file = fs.readFileSync(filePath, "utf8");
  } catch (error) {
    // If file doesn't exist, create empty one
    fs.writeFileSync(filePath, '');
  }

  await Promise.all(
    amznUrls.map(async (url) => {
      try {
        let hasData = false;
        const lines = file.toString().split('\n');
        
        // Use for...of instead of forEach for proper async handling
        for (const line of lines) {
          if (!new RegExp(`^{"url":"${url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`)
               .test(line)) continue;
          
          try {
            const dataItem = JSON.parse(line);
            AmznData.push({
              ...dataItem,
              bylineInfo: dataItem.bylineInfo + ' .',
            });
            hasData = true;
            break; // Found data, exit loop
          } catch (parseError) {
            console.error('Error parsing cached data:', parseError);
          }
        }

        if (hasData) return;

        // Browser automation with proper error handling
        const browser = await chromium.launch();
        let context;
        let page;
        
        try {
          context = await browser.newContext();
          page = await context.newPage();
          await page.goto(url, { timeout: 10000 });
          
          const title: string = await page.locator('#productTitle')?.first().textContent() || '';
          const bylineInfo: string = await page.locator('#bylineInfo')?.textContent() || '';
          const imgUrl: string = await page.locator('#imgTagWrapperId img')?.getAttribute('src') || '';
          
          const dataItem = {
            url,
            title: title.replace('Amazon.co.jp: ', '').replace(': Kindleストア', '').replace(': 本', '').replace(' |本 | 通販 | Amazon', '').trim(),
            bylineInfo: bylineInfo.replaceAll(/( |\n|\s|\t)/g, '').replace('形式:Kindle版', ''),
            imgUrl,
          };
          
          AmznData.push(dataItem);
          fs.writeFileSync(filePath, `${JSON.stringify(dataItem)}\n`, { flag: 'a' });
          await page.waitForTimeout(3000);
          
        } finally {
          // Ensure cleanup even if errors occur
          if (page) await page.close();
          if (context) await context.close();
          await browser.close();
        }
      } catch (e) {
        console.error('Error processing Amazon URL:', url, e);
      }
    })
  );
  
  return AmznData;
};

export default getAmazonLinkInfos;
