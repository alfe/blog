import { ReactNode } from "react"
import fs from "fs"
import path from "path"

import Layout from "components/Layout"
import Ogp from "components/Ogp"
import PostFooter from "components/PostFooter"
import ArticleHeadInfos from "components/ArticleHeadInfos"
import ArticleContentStyles from "components/ArticleContentStyles"
import { listContentFiles, replaceComponentInHtml, readContentFile, readContentFiles } from "lib/content-loader"
import getFloatingUrls from "lib/getFloatingUrls"
import getOgpData, { OgpData } from "lib/getOgpData"
import getAmazonLinkInfos, { AmznData } from "lib/getAmazonLinkInfos"

type PostProps = {
  title: string;
  slug: string;
  description: string;
  thumbnail?: string;
  published: string;
  category: string[];
  content: any;
  prevPage?: {
    dirname: string;
    slug: string;
    title: string;
  };
  nextPage?: {
    dirname: string;
    slug: string;
    title: string;
  };
  ogpDatas?: OgpData[];
  amznData?: AmznData[];
}
const Post = (params: PostProps) => {
  return (
    <Layout title={params.title}>
      <Ogp
        slug={params.slug}
        title={params.title}
        description={params.description}
        thumbnail={params.thumbnail} />

      <ArticleHeadInfos
        published={params.published}
        category={params.category} />
      <ArticleContentStyles>
        {replaceComponentInHtml({
          a: { ogpDatas: params.ogpDatas, amznData: params.amznData }
        }).processSync(params.content).result as ReactNode}
      </ArticleContentStyles>
      <PostFooter prevPage={params.prevPage} nextPage={params.nextPage} />
</Layout>
  )
}
export default Post;

/**
 * ページコンポーネントで使用する値を用意する
 */
export const getStaticProps = async ({ params }) => {
  const postContent = await readContentFile({ fs, slug: params.slug.join('/') })

  const posts = await readContentFiles({ fs })
  const postIndex = posts
    .map((post) => `${post.dirname === '//' ? '/' : post.dirname}${post.slug}`)
    .findIndex(url => url === `/${params.slug.join('/')}`);

  const floatingUrls = getFloatingUrls(postContent.content ?? '');
  const amznUrls = floatingUrls.filter(url => url.includes('amazon.co.jp'))
  const ogpUrls = floatingUrls.filter(url => !url.includes('amazon.co.jp'))
  
  const ogpDatas = await getOgpData(ogpUrls);
  const amznData = await getAmazonLinkInfos(amznUrls);
  return {
    props: {
      ...postContent,
      postIndex,
      floatingUrls,
      ogpDatas,
      amznData,
      prevPage: postIndex !== 0 ? posts[postIndex - 1] || null : null,
      nextPage: postIndex !== posts.length ? posts[postIndex + 1] || null : null,
    }
  }
}

/**
 * 有効な URL パラメータを全件返す
 */
export async function getStaticPaths() {
  const paths = listContentFiles({ fs })
    .map((filename) => ({
      params: {
        slug: [
          ...path.parse(filename).dir.split('/').filter((str) => !!str),
          path.parse(filename).name,
        ],
      }
    }))
  return { paths: paths, fallback: false }
}
