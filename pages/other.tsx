import * as React from 'react'
import { Provider } from 'mobx-react'
import { initStore } from '../store'
import Page from '../components/Page'

export default class Other extends React.Component {
  static getInitialProps({ req }) {
    const isServer = !!req
    const store = initStore(isServer)
    return { lastUpdate: store.lastUpdate, isServer }
  }

  store: any = null

  constructor(props) {
    super(props)
    this.store = initStore(props.isServer, props.lastUpdate)
  }

  render() {
    return (
      <Provider store={this.store}>
        <Page title="Other Page" linkTo="/" />
      </Provider>
    )
  }
}
