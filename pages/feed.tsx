import fs from "fs"
import { GetServerSidePropsContext } from 'next';
import { readContentFiles } from "../lib/content-loader"
import { generatedRssFeed } from "../lib/feed"

export const getServerSideProps = async ({ res }: GetServerSidePropsContext) => {
  const MAX_COUNT = 10
  const posts = await readContentFiles({ fs })
  const xml = generatedRssFeed(posts.slice(0, MAX_COUNT));

  res.statusCode = 200;
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate'); // 24時間キャッシュする
  res.setHeader('Content-Type', 'text/xml');
  res.end(xml);

  return {
    props: {},
  };
};

const Page = () => null;
export default Page;
