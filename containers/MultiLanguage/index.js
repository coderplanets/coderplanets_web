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
  console.log('observer locale: ', locale)
  console.log('observer messages: ', messages)

  return (
    <IntlProvider locale={locale} messages={messages}>
      <div>{children}</div>
    </IntlProvider>
  )
})

export default IntlObserver
