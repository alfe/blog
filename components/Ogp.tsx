import Head from "next/head"
import { getAbsoluteUrl, SITE_TITLE } from "../lib/site"

type OgpProps = {
  path: string;
  title: string;
  description: string;
  published: string;
  thumbnail?: string;
}

const Ogp = (props: OgpProps) => {
  const url = getAbsoluteUrl(props.path)
  const imageUrl = props.thumbnail ? getAbsoluteUrl(props.thumbnail) : undefined
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "BlogPosting",
    headline: props.title,
    datePublished: props.published,
    url,
    ...(imageUrl ? { image: imageUrl } : {}),
  }
  const structuredDataJson = JSON.stringify(structuredData).replace(/</g, "\\u003c")

  return (
    <Head>
      <meta name="description" content={props.description} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:site_name" content={SITE_TITLE} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="article:published_time" content={props.published} />
      {imageUrl && <meta property="og:image:width" content="1365" />}
      {imageUrl && <meta property="og:image:height" content="768" />}
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      {imageUrl && <meta property="og:image:alt" content={`${props.title}のサムネイル`} />}
      <meta property="og:locale" content="ja_JP" />
      <meta name="twitter:card" content={imageUrl ? "summary_large_image" : "summary"} />
      <meta name="twitter:site" content="@alfe_below" />
      <meta name="twitter:creator" content="@alfe_below" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}
      <script type="application/ld+json">{structuredDataJson}</script>
    </Head>
  )
}

export default Ogp
