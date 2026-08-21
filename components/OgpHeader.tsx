import Head from "next/head"
import { getAbsoluteUrl, SITE_DESCRIPTION, SITE_TITLE } from "../lib/site"

const Ogp = (props: { path: string }) => {
  const url = getAbsoluteUrl(props.path)

  return (
    <Head>
      <meta name="description" content={SITE_DESCRIPTION} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={SITE_TITLE} />
      <meta property="og:description" content={SITE_DESCRIPTION} />
      <meta property="og:site_name" content={SITE_TITLE} />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:image" content={getAbsoluteUrl("/img/ogp-home.png")} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@alfe_below" />
    </Head>
  )
}

export default Ogp
