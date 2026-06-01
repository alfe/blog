import { generatedRssFeed } from "../lib/feed"

// 静的エクスポート（output: 'export'）のため getStaticProps でビルド時に生成する。
// ビルド時はファイルシステムが書き込み可能なので public/ 配下に feed を出力できる。
export const getStaticProps = async () => {
  await generatedRssFeed();

  return {
    props: {},
  };
};

const Page = () => ('ok');
export default Page;
