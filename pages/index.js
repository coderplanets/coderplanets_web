import React from 'react'
import { Provider } from 'mobx-react'

import initRootStore from '../stores'
import ThemeWrapper from '../containers/ThemeWrapper'
import MultiLanguage from '../containers/MultiLanguage'
import Sidebar from '../containers/Sidebar'
import Preview from '../containers/Preview'
import Doraemon from '../containers/Doraemon'
import Route from '../containers/Route'
import BodyLayout from '../containers/BodyLayout'
import Header from '../containers/Header'
import Banner from '../containers/Banner'
import Content from '../containers/Content'

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
    return (
      <Provider store={this.store}>
        <ThemeWrapper>
          <Route />
          <MultiLanguage>
            <Sidebar />
            <Preview />
            <Doraemon />
            <BodyLayout>
              <Header />
              <Banner />
              <Content />
            </BodyLayout>
          </MultiLanguage>
        </ThemeWrapper>
      </Provider>
    )
  }
}
