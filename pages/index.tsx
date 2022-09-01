import fs from "fs"
import Link from "next/link"
import Layout from "../components/Layout"
import PostLinkItem from "../components/PostLinkItem"
import { readContentFiles } from "../lib/content-loader"

type HomeProps = {
  posts: {
    title: string;
    dirname: string;
    slug: string;
    published: string;
    thumbnail?: string;
  }[];
  hasArchive: boolean;
}
const Home = (props: HomeProps) => {
  const { posts, hasArchive } = props
  return (
    <Layout title="">
      {posts.map((post) => (
        <PostLinkItem
          key={post.slug}
          to={`/entry${post.dirname}${post.slug}`}
          thumbnail={post.thumbnail}
          title={post.title}
          published={post.published}
        />
      ))}

      {hasArchive ? (
        <div className="home-archive">
          <Link href="/archive/[page]" as="/archive/2"><a>さらに昔の記事</a></Link>
        </div>
      ) : ``}

      <style jsx>{`
        .home-archive {
          margin: 3em;
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
      `}</style>
    </Layout>
  )
}
export default Home;

export const getStaticProps = async () => {
  const MAX_COUNT = 10
  const posts = await readContentFiles({ fs })
  const hasArchive = posts.length > MAX_COUNT

  return {
    props: {
      posts: posts
        .slice(0, MAX_COUNT)
        .map(post => ({
          title: post.title,
          dirname: post.dirname,
          slug: post.slug,
          published: post.published,
          thumbnail: post.thumbnail,
        })),
      hasArchive,
    }
  }
};
