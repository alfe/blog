import path from "path"

import { remark } from "remark"
import remarkHtml from "remark-html"
import strip from "remark-strip-html"
import matter from "gray-matter"
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react";
import { createElement, Fragment } from "react"
import { visit } from "unist-util-visit";

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

  const components = {
  }
  const parsedContent = await remark()
    .use(remarkHtml, {sanitize: false})
    .use(() => {
      return (tree) => {
        visit(tree, "html", (node: { type: string; value: string }) => {
          node.type = "text";
        });
      }})
    .use(remarkRehype)
    .use(rehypeReact, {
        createElement,
        Fragment,
        components,
    })
    .process(matterResult.content)
  const content = parsedContent.toString()

  const description = await remark()
    .use(remarkHtml, {sanitize: true})
    .use(strip)
    .process(matterResult.content)
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

export { listContentFiles, readContentFile, readContentFiles }