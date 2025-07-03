import Document, { Html, Head, Main, NextScript } from 'next/document'

import { GA_TRACKING_ID } from '../lib/gtag'

class MyDocument extends Document {
  render() {
    // Validate GA_TRACKING_ID to prevent XSS
    const sanitizedGAId = GA_TRACKING_ID && /^G-[A-Z0-9]+$/.test(GA_TRACKING_ID) ? GA_TRACKING_ID : null;
    
    return (
      <Html lang="ja">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet" />
          {sanitizedGAId && <script async src={`https://www.googletagmanager.com/gtag/js?id=${sanitizedGAId}`} />}
          {sanitizedGAId && <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${sanitizedGAId}', { page_path: window.location.pathname });
              `,
            }}
          />}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default MyDocument
