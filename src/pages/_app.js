import React from 'react'
import App from 'next/app'
import { DefaultSeo } from 'next-seo'

/**
 * import default seo configuration
 * Using a custom _app.js with next-seo you can set default SEO
 * that will apply to every page. Full info on how the default works
 * can be found here: https://github.com/garmeeh/next-seo#default-seo-configuration
 */
import SEO from '@/config/next_seo'
import { sentry } from '@/services'
import CrashErrorHint from '@/components/CrashErrorHint'

const { Sentry, captureException } = sentry({
  release: process.env.SENTRY_RELEASE,
})

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
    try {
      let pageProps = {}

      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
      }

      return { pageProps }
    } catch (error) {
      // Capture errors that happen during a page's getInitialProps.
      // This will work on both client and server sides.
      const errorEventId = captureException(error, ctx)
      return {
        hasError: true,
        errorEventId,
      }
    }
  }

  static getDerivedStateFromProps(props, state) {
    // If there was an error generated within getInitialProps, and we haven't
    // yet seen an error, we add it to this.state here
    return {
      hasError: props.hasError || state.hasError || false,
      errorEventId: props.errorEventId || state.errorEventId || undefined,
    }
  }

  static getDerivedStateFromError() {
    // React Error Boundary here allows us to set state flagging the error (and
    // later render a fallback UI).
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    const errorEventId = captureException(error, { errorInfo })

    // Store the event id at this point as we don't have access to it within
    // `getDerivedStateFromError`.
    this.setState({ errorEventId })
  }

  render() {
    const { hasError, errorEventId } = this.state
    const { Component, pageProps } = this.props

    /* eslint-disable */
    return hasError ? (
      <CrashErrorHint
        onReport={() => {
          Sentry.showReportDialog({ eventId: errorEventId })
        }}
      />
    ) : (
      /* render normal next.js app */
      <React.Fragment>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </React.Fragment>
    )
  }
}
