import React from 'react'
import { Provider } from 'mobx-react'
import { IntlProvider } from 'react-intl'
import Link from 'next/link'

import initAppStore from '../stores'

import globalStyles from '../utils/global_styles'
import Sidebar from '../containers/Sidebar'

export default class Other extends React.Component {
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

    return (
      <Provider store={this.store}>
        <IntlProvider locale={locale} messages={messages}>
          <div>
            <style jsx global>
              {globalStyles}
            </style>
            <Sidebar />
            <div style={{ textAlign: 'center' }}>
              <h2>Other page</h2>
              <Link href={'/index'}>
                <a>Navigate</a>
              </Link>
            </div>
          </div>
        </IntlProvider>
      </Provider>
    )
  }
}
