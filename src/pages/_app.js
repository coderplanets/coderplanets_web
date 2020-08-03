import React from 'react'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import * as Sentry from '@sentry/node'

/**
 * import default seo configuration
 * Using a custom _app.js with next-seo you can set default SEO
 * that will apply to every page. Full info on how the default works
 * can be found here: https://github.com/garmeeh/next-seo#default-seo-configuration
 */
import { SEO } from '@/config'
import { appWithTranslation } from '@/i18n'

import CrashErrorHint from '@/components/CrashErrorHint'

Sentry.init({
  enabled: process.env.NODE_ENV === 'production',
  dsn: process.env.NEXT_PUBLIC_SENTRY_TOKEN,
})

const App = ({ Component, pageProps, err }) => {
  return (
    <>
      {/* see: https://github.com/vercel/next.js/blob/master/errors/no-document-viewport-meta.md */}
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>
      {err ? (
        <CrashErrorHint />
      ) : (
        /* render normal next.js app */
        <>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </>
      )}
    </>
  )
}

export default appWithTranslation(App)
