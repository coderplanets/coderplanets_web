import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import Helmet from 'react-helmet'

/* eslint-disable */
export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags, helmet: Helmet.renderStatic() }
  }

  // should render on <html>
  get helmetHtmlAttrComponents() {
    return this.props.helmet.htmlAttributes.toComponent()
  }

  // should render on <body>
  get helmetBodyAttrComponents() {
    return this.props.helmet.bodyAttributes.toComponent()
  }

  // should render on <head>
  get helmetHeadComponents() {
    return Object.keys(this.props.helmet)
      .filter(el => el !== 'htmlAttributes' && el !== 'bodyAttributes')
      .map(el => this.props.helmet[el].toComponent())
  }

  render() {
    /*
       const sheet = new ServerStyleSheet()
       const main = sheet.collectStyles(<Main />)
       const styleTags = sheet.getStyleElement()
     */

    return (
      <html {...this.helmetHtmlAttrComponents}>
        <Head>
          {this.helmetHeadComponents}
          <meta charSet="utf-8" />
          <meta name="renderer" content="webkit" />
          <meta name="theme-color" content="#323344" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, viewport-fit=cover"
          />

          <script src="https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js" />
          {/* load g2 from CDN, it's too big for dynamic import, and i am poor ..' */}
          <script
            async
            src="https://a.alipayobjects.com/g/datavis/g2/2.3.13/index.js"
          />
          <link
            href="https://cdn.staticfile.org/antd/3.8.4/antd.css"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Orbitron"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico?v=7" />

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
        <body id="body" {...this.helmetBodyAttrComponents}>
          <Main />
          <NextScript />
        </body>

        {/* load iziToast from CDN */}
        <script
          async
          src="https://cdn.staticfile.org/izitoast/1.4.0/js/iziToast.min.js"
        />
        <link
          href="https://cdn.staticfile.org/izitoast/1.4.0/css/iziToast.css"
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
