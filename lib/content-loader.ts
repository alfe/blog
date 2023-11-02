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

// @ts-expect-error: the react types are missing.
const production = { Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs };

const DIR = path.join(process.cwd(), "content/posts")
const EXTENSION = ".md"

/**
 * Markdown のファイル一覧を取得する
 */
const listContentFiles = ({ fs }) => {
  const result = diggingFiles(fs, '');
  return result;
}

const diggingFiles = (fs, dir) => {
  let fileNames = [];
  
  const files = fs.readdirSync(`${DIR}/${dir}`, { withFileTypes: true })
  fileNames = [
    ...files
      .filter((file) => path.parse(file.name).ext === EXTENSION)
      .map((file) => `${dir}/${file.name}`),

    ...files
      .filter(file => file.isDirectory())
      .map(childDir => diggingFiles(fs, `${dir}/${childDir.name}`)),
  ];
  return fileNames.flat();
}

/**
 * Markdown のファイルの中身をパースして取得する
 */
const readContentFile = async ({ fs, slug, dirname = '', filename }: { fs, slug?: string, dirname?: string, filename?: string }) => {
  if (slug === undefined) {
    slug = path.parse(filename).name
    dirname = `${path.parse(filename).dir}/`
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
    thumbnail: !IMAGE ? null : (IMAGE.includes('https://') ? IMAGE : `${process.env.SITE_URL}${IMAGE}`),
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
const readContentFiles = async ({ fs }) => {
  const promises = listContentFiles({ fs })
    .map((filename) => readContentFile({ fs, filename }))

  const contents = await Promise.all(promises)

  return contents.sort(sortWithProp('published', true))
}

/**
 * Markdown の投稿をソートするためのヘルパー
 */
const sortWithProp = (name, reversed) => (a, b) => {
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
      a: (props: { href: string; children: string[]; }) => LinkCard({ ...props, ...propsValues.a }),
    },
  };
  return unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeReact, rehypeReactOption);
}

export { listContentFiles, readContentFile, readContentFiles, replaceComponentInHtml }