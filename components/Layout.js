import Head from "next/head"
import Link from "next/link"

const Layout = (props) => {
  const { title, children } = props
  const siteTitle = "FUN YOU BLOG"

  return (
    <div className="page">
      <Head>
        <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1 className="site-title">
          <Link href="/">
            <a>{siteTitle}</a>
          </Link>
        </h1>
      </header>

      <main>
        {title ? <h1 className="page-title">{title}</h1> : ``}
        <div className="page-main">
          {children}
        </div>
      </main>

      <footer>
      </footer>

      <style jsx>{`
        .page {
          padding: 2em 1em;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        @media screen and (max-width: 767px) {
          .page {
            padding: 0;
          }
        }

        header {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 0 4em;
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

        footer {
          margin-top: 4em;
          padding-top: 2em;
          padding-bottom: 2em;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Noto Sans JP', -apple-system, "Segoe UI", "Helvetica Neue",
            "Hiragino Kaku Gothic ProN", メイリオ, meiryo, sans-serif;
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
  )
}

export default Layout