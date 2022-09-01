import fs from "fs"
import Layout from "../../components/Layout"
import PostLinkItem from "../../components/PostLinkItem"
import Pager from "../../components/Pager"
import { listContentFiles, readContentFiles } from "../../lib/content-loader"

const COUNT_PER_PAGE = 10

const Archive = (props) => {
  const { posts, page, total, perPage } = props
  return (
    <Layout title="アーカイブ">
      {posts.map((post) => (
        <PostLinkItem
          key={post.slug}
          to={`/entry${post.dirname}${post.slug}`}
          thumbnail={post.thumbnail}
          title={post.title}
          published={post.published}
        />
      ))}

      <Pager
        page={page} total={total} perPage={perPage}
        href="/archive/[page]"
        asCallback={(page) => `/archive/${page}`}
      />
    </Layout>
  )
};
export default Archive;

export const getStaticProps = async ({ params }) => {
  const page = parseInt(params.page, 10)
  const end = COUNT_PER_PAGE * page
  const start = end - COUNT_PER_PAGE
  const posts = await readContentFiles({ fs })

  return {
    props: {
      posts: posts
        .slice(start, end)
        .map(post => ({
          title: post.title,
          dirname: post.dirname,
          slug: post.slug,
          published: post.published,
          thumbnail: post.thumbnail,
        })),
      page,
      total: posts.length,
      perPage: COUNT_PER_PAGE,
    }
  }
}

/**
 * 有効な URL パラメータを全件返す
 */
export const getStaticPaths = async () => {
  const posts = await listContentFiles({ fs })
  const pages = range(Math.ceil(posts.length / COUNT_PER_PAGE))
  const paths = pages.map((page) => ({
    params: { page: `${page}` }
  }))

  return { paths: paths, fallback: false }
}

/**
 * ユーティリティ: 1 から指定された整数までを格納した Array を返す
 */
function range(stop) {
  return Array.from({ length: stop }, (_, i) => i + 1)
}