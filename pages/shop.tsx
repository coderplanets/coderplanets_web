import React from 'react'

import { Provider } from 'mobx-react'

import Shop from '../components/Shop'
import { initStore } from '../stores/rootStore'

export default class Other extends React.Component<any> {
  static getInitialProps({ req }) {
    const isServer = !!req
    const store = initStore(isServer)
    return { isServer, store }
  }

  store: any = null

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
