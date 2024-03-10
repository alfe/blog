import fs from "fs"
import { chromium } from 'playwright-core';

const filePath = "./public/amznUrls.txt";
const file = fs.readFileSync(filePath, "utf8");

export type AmznData = {
  title: string;
  bylineInfo: string;
  imgUrl: string;
  url: string;
};

const getAmazonLinkInfos = async (amznUrls: string[]) => {
  const AmznData: AmznData[] = [];
  if (amznUrls.length === 0) return AmznData;

  await Promise.all(
    amznUrls.map(async (url) => {
      return await new Promise(async(resolve, reject) => {
        try {
          let hasData = false;
          const lines = file.toString().split('\n');
          lines.forEach(async (line) => {
            if (!new RegExp(`^{"url":"${url}"`).test(line)) return;
            const dataItem = JSON.parse(`${line}`);
            AmznData.push({
              ...dataItem,
              bylineInfo: dataItem.bylineInfo + ' .',
            });
            hasData = true;
            resolve(dataItem.title);
          })

          if (hasData) return;

          const browser = await chromium.launch();
          const context = await browser.newContext();
          const page = await context.newPage();
          await page.goto(url);
          const title: string = await page.locator('#productTitle')?.first().textContent() || ''
          const bylineInfo: string = await page.locator('#bylineInfo')?.textContent() || ''
          const imgUrl: string = await page.locator('#imgTagWrapperId img')?.getAttribute('src') || ''
          const dataItem = {
            url,
            title: title.replace('Amazon.co.jp: ', '').replace(': Kindleストア', '').replace(': 本', '').replace(' |本 | 通販 | Amazon', '').trim(),
            bylineInfo: bylineInfo.replaceAll(/( |\n|\s|\t)/g, '').replace('形式:Kindle版', ''),
            imgUrl,
          };
          AmznData.push(dataItem);
          fs.writeFileSync(filePath, `${JSON.stringify(dataItem)}\n`, { flag: 'a' });
          await page.waitForTimeout(3000);
          await context.close();
          await browser.close();
          resolve(title);
        } catch (e) {
          console.error(e)
          resolve(e);
        }
      });
    })
  );
  return AmznData;
};
export default getAmazonLinkInfos;
