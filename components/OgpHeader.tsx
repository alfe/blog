import React from "react"
import Head from "next/head"

const Ogp = () => {
  const siteTitle = "FUN YOU BLOG"

  return (
    <Head>
      <meta property="og:url" content={`${process.env.PRD_URL}/`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content="書籍沼なIT屋さんのブログ" />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="ja" />
      <meta property="og:image" content={`${process.env.PRD_URL}/img/ogp-home.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@alfe_below" />
    </Head>
  )
}

export default Ogp