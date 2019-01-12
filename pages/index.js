import React from 'react'
import { Provider } from 'mobx-react'

import initRootStore from '../stores/init'

import { GAWraper, ErrorPage } from '../components'

import {
  ThemeWrapper,
  MultiLanguage,
  Sidebar,
  Preview,
  Doraemon,
  Route,
  BodyLayout,
  Header,
  Banner,
  Content,
  Footer,
} from '../containers'

import { makeDebugger } from '../utils'

/* eslint-disable-next-line */
const debug = makeDebugger('page:community')

// try to fix safari bug
// see https://github.com/yahoo/react-intl/issues/422
global.Intl = require('intl')
/*
   NOTE: in dev mode, this index page is always be required, even the server
   is not routing to this page, it's very confused, help needed

   currently it's just the community page with no data fetch, works fine though
 */
export default class PageCommunity extends React.Component {
  static async getInitialProps() {
    return {}
  }

  constructor(props) {
    super(props)
    const store = props.statusCode
      ? initRootStore({ langSetup: {} })
      : initRootStore({ ...props })

    this.store = store
    // this.store = initRootStore({ ...props })
  }

  render() {
    const { statusCode, target } = this.props

    return (
      <Provider store={this.store}>
        <GAWraper>
          <ThemeWrapper>
            {statusCode ? (
              <ErrorPage
                errorCode={statusCode}
                page="community"
                target={target}
              />
            ) : (
              <React.Fragment>
                <Route />
                <MultiLanguage>
                  <Sidebar />
                  <Preview />
                  <Doraemon />
                  <BodyLayout>
                    <Header />
                    <Banner />
                    <Content />
                    <Footer />
                  </BodyLayout>
                </MultiLanguage>
              </React.Fragment>
            )}
          </ThemeWrapper>
        </GAWraper>
      </Provider>
    )
  }
}
