import fs from "fs"

import Link from "next/link"
import Image from "next/image"

import Layout from "../components/Layout"
import { readContentFiles } from "../lib/content-loader"

const Home = (props) => {
  const { posts, hasArchive } = props
  console.log(posts)
  return (
    <Layout title="">
      {posts.map((post) => (
        <Link key={post.slug} href={`/entry${post.dirname}${post.slug}`} as={`/entry${post.dirname}${post.slug}`}>
          <a className="post-teaser">
            <div className="post-thumbnail">
              {post.thumbnail && (
                <Image src={post.thumbnail} alt="thumb" width={240} height={120} />
              )}
            </div>
            <h2>{post.title}</h2>
            <div><span>{post.published}</span></div>
          </a>
        </Link>
      ))}

      {hasArchive ? (
        <div className="home-archive">
          <Link href="/archive/[page]" as="/archive/2"><a>さらに昔の記事</a></Link>
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
        .post-thumbnail {
          float: right;
          border-radius: 3px;
          overflow: hidden;
          width: 240px;
          height: 120px;
        }
        .post-thumbnail img {
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
  const MAX_COUNT = 10
  const posts = await readContentFiles({ fs })
  const hasArchive = posts.length > MAX_COUNT

  // フィード情報の生成
  generatedRssFeed(posts.slice(0, MAX_COUNT));

  return {
    props: {
      posts: posts.slice(0, MAX_COUNT),
      hasArchive,
    }
  }
}