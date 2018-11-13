import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

/* eslint-disable */
export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    /*
       const sheet = new ServerStyleSheet()
       const main = sheet.collectStyles(<Main />)
       const styleTags = sheet.getStyleElement()
     */

    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="renderer" content="webkit" />
          <meta name="referrer" content="origin" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, viewport-fit=cover"
          />
          {/* load g2 from CDN, it's too big for dynamic import, and i am poor ..' */}
          <script
            async
            src="https://a.alipayobjects.com/g/datavis/g2/2.3.13/index.js"
          />
          <link
            href="https://cdn.jsdelivr.net/npm/antd@3.8.4/dist/antd.min.css"
            rel="stylesheet"
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${
              process.env.GA_TRACING_ID
            }`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.GA_TRACING_ID}');
                `,
            }}
          />
          {this.props.styleTags}
        </Head>
        <body id="body">
          <Main />
          <NextScript />
        </body>
        {/* load iziToast from CDN */}
        <script
          async
          src="https://cdn.jsdelivr.net/npm/izitoast@1.4.0/dist/js/iziToast.min.js"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/izitoast@1.4.0/dist/css/iziToast.min.css"
          rel="stylesheet"
        />
        {/* the ali-oss-sdk es6 import support sucks */}
        {/* import from cdn is fine, it's not my money anyway */}
        <script
          async
          src="https://gosspublic.alicdn.com/aliyun-oss-sdk-5.2.0.min.js"
        />
        <noscript>You need to enable JavaScript to run this app.</noscript>
      </html>
    )
  }
}
