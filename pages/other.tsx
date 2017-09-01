import * as React from 'react'

import { Provider } from 'mobx-react'

import Page from '../components/Page'
import { initStore } from '../stores/store'

import { IntlProvider } from 'react-intl'

export default class Other extends React.Component<any> {
  static getInitialProps({ req }) {
    const isServer = !!req
    const store = initStore(isServer)
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
          <Page title="Other Page" linkTo="/" />
        </IntlProvider>
      </Provider>
    )
  }
}
