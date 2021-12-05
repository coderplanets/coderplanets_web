import { useEffect } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import { useRouter } from 'next/router'
import GA from '@/utils/analytics'

/**
 * import default seo configuration
 * Using a custom _app.js with next-seo you can set default SEO
 * that will apply to every page. Full info on how the default works
 * can be found here: https://github.com/garmeeh/next-seo#default-seo-configuration
 */
// import { appWithTranslation } from '@/i18n'

const App = ({ Component, pageProps }) => {
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
      <Head>
        <meta charSet="utf-8" />
        <meta name="renderer" content="webkit" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Audiowide"
          data-async="true"
        />

        <link
          rel="stylesheet"
          href="https://cdn.staticfile.org/izitoast/1.4.0/css/iziToast.css"
          data-async="true"
        />
      </Head>

      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA.TRACKING_ID}`}
      />

      <Script
        strategy="afterInteractive"
        data-domain="coderplanets.com"
        src="https://plausible.io/js/plausible.js"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA.TRACKING_ID}', {
            page_path: window.location.pathname
          });
        `}
      </Script>

      <Script
        strategy="lazyOnload"
        src="https://cdn.staticfile.org/izitoast/1.4.0/js/iziToast.min.js"
      />

      <Component {...pageProps} />
    </>
  )
}

// export default appWithTranslation(App)
export default App
