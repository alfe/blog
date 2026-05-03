import { createElement } from "react";
import path from "path"
import { remark } from "remark"
import remarkHtml from "remark-html"
import strip from "remark-strip-html"
import matter from "gray-matter"
import { unified } from "unified"
import rehypeReact, { type Options as ReactOptions } from "rehype-react"
import rehypeParse from "rehype-parse"
import * as prod from 'react/jsx-runtime';
import LinkCard from "components/LinkCard"

const production = { Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs, createElement: createElement };

const DIR = path.join(process.cwd(), "content/posts")
const EXTENSION = ".md"

/**
 * Markdown のファイル一覧を取得する
 */
const listContentFiles = ({ fs }: { fs: any }) => {
  const result = diggingFiles(fs, '');
  return result;
}

const diggingFiles = (fs: any, dir: string): any[] => {
  let fileNames: any[] = [];

  const files = fs.readdirSync(`${DIR}/${dir}`, { withFileTypes: true })
  fileNames = [
    ...files
      .filter((file: any) => path.parse(file.name).ext === EXTENSION)
      .map((file: any) => `${dir}/${file.name}`),

    ...files
      .filter((file: any) => file.isDirectory())
      .map((childDir: any) => diggingFiles(fs, `${dir}/${childDir.name}`)),
  ];
  return fileNames.flat();
}

/**
 * Markdown のファイルの中身をパースして取得する
 */
const readContentFile = async ({ fs, slug, dirname = '', filename }: { fs: any, slug?: string, dirname?: string, filename?: string }) => {
  if (slug === undefined) {
    slug = path.parse(filename ?? '').name
    dirname = `${path.parse(filename ?? '').dir}/`
    dirname = dirname === '//' ? '/' : dirname
  }
  const raw = fs.readFileSync(path.join(DIR, `${dirname}${slug}${EXTENSION}`), 'utf8')
  const matterResult = matter(raw)
  const { Title, Category, IMAGE, Date: rawPublished } = matterResult.data

  const parsedContent = await remark()
    .use(remarkHtml, {sanitize: false})
    .processSync(matterResult.content)
  const content = parsedContent.toString()

  const description = await remark()
    .use(remarkHtml, {sanitize: true})
    .use(strip)
    .processSync(matterResult.content)
    .toString()
    .replace(/\<.+\>(.*)\<\/.+\>/g, '$1')
    .substring(0, 200)

  return {
    title: Title || null,
    category: Category || null,
    thumbnail: !IMAGE ? null : IMAGE  ,
    published: (rawPublished).toISOString() || null,
    content,
    description,
    slug,
    dirname,
  }
}

/**
 * Markdown のファイルの中身を全件パースして取得する
 */
const readContentFiles = async ({ fs }: { fs: any }) => {
  const promises = listContentFiles({ fs })
    .map((filename: string) => readContentFile({ fs, filename }))

  const contents = await Promise.all(promises)

  return contents.sort(sortWithProp('published', true))
}

/**
 * Markdown の投稿をソートするためのヘルパー
 */
const sortWithProp = (name: string, reversed: boolean) => (a: any, b: any) => {
  if (reversed) {
    return a[name] < b[name] ? 1 : -1
  } else {
    return a[name] < b[name] ? -1 : 1
  }
}

const replaceComponentInHtml = (propsValues: {
  a: { [key: string]: any };
}) => {
  const rehypeReactOption: ReactOptions = {
    ...production,
    components: {
      a: ((props: any) => LinkCard({ ...props, ...propsValues.a })) as any,
    },
  } as any;
  return unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeReact, rehypeReactOption);
}
export { listContentFiles, readContentFile, readContentFiles, replaceComponentInHtml }
