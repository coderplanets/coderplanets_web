import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

/* eslint-disable */
export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="renderer" content="webkit" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, viewport-fit=cover"
          />
          <title>cps</title>
          <link
            href="https://cdn.jsdelivr.net/npm/antd@3.1.4/dist/antd.min.css"
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
          {styleTags}
        </Head>
        <body id="body">
          <div className="root">{main}</div>
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
          src="http://gosspublic.alicdn.com/aliyun-oss-sdk-5.2.0.min.js"
        />
        <noscript>You need to enable JavaScript to run this app.</noscript>
      </html>
    )
  }
}
