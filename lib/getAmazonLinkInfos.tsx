import { chromium } from "@playwright/test";

export type AmznData = {
  title: string;
  bylineInfo: string;
  imgUrl: string;
  url: string;
};

const getAmazonLinkInfos = async (amznUrls: string[]) => {
  const AmznData: AmznData[] = [];
  if (amznUrls.length === 0) return AmznData;
  
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await Promise.all(
    amznUrls.map(async (url) => {
      return await new Promise(async(resolve, reject) => {
        try {
          await page.goto(url);
          const title: string = await page.locator('#productTitle')?.textContent() || ''
          const bylineInfo: string = await page.locator('#bylineInfo')?.textContent() || ''
          const imgUrl: string = await page.locator('#imgTagWrapperId img')?.getAttribute('src') || ''
          AmznData.push({
            title: title.replace('Amazon.co.jp: ', '').replace(': Kindleストア', '').replace(': 本', '').replace(' |本 | 通販 | Amazon', ''),
            bylineInfo: bylineInfo.replaceAll(/( |\n|\s|\t)/g, '').replace('形式:Kindle版', ''),
            imgUrl,
            url,
          });
          resolve(title);
        } catch (e) {
          console.error(e)
          reject(e);
        }
      });
    })
  );
  await browser.close();
  return AmznData;
};
export default getAmazonLinkInfos;
