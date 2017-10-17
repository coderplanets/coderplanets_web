import React from 'react'
import { Provider } from 'mobx-react'
import { IntlProvider } from 'react-intl'
import Link from 'next/link'

import initRootStore from '../stores'

import globalStyles from '../utils/global_styles'
import Sidebar from '../containers/Sidebar'

export default class Other extends React.Component {
  static getInitialProps({ req }) {
    const isServer = !!req
    const store = initRootStore(isServer)
    // todo: get locale
    return { isServer, version: store.version }
  }

  constructor(props) {
    super(props)
    this.store = initRootStore(props.isServer)
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
              <Link href="/index">
                {/* eslint-disable jsx-a11y/anchor-is-valid */}
                <a>Navigate</a>
              </Link>
            </div>
          </div>
        </IntlProvider>
      </Provider>
    )
  }
}
