/*
 * because mobx's observer mechanism, we should manually watch the langs
 * otherwhise the render will not be triggled
 */

import React from 'react'
import { IntlProvider } from 'react-intl'

import { observerHoc } from '@utils'

const selector = ({ store }) => ({
  locale: store.locale,
  messages: store.langMessages,
})

const IntlObserver = observerHoc(selector, ({ children, locale, messages }) => {
  return (
    // key is important, see https://github.com/yahoo/react-intl/issues/234
    <IntlProvider key={locale} locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  )
})

export default IntlObserver
