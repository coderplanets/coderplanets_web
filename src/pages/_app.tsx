import { useEffect } from 'react'
import { useRouter } from 'next/router'
import GA from '@/utils/analytics'

/**
 * import default seo configuration
 * Using a custom _app.js with next-seo you can set default SEO
 * that will apply to every page. Full info on how the default works
 * can be found here: https://github.com/garmeeh/next-seo#default-seo-configuration
 */
// import { appWithTranslation } from '@/i18n'

// import CrashErrorHint from '@/widgets/CrashErrorHint'

const App = ({ Component, pageProps, err }) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      GA.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      {/* see: https://github.com/vercel/next.js/blob/master/errors/no-document-viewport-meta.md */}
      {err ? (
        <div>CrashErrorHint</div>
      ) : (
        /* render normal next.js app */
        <>
          <Component {...pageProps} />
        </>
      )}
    </>
  )
}

// export default appWithTranslation(App)
export default App
