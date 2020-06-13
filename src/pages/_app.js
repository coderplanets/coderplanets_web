import React from 'react'
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
  return err ? (
    <CrashErrorHint />
  ) : (
    /* render normal next.js app */
    <React.Fragment>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default appWithTranslation(App)
