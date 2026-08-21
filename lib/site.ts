export const SITE_TITLE = "FUN YOU BLOG"
export const SITE_DESCRIPTION = "書籍沼なIT屋さんのブログ"

const PRODUCTION_URL = "https://blog.alfebelow.com"

export const getAbsoluteUrl = (pathname: string) => {
  const baseUrl = process.env.PRD_URL || PRODUCTION_URL
  const encodedPathname = pathname
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/")
  return new URL(encodedPathname, `${baseUrl.replace(/\/$/, "")}/`).toString()
}
