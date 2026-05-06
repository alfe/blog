import fs from "fs"
import { chromium } from 'playwright-core';

const filePath = "./public/amznUrls.txt";

export type AmznData = {
  title: string;
  bylineInfo: string;
  imgUrl: string;
  url: string;
};

const loadCache = (): Map<string, AmznData> => {
  const map = new Map<string, AmznData>();
  if (!fs.existsSync(filePath)) return map;
  const lines = fs.readFileSync(filePath, "utf8").split('\n');
  for (const line of lines) {
    if (!line) continue;
    try {
      const item = JSON.parse(line) as AmznData;
      map.set(item.url, { ...item, bylineInfo: `${item.bylineInfo} .` });
    } catch {
      // skip malformed lines
    }
  }
  return map;
};

const cache = loadCache();

const fetchAmazonInfo = async (url: string): Promise<AmznData | null> => {
  try {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(url);
    const title: string = (await page.locator('#productTitle')?.first().textContent()) || '';
    const bylineInfo: string = (await page.locator('#bylineInfo')?.textContent()) || '';
    const imgUrl: string = (await page.locator('#imgTagWrapperId img')?.getAttribute('src')) || '';
    const dataItem: AmznData = {
      url,
      title: title
        .replace('Amazon.co.jp: ', '')
        .replace(': Kindleストア', '')
        .replace(': 本', '')
        .replace(' |本 | 通販 | Amazon', '')
        .trim(),
      bylineInfo: bylineInfo.replaceAll(/( |\n|\s|\t)/g, '').replace('形式:Kindle版', ''),
      imgUrl,
    };
    fs.writeFileSync(filePath, `${JSON.stringify(dataItem)}\n`, { flag: 'a' });
    await context.close();
    await browser.close();
    return dataItem;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return null;
  }
};

const getAmazonLinkInfos = async (amznUrls: string[]): Promise<AmznData[]> => {
  if (amznUrls.length === 0) return [];

  const results = await Promise.all(
    amznUrls.map(async (url) => {
      const cached = cache.get(url);
      if (cached) return cached;

      const fetched = await fetchAmazonInfo(url);
      if (fetched) {
        cache.set(url, { ...fetched, bylineInfo: `${fetched.bylineInfo} .` });
        return cache.get(url) ?? null;
      }
      return null;
    })
  );

  return results.filter((r): r is AmznData => r !== null);
};
export default getAmazonLinkInfos;
