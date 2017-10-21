import React from 'react'
import { Provider } from 'mobx-react'

import initRootStore from '../stores'
import Decrator from '../containers/Decrator'
import MultiLanguage from '../containers/MultiLanguage'
import Sidebar from '../containers/Sidebar'
import Body from '../containers/Body'
import Drawer from '../containers/Drawer'

// try to fix safari bug
// see https://github.com/yahoo/react-intl/issues/422
global.Intl = require('intl')

export default class Index extends React.Component {
  static getInitialProps({ req }) {
    const isServer = !!req
    /* eslint-disable no-underscore-dangle */
    /* eslint-disable no-undef */
    const { locale, messages } = req || window.__NEXT_DATA__.props
    const langSetup = {}
    langSetup[locale] = messages
    const store = initRootStore(isServer, langSetup)
    /* eslint-enable no-undef */

    return { isServer, version: store.version, messages, locale, langSetup }
  }

  constructor(props) {
    super(props)
    this.store = initRootStore(props.isServer, props.langSetup)
  }

  render() {
    /* const locale = 'en' */
    /* const messages = this.props.messages */

    const route = this.props.url
    // TODO: move the route info to store
    const globalStatus = {
      route: this.props.url,
    }

    return (
      <Provider store={this.store}>
        <Decrator>
          <MultiLanguage>
            {/* <App/> */}
            <div>
              <Sidebar {...globalStatus} />
              <Drawer />
              <Body route={route} />
            </div>
          </MultiLanguage>
        </Decrator>
      </Provider>
    )
  }
}
