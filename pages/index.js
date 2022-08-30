import fs from "fs"

import Link from "next/link"

import Layout from "../components/Layout"
import { readContentFiles } from "../lib/content-loader"

const Home = (props) => {
  const { posts, hasArchive } = props
  return (
    <Layout title="">
      {posts.map((post) => 
        <Link key={post.slug} href={`/entry${post.dirname}${post.slug}`} as={`/entry${post.dirname}${post.slug}`}><a
        
        className="post-teaser">
          
## {post.title}

          <div><span>{post.published}</span></div>
        </a></Link>
      )}

      {hasArchive ? (
        <div className="home-archive">
          <Link href="/archive/[page]" as="/archive/1"><a>アーカイブ</a></Link>
        </div>
      ) : ``}

      <style jsx>{`
        .post-teaser {
          display: block;
          margin-bottom: 2em;
          color: #333;
          text-decoration: none;
          padding: 16px 32px;
          border-radius: 3px;
        }

        .post-teaser h2 {
          margin-top: 0;
        }

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

/**
 * ページコンポーネントで使用する値を用意する
 */
export async function getStaticProps({ params }) {
  const MAX_COUNT = 5
  const posts = await readContentFiles({ fs })
  const hasArchive = posts.length > MAX_COUNT

  return {
    props: {
      posts: posts.slice(0, MAX_COUNT),
      hasArchive,
    }
  }
}