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
        request(url, (e, response, body) => {
          if (e) {
            console.error(e)
          }
        
          try {
            const dom = new JSDOM(body)
            const title: string = dom.window.document.querySelector('title').textContent || ''
            const bylineInfo: string = dom.window.document.querySelector('#bylineInfo').textContent || ''
            const imgUrl: string = dom.window.document.querySelector('#imgTagWrapperId img').attributes.src.textContent || ''
            AmznData.push({
              title,
              bylineInfo: bylineInfo.replaceAll(/( |\n|\s|\t)/g, ''),
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
