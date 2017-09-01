import * as React from 'react'
import Page from '../components/Page'
import { initStore } from '../stores/store'

import { Provider } from 'mobx-react'
import { defineMessages, FormattedMessage, IntlProvider } from 'react-intl'

const { description } = defineMessages({
  description: {
    id: 'page.index.title',
    defaultMessage: 'i am index fuckig header bbb',
  },
})

export default class Index extends React.Component {
  static getInitialProps({ req }) {
    const isServer = !!req
    const store = initStore(isServer)
    // todo: get locale
    return { isServer, lastUpdate: store.lastUpdate }
  }

  store: any = null

  constructor(props) {
    super(props)
    this.store = initStore(props.isServer, props.lastUpdate)
  }

  render() {
    const locale = 'en'
    const messages = {}

    return (
      <Provider store={this.store}>
        <IntlProvider locale={locale} messages={messages}>
          <div>
            <h1>
              <FormattedMessage {...description} />
            </h1>
            <Page title="Index Page" linkTo="/other" />
          </div>
        </IntlProvider>
      </Provider>
    )
  }
}
