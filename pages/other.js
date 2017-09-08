import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'mobx-react'
import { IntlProvider } from 'react-intl'

import Page from '../components/Page'
import { initStore } from '../stores/store'

export default class Other extends React.Component {
  static getInitialProps({ req }) {
    const isServer = !!req
    const store = initStore(isServer)
    return { isServer, lastUpdate: store.lastUpdate }
  }

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

Other.propTypes = {
  isServer: PropTypes.bool.isRequired,
  lastUpdate: PropTypes.string,
}

Other.defaultProps = {
  lastUpdate: 0,
}
