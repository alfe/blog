import { ReactNode } from "react";
import Head from "next/head"
import Link from "next/link"
import Footer from "./Footer";

const Layout = (props: { title?: string; children: ReactNode; }) => {
  const { title, children } = props
  const siteTitle = "FUN YOU BLOG"

  return (
    <div>
      <Head>
        <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="alternate" type="application/rss+xml" title={siteTitle} href={`/feed.xml`} />
      </Head>

      <header>
        <h1 className="site-title">
          <Link href="/" prefetch={false}>{siteTitle}</Link>
        </h1>
      </header>

      <main>
        {title ? <h2 className="page-title">{title}</h2> : ``}
        <div className="page-main">
          {children}
        </div>
      </main>

      <Footer />

      <style jsx global>{`
        main {
          padding: 2em 1em;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        @media screen and (max-width: 767px) {
          main {
            padding: 0;
          }
        }

        header {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 2em 0;
        }

        .site-title {
          font-size: 3rem;
          color: #3d501a;
          text-shadow: 2px 2px 8px #a1ab8f, 0px -2px 1px #fff;
          letter-spacing: -4px;
        }
        .site-title a {
          color: inherit;
          text-decoration: none;
        }
        .page-title {
          font-size: 2rem;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: "Noto Sans Japanese", 'Noto Sans JP', -apple-system, "メイリオ", Meiryo, sans-serif;
          color: #222;
        }

        img,
        iframe {
          max-width: 100%;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: Montserrat, -apple-system, "Segoe UI", "Helvetica Neue",
            "Hiragino Kaku Gothic ProN", メイリオ, meiryo, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
export default Layout

