import React from 'react'
import { Provider } from 'mobx-react'

import initIntroStore from '../stores/initIntroStore'

import ThemeWrapper from '../containers/ThemeWrapper'
import MultiLanguage from '../containers/MultiLanguage'
import IntroSidebar from '../containers/IntroSidebar'
import IntroBody from '../containers/IntroBody'
import Preview from '../containers/Preview'
import Doraemon from '../containers/Doraemon'

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
    const store = initIntroStore(isServer, langSetup)
    /* eslint-enable no-undef */

    return { isServer, version: store.version, messages, locale, langSetup }
  }

  constructor(props) {
    super(props)
    this.store = initIntroStore(props.isServer, props.langSetup)
  }

  render() {
    /* const locale = 'en' */
    /* const messages = this.props.messages */

    const route = this.props.url
    const globalStatus = {
      route: this.props.url,
    }

    return (
      <Provider store={this.store}>
        <ThemeWrapper>
          <MultiLanguage>
            <IntroSidebar {...globalStatus} />
            <Preview />
            <Doraemon />
            <IntroBody route={route} />
          </MultiLanguage>
        </ThemeWrapper>
      </Provider>
    )
  }
}
