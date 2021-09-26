import React from 'react'
import App from 'next/app'

/**
 * import default seo configuration
 * Using a custom _app.js with next-seo you can set default SEO
 * that will apply to every page. Full info on how the default works
 * can be found here: https://github.com/garmeeh/next-seo#default-seo-configuration
 */
// import SEO from '@config/next_seo'

// const { SENTRY_TOKEN } = process.env

export default class AppPage extends App {
  constructor() {
    /* eslint-disable-next-line */
    super(...arguments)

    this.state = {
      hasError: false,
      errorEventId: undefined,
    }
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    /* eslint-disable */
    return (
      <React.Fragment>
        <Component {...pageProps} />
      </React.Fragment>
    )
  }
}
