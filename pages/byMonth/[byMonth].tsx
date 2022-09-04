import fs from "fs"
import PostLinkItem from "../../components/PostLinkItem"
import Layout from "../../components/Layout"
import OgpHeader from "../../components/OgpHeader"
import { readContentFiles } from "../../lib/content-loader"

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
        (post) => post.published.substring(0, 4) === params.byMonth
      ),
    }
  }
};

export const getStaticPaths = async () => {
  const paths = [
    { params: { byMonth: '2022' } },
    { params: { byMonth: '2021' } },
    { params: { byMonth: '2020' } },
    { params: { byMonth: '2019' } },
    { params: { byMonth: '2018' } },
    { params: { byMonth: '2017' } },
    { params: { byMonth: '2016' } },
    { params: { byMonth: '2015' } },
    { params: { byMonth: '2014' } },
    { params: { byMonth: '2013' } },
    { params: { byMonth: '2012' } },
  ];
  return { paths: paths, fallback: false }
}
