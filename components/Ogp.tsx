import React from "react"
import Head from "next/head"

const Ogp = (props: { slug: string; title: string; description: string; thumbnail: string }) => {
  const siteTitle = "FUN YOU BLOG"

  return (
    <Head>
      <meta property="og:url" content={`${process.env.PRD_URL}/entry/${props.slug}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="ja" />
      <meta property="og:image" content={`${process.env.PRD_URL}${props.thumbnail}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@alfe_below" />
    </Head>
  )
}

export default Ogp