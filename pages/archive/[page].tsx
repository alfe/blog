import fs from "fs"
import Layout from "components/Layout"
import PostLinkItem from "components/PostLinkItem"
import Pager from "components/Pager"
import OgpHeader from "components/OgpHeader"
import { listContentFiles, readContentMetas } from "lib/content-loader"

const COUNT_PER_PAGE = 10

type Post = {
  title?: string;
  dirname?: string;
  slug?: string;
  published?: string;
  thumbnail?: string;
}
type ArchiveProps = {
  posts: Post[];
  page: number;
  total: number;
  perPage: number;
  canonicalPath: string;
};
const Archive = (props: ArchiveProps) => {
  const { posts, page, total, perPage } = props
  return (
    <Layout title="アーカイブ" canonicalPath={props.canonicalPath}>
      <OgpHeader path={props.canonicalPath} />
      {posts.map((post) => (
        <PostLinkItem
          key={post.slug}
          to={`/entry${post.dirname}${post.slug}`}
          thumbnail={post.thumbnail}
          title={post.title ?? ''}
          published={post.published ?? ''}
        />
      ))}

      <Pager
        page={page} total={total} perPage={perPage}
        href="/archive/[page]"
        asCallback={(pageNumber: number) => `/archive/${pageNumber}`}
      />
      <style jsx global>{`
        img[alt="thumb"] {
          object-fit: cover;
        }
      `}</style>
    </Layout>
  )
};
export default Archive;

export const getStaticProps = async ({ params }: { params: any }) => {
  const page = parseInt(params.page, 10)
  const end = COUNT_PER_PAGE * page
  const start = end - COUNT_PER_PAGE
  const posts = readContentMetas({ fs })

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
      canonicalPath: `/archive/${page}`,
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
  const paths = pages.map((pageNumber) => ({
    params: { page: `${pageNumber}` }
  }))

  return { paths: paths, fallback: false }
}

/**
 * ユーティリティ: 1 から指定された整数までを格納した Array を返す
 */
function range(stop: number) {
  return Array.from({ length: stop }, (_, i) => i + 1)
}
