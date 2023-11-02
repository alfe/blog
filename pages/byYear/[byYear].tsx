import fs from "fs"
import PostLinkItem from "components/PostLinkItem"
import Layout from "components/Layout"
import OgpHeader from "components/OgpHeader"
import { readContentFiles } from "lib/content-loader"

type categoryProps = {
  posts: {
    title: string;
    dirname: string;
    slug: string;
    published: string;
    thumbnail?: string;
  }[];
}
const category = (props: categoryProps) => {
  const { posts } = props
  return (
    <Layout title="">
      <OgpHeader />
      {posts.map((post, index) => (
        <PostLinkItem
          key={`${index}-${post.slug}`}
          to={`/entry${post.dirname}${post.slug}`}
          thumbnail={post.thumbnail}
          title={post.title}
          published={post.published}
        />
      ))}
      <style jsx global>{`
        img[alt="thumb"] {
          object-fit: cover;
        }
      `}</style>
    </Layout>
  )
}
export default category;

export const getStaticProps = async ({ params }) => {
  const posts = await readContentFiles({ fs })
  return {
    props: {
      posts: posts.filter(
        (post) => post.published.substring(0, 4) === params.byYear
      ),
    }
  }
};

export const getStaticPaths = async () => {
  const paths = [
    { params: { byYear: '2023' } },
    { params: { byYear: '2022' } },
    { params: { byYear: '2021' } },
    { params: { byYear: '2020' } },
    { params: { byYear: '2019' } },
    { params: { byYear: '2018' } },
    { params: { byYear: '2017' } },
    { params: { byYear: '2016' } },
    { params: { byYear: '2015' } },
    { params: { byYear: '2014' } },
    { params: { byYear: '2013' } },
    { params: { byYear: '2012' } },
  ];
  return { paths: paths, fallback: false }
}
