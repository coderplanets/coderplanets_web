import App from 'next/app'
import Raven from 'raven-js'

const { SENTRY_TOKEN } = process.env

export default class MyApp extends App {
  constructor(...args) {
    super(...args)
    console.log('SENTRY_TOKEN: ', SENTRY_TOKEN)
    Raven.config(SENTRY_TOKEN).install()
  }

  componentDidCatch(error, errorInfo) {
    Raven.captureException(error, { extra: errorInfo })

    // This is needed to render errors correctly in development / production
    super.componentDidCatch(error, errorInfo)
  }
}
