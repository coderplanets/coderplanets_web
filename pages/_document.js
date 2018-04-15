import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

/* eslint-disable */

// http://image.mzliaoba.com/lib/antd.css
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
            href="https://cdn.bootcss.com/antd/3.1.4/antd.css"
            rel="stylesheet"
          />
          <link
            href="https://api.tiles.mapbox.com/mapbox-gl-js/v0.42.0/mapbox-gl.css"
            rel="stylesheet"
          />
          {/* Global site tag (gtag.js) - Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-39874160-2"
          />
          <script>
            window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(
              arguments
            )}
            gtag('js', new Date()); gtag('config', 'UA-39874160-2');
          </script>

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
