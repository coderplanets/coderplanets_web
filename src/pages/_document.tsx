import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'

/* eslint-disable */
// @ts-ignore
export default class DocumentPage extends Document {
  static async getInitialProps({ renderPage }) {
    // const sheet = new ServerStyleSheet()
    // const originalRenderPage = ctx.renderPage
    const sheet = new ServerStyleSheet()

    try {
      const page = renderPage(
        (App) => (props) => sheet.collectStyles(<App {...props} />),
      )
      const styleTags = sheet.getStyleElement()
      return { ...page, styleTags }
    } catch (e) {
      sheet.seal()
      throw e
    }
  }
}
