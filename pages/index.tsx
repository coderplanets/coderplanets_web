import * as React from 'react'
import Page from '../components/Page'
import { initStore } from '../stores/store'

import { Provider } from 'mobx-react'

export default class Index extends React.Component {
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
    return (
      <Provider store={this.store}>
        <Page title="Index Page" linkTo="/other" />
      </Provider>
    )
  }
}
