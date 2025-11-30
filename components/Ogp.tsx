import React from "react"
import Head from "next/head"

const Ogp = (props: { slug: string; title: string; description: string; thumbnail: string }) => {
  const siteTitle = "FUN YOU BLOG"

  return (
    <Head>
      <meta property="description" content={props.description} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:url" content={`${process.env.PRD_URL}/entry/${props.slug}`} />
      <meta property="og:type" content="website" />
      <meta property="og:image:width" content="1365" />
      <meta property="og:image:height" content="768" />
      <meta property="og:image" content={`${process.env.PRD_URL}${props.thumbnail}`} />
      <meta property="og:image:alt" content={`${props.title}のサムネイル`} />
      <meta property="og:locale" content="ja" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@alfe_below" />
      <meta name="twitter:creator" content="@alfe_below" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:image" content={`${process.env.PRD_URL}${props.thumbnail}`} />
    </Head>
  )
}

export default Ogp