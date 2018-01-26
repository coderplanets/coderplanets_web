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
          <title>mastani</title>
          <link
            href="http://image.mzliaoba.com/lib/antd.css"
            rel="stylesheet"
          />
          {/* <link */}
          {/* href="https://cdn.bootcss.com/graphiql/0.11.10/graphiql.min.css" */}
          {/* rel="stylesheet" */}
          {/* /> */}
          {/* <link */}
          {/* href="https://raw.githubusercontent.com/mydearxym/cdn/master/voyager.css" */}
          {/* rel="stylesheet" */}
          {/* /> */}

          {styleTags}
        </Head>
        <body id="body">
          <div className="root">{main}</div>
          <NextScript />
        </body>
      </html>
    )
  }
}
