import React from 'react'
import NextErrorComponent from 'next/error'
import { Provider } from 'mobx-react'

import AnalysisService from '@/services/Analysis'
import ThemePalette from '@/containers/layout/ThemePalette'
import ErrorPage from '@/components/ErrorPage'

import { useStore } from '@/stores/init'

import { Wrapper } from '@/containers/layout/GlobalLayout/styles'

const Error = (props) => {
  const store = useStore(props)

  const { statusCode, hasGetInitialPropsRun, err } = props

  if (!hasGetInitialPropsRun && err) {
    // getInitialProps is not called in case of
    // https://github.com/vercel/next.js/issues/8592. As a workaround, we pass
    // err via _app.js so it can be captured
  }

  return (
    <Provider store={store}>
      <AnalysisService>
        <ThemePalette>
          <Wrapper>
            <ErrorPage errorCode={statusCode} />
          </Wrapper>
        </ThemePalette>
      </AnalysisService>
    </Provider>
  )
}

// Error.getInitialProps = async () => ({
//   namespacesRequired: ['general'],
// })

Error.getInitialProps = async ({ res, err, asPath }) => {
  const i18nConfig = { namespacesRequired: ['general'] }
  const errorInitialProps = await NextErrorComponent.getInitialProps({
    res,
    err,
  })

  // Workaround for https://github.com/vercel/next.js/issues/8592, mark when
  // getInitialProps has run
  errorInitialProps.hasGetInitialPropsRun = true

  // Running on the server, the response object (`res`) is available.
  //
  // Next.js will pass an err on the server if a page's data fetching methods
  // threw or returned a Promise that rejected
  //
  // Running on the client (browser), Next.js will provide an err if:
  //
  //  - a page's `getInitialProps` threw or returned a Promise that rejected
  //  - an exception was thrown somewhere in the React lifecycle (render,
  //    componentDidMount, etc) that was caught by Next.js's React Error
  //    Boundary. Read more about what types of exceptions are caught by Error
  //    Boundaries: https://reactjs.org/docs/error-boundaries.html

  if (res?.statusCode === 404) {
    // Opinionated: do not record an exception in Sentry for 404
    return { statusCode: 404, ...i18nConfig }
  }
  if (err) {
    return { ...errorInitialProps, ...i18nConfig }
  }

  // If this point is reached, getInitialProps was called without any
  // information about what the error might be. This is unexpected and may
  // indicate a bug introduced in Next.js, so record it in Sentry

  return { ...errorInitialProps, ...i18nConfig }
}

export default Error
