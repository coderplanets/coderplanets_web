import React from 'react'
import PropTypes from 'prop-types'

import { Provider } from 'mobx-react'

import Shop from '../components/Shop'
import { initStore } from '../stores/rootStore'

export default class ShopPage extends React.Component {
  static getInitialProps({ req }) {
    const isServer = !!req
    const store = initStore(isServer)
    return { isServer, store }
  }

  constructor(props) {
    super(props)
    this.store = initStore(props.isServer)
  }

  render() {
    return (
      <Provider store={this.store}>
        <Shop />
      </Provider>
    )
  }
}

ShopPage.propTypes = {
  isServer: PropTypes.bool.isRequired,
}
