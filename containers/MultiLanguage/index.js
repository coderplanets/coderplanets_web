/*
 * because mobx's observer mechanism, we should manually watch the langs
 * otherwhise the render will not be triggled
 */

import React from 'react'
import { IntlProvider } from 'react-intl'

import observer from '../../utils/mobx_utils'

const selector = ({ store }) => ({
  locale: store.locale,
  messages: store.langMessages,
})

const IntlObserver = observer(selector, ({ children, locale, messages }) => {
  return (
    // key is important, see https://github.com/yahoo/react-intl/issues/234
    <IntlProvider key={locale} locale={locale} messages={messages}>
      <div>{children}</div>
    </IntlProvider>
  )
})

export default IntlObserver
