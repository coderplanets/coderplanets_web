/*
 *  shop page
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'mobx-react'

import Shop from '../containers/Shop'
import initStore from '../stores/bak/rootStore'

import globalStyles from '../utils/global_styles'

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
        <div>
          <style jsx global>
            {globalStyles}
          </style>

          <Shop />
        </div>
      </Provider>
    )
  }
}

ShopPage.propTypes = {
  isServer: PropTypes.bool.isRequired,
}
