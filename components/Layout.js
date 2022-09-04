import Head from "next/head"
import Link from "next/link"
import Image from "next/image";

const Layout = (props) => {
  const { title, children } = props
  const siteTitle = "FUN YOU BLOG"

  return (
    <div>
      <Head>
        <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="alternate" type="application/atom+xml" title={siteTitle} href={`${process.env.PRD_URL}/atom.xml`} />
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
        <div>
          <h2>カテゴリー</h2>
          <ul>
            <li><Link href="/category/[category]" as="/category/本"><a>本</a></Link></li>
            <li><Link href="/category/[category]" as="/category/プログラム"><a>プログラム</a></Link></li>
            <li><Link href="/category/[category]" as="/category/LifeHack"><a>LifeHack</a></Link></li>
            <li><Link href="/category/[category]" as="/category/レビュー"><a>レビュー</a></Link></li>
            <li><Link href="/category/[category]" as="/category/雑記"><a>雑記</a></Link></li>
          </ul>
        </div>
        <div>
          <h2>月別アーカイブ</h2>
          <ul>
            <li><Link href="/byMonth/[byMonth]" as="/byMonth/2022"><a>2022</a></Link></li>
            <li><Link href="/byMonth/[byMonth]" as="/byMonth/2021"><a>2021</a></Link></li>
            <li><Link href="/byMonth/[byMonth]" as="/byMonth/2020"><a>2020</a></Link></li>
            <li><Link href="/byMonth/[byMonth]" as="/byMonth/2019"><a>2019</a></Link></li>
            <li><Link href="/byMonth/[byMonth]" as="/byMonth/2018"><a>2018</a></Link></li>
            <li><Link href="/byMonth/[byMonth]" as="/byMonth/2017"><a>2017</a></Link></li>
            <li><Link href="/byMonth/[byMonth]" as="/byMonth/2016"><a>2016</a></Link></li>
            <li><Link href="/byMonth/[byMonth]" as="/byMonth/2015"><a>2015</a></Link></li>
            <li><Link href="/byMonth/[byMonth]" as="/byMonth/2014"><a>2014</a></Link></li>
            <li><Link href="/byMonth/[byMonth]" as="/byMonth/2013"><a>2013</a></Link></li>
            <li><Link href="/byMonth/[byMonth]" as="/byMonth/2012"><a>2012</a></Link></li>
          </ul>
        </div>
        <div>
          <h2>プロフィール</h2>
          <div className="flex">
            <div className="face">
              <Image src="/img/face.png" alt="alfe" width={80} height={80} />
            </div>
            <div>
              <p>
                アルフ（
                <a href="https://twitter.com/alfe_below" target="_blank" rel="noopener noreferrer">
                  @alfe_below
                </a>
                ）
              </p>
              <p>書籍沼なIT屋さん</p>
            </div>
          </div>
          <ul className="profile-links">
            <li>
              <a href="https://alfebelow.com/" target="_blank" rel="noopener noreferrer">
                alfebelow.com
              </a>
            </li>
            <li>
              <a href="https://qiita.com/alfe_below" target="_blank" rel="noopener noreferrer">
                Qiita
              </a>
            </li>
            <li>
              <a href="https://github.com/alfe" target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </li>
          </ul>
        </div>
      </footer>

      <style jsx>{`
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

        footer {
          background: linear-gradient(180deg, #3D501A 0%, #616850 100%);
          margin-top: 4em;
          padding-top: 1em;
          padding-bottom: 4em;
          display: flex;
          justify-content: space-evenly;
          align-items: flex-start;
          color: rgb(255 255 255 / 80%);
        }
        footer h2 {
          text-shadow: 1px 1px 4px #131809;
        }
        footer ul {
          list-style-type: circle;
        }
        footer a {
          color: rgb(255 255 255 / 80%);
        }
        footer a:hover {
          color: rgb(255 255 255 / 100%);
        }
        footer a:active {
          color: rgb(255 255 255 / 70%);
        }
        footer .profile-links {
          margin-left: 80px;
        }
        .flex {
          display: flex;
          align-items: center;
          column-gap: 1.5rem;
        }
        .face {
          border-radius: 50%;
          overflow: hidden;
          width: 80px;
          height: 80px;
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
