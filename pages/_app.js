import React from 'react'
import App, { Container } from 'next/app'
import Raven from 'raven-js'
import NextSeo from 'next-seo'

/**
 * import default seo configuration
 * Using a custom _app.js with next-seo you can set default SEO
 * that will apply to every page. Full info on how the default works
 * can be found here: https://github.com/garmeeh/next-seo#default-seo-configuration
 */
import SEO from '../next-seo.config'

const { SENTRY_TOKEN } = process.env

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  constructor(...args) {
    super(...args)
    Raven.config(SENTRY_TOKEN).install()
  }

  componentDidCatch(error, errorInfo) {
    Raven.captureException(error, { extra: errorInfo })

    // This is needed to render errors correctly in development / production
    super.componentDidCatch(error, errorInfo)
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <NextSeo config={SEO} />
        <Component {...pageProps} />
      </Container>
    )
  }
}
