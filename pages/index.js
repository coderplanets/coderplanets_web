import React from 'react'
import { Provider } from 'mobx-react'

import { initAppStore } from '../stores'
import Decrator from '../containers/Decrator'
import MultiLanguage from '../containers/MultiLanguage'
import Sidebar from '../containers/Sidebar'
import Body from '../containers/Body'

export default class Index extends React.Component {
  static getInitialProps({ req }) {
    const isServer = !!req
    /* eslint-disable no-underscore-dangle */
    /* eslint-disable no-undef */
    const { locale, messages } = req || window.__NEXT_DATA__.props
    // console.log('the fuck messages: ', messages)
    const langSetup = {}
    langSetup[locale] = messages
    // console.log('langSetup: ', langSetup)
    const store = initAppStore(isServer, langSetup)
    /* eslint-enable no-undef */

    console.log('getInitialProps locale: ', locale)
    console.log('getInitialProps messages: ', messages)
    return { isServer, version: store.version, messages, locale, langSetup }
  }

  constructor(props) {
    super(props)
    this.store = initAppStore(props.isServer, props.langSetup)
  }

  render() {
    /* const locale = 'en' */
    /* const messages = this.props.messages */

    const route = this.props.url
    const globalStatus = {
      route: this.props.url,
    }
    console.log('this.store: ', this.store.locale)

    return (
      <Provider store={this.store}>
        <Decrator>
          <MultiLanguage>
            <div>
              <Sidebar {...globalStatus} />
              <Body route={route} />
            </div>
          </MultiLanguage>
        </Decrator>
      </Provider>
    )
  }
}
