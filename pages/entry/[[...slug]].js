import fs from "fs"
import path from "path"
import dayjs from "dayjs"

import Layout from "../../components/Layout"
import { listContentFiles, readContentFile } from "../../lib/content-loader"


export default function Post(params) {
  const date = dayjs(params.published);
  return (
    <Layout title={params.title}>
      <div className="post-meta">
        <time datatime={`${date.year()}-${'0' + (date.month() + 1)}-${'0' + date.date()}`}>
          {params.published}
        </time>
      </div>
      <div className="post-body"
        dangerouslySetInnerHTML={{ __html: params.content }}
      />
      <style>{`
        .post-meta {
          text-align: right;
          color: #666;
        }
        .hatena-asin-detail {
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 2rem;
          border: none;
          border-radius: 4px;
          box-sizing: border-box;
          line-height: 1.25;
          overflow: hidden;
          margin: 1rem 0;
          padding: 1rem;
        }
        .hatena-asin-detail-image-link {
          flex-basis: 200px;
          height: 200px;
        }
        .hatena-asin-detail>a .hatena-asin-detail-image {
          max-width: 200px;
          border: none;
          display: block;
          float: none;
          height: 100%;
          margin: auto;
          object-fit: contain;
          width: 100%;
        }
        .hatena-asin-detail-info {
          width: 25rem;
        }
        .hatena-asin-detail-meta {
          list-style: none;
          font-size: .9rem;
          padding-inline-start: 1rem;
        }
        .hatena-asin-detail .hatena-asin-detail-info .asin-detail-buy {
          border: 1px solid #666;
          color: #666;
          box-sizing: border-box;
          cursor: pointer;
          display: inline-block;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: .025em;
          line-height: 1.25;
          margin-top: 16px;
          overflow: hidden;
          padding: 10px 12px;
          text-align: center;
          text-decoration: none;
          width: 100%;
        }
        h3 {
          margin-top: 5rem;
          border-bottom: 1px solid #cfd8d8;
          border-left: 8px double #cfd8d8;
          padding: 1rem;
          font-size: 140%;
        }
        .post-body {
          font-size: 18px;
        }
      `}</style>
    </Layout>
  )
}

/**
 * ページコンポーネントで使用する値を用意する
 */
export async function getStaticProps({ params }) {
  const content = await readContentFile({ fs, slug: params.slug.join('/') })
  return {
    props: {
      ...content
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
