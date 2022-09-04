import fs from "fs"
import PostLinkItem from "../../components/PostLinkItem"
import Layout from "../../components/Layout"
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
        (post) => post.category?.find(category => category === params.category)
      ),
    }
  }
};

export const getStaticPaths = async () => {
  const paths = [
    { params: { category: '本' } },
    { params: { category: 'プログラム' } },
    { params: { category: 'LifeHack' } },
    { params: { category: 'レビュー' } },
    { params: { category: '雑記' } },
  ];
  return { paths: paths, fallback: false }
}
