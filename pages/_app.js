import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import Raven from 'raven-js'

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
        <Head>
          <title>Coderplanets</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}
