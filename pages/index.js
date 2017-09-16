import React from 'react'
import { Provider } from 'mobx-react'
import { IntlProvider } from 'react-intl'

import { initAppStore } from '../stores'
import Decrator from '../containers/Decrator'
import Sidebar from '../containers/Sidebar'
import Body from '../containers/Body'

export default class Index extends React.Component {
  static getInitialProps({ req }) {
    const isServer = !!req
    const store = initAppStore(isServer)
    // todo: get locale
    return { isServer, version: store.version }
  }

  constructor(props) {
    super(props)
    this.store = initAppStore(props.isServer)
  }

  render() {
    const locale = 'en'
    const messages = {}

    const route = this.props.url
    const globalStatus = {
      route: this.props.url,
    }

    return (
      <Provider store={this.store}>
        <Decrator>
          <IntlProvider locale={locale} messages={messages}>
            <div>
              <Sidebar {...globalStatus} />
              <Body route={route} />
            </div>
          </IntlProvider>
        </Decrator>
      </Provider>
    )
  }
}
