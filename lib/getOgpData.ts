import openGraphScraper from 'open-graph-scraper';

export type OgpData = {
  twitterSite: string;
  twitterCard: string;
  twitterTitle: string;
  twitterDescription: string;
  ogSiteName: string;
  ogType: string;
  ogTitle: string;
  ogUrl: string;
  ogDescription: string;
  ogImage: any;
  twitterImage: any;
  requestUrl: string;
  success: boolean;
};

const getOgpData = async (floatingUrls: string[]): Promise<OgpData[]> => {
  const ogpDatas: OgpData[] = [];
  if (floatingUrls.length === 0) return ogpDatas;

  await Promise.all(
    floatingUrls.map(async (url) => {
      const options = { url, onlyGetOpenGraphInfo: true };
      return openGraphScraper(options)
        .then((data) => {
          // OGP によるデータ取得が失敗した場合
          if (!data.result.success) {
            return;
          }
          // OGP によるデータ取得が成功した場合
          ogpDatas.push(data.result as OgpData);
        })
        .catch((error) => {
          // error を throw するとビルドできないため、コンソールに出力して return する
          // eslint-disable-next-line no-console
          console.log('OgpData parse error:', error);
        });
    })
  );

  return ogpDatas;
};

export default getOgpData;
