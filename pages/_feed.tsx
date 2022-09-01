import { generatedRssFeed } from "../lib/feed"

export const getServerSideProps = async () => {
  generatedRssFeed();

  return {
    props: {},
  };
};

const Page = () => ('ok');
export default Page;
