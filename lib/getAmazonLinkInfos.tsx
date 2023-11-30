import request from "request";
import { JSDOM } from "jsdom";

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
    amznUrls.map((url) => {
      return new Promise((resolve, reject) => {
        request(url, {
          gzip: true,
        }, (e, response, body) => {
          if (e) {
            console.error(e)
          }
        
          try {
            const dom = new JSDOM(body)
            const title: string = dom.window.document.querySelector('#productTitle')?.textContent || ''
            const bylineInfo: string = dom.window.document.querySelector('#bylineInfo')?.textContent || ''
            const imgUrl: string = dom.window.document.querySelector('#imgTagWrapperId img')?.attributes?.src?.textContent || ''
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
        })
      });
    })
  );
  return AmznData;
};
export default getAmazonLinkInfos;
