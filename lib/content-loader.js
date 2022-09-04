import path from "path"

import { remark } from "remark"
import remarkHtml from "remark-html"
import strip from "remark-strip-html"
import matter from "gray-matter"

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
const readContentFile = async ({ fs, slug, dirname = '', filename }) => {
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
    .process(matterResult.content)
  const content = parsedContent.toString()
  const parsedSanitizeContent = await remark()
    .use(remarkHtml, {sanitize: true})
    .use(strip)
    .process(matterResult.content)
  const description = parsedSanitizeContent
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