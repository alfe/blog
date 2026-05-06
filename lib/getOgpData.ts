import fs from 'fs';
import path from 'path';
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

const CACHE_PATH = path.join(process.cwd(), 'data', 'ogpCache.jsonl');

type CacheEntry = { url: string; data: OgpData | null };
let cache: Map<string, OgpData | null> | null = null;

const loadCache = () => {
  if (cache) return cache;
  cache = new Map();
  if (fs.existsSync(CACHE_PATH)) {
    const lines = fs.readFileSync(CACHE_PATH, 'utf8').split('\n');
    for (const line of lines) {
      if (!line) continue;
      try {
        const entry = JSON.parse(line) as CacheEntry;
        cache.set(entry.url, entry.data);
      } catch {
        // skip malformed lines
      }
    }
  }
  return cache;
};

const appendCache = (url: string, data: OgpData | null) => {
  loadCache().set(url, data);
  fs.appendFileSync(CACHE_PATH, `${JSON.stringify({ url, data })}\n`);
};

const getOgpData = async (floatingUrls: string[]): Promise<OgpData[]> => {
  const ogpDatas: OgpData[] = [];
  if (floatingUrls.length === 0) return ogpDatas;

  const c = loadCache();

  await Promise.all(
    floatingUrls.map(async (url) => {
      if (c.has(url)) {
        const cached = c.get(url);
        if (cached) ogpDatas.push(cached);
        return;
      }

      const options = { url, onlyGetOpenGraphInfo: true };
      return openGraphScraper(options)
        .then((data) => {
          if (!data.result.success) {
            appendCache(url, null);
            return;
          }
          const result = data.result as OgpData;
          ogpDatas.push(result);
          appendCache(url, result);
        })
        .catch((error) => {
          console.log('OgpData parse error:', error);
          appendCache(url, null);
        });
    })
  );

  return ogpDatas;
};

export default getOgpData;
