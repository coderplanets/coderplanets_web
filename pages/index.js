import React from 'react'
import { Provider } from 'mobx-react'

import ThemeWrapper from 'containers/ThemeWrapper'
import MultiLanguage from 'containers/MultiLanguage'
import Sidebar from 'containers/Sidebar'
import Preview from 'containers/Preview'
import Doraemon from 'containers/Doraemon'
import Route from 'containers/Route'
import BodyLayout from 'containers/BodyLayout'
import Header from 'containers/Header'
import Banner from 'containers/Banner'
import Content from 'containers/Content'
import Footer from 'containers/Footer'

import GAWraper from 'components/GAWraper'
import ErrorPage from 'components/ErrorPage'
import initRootStore from 'stores/init'
// import { GAWraper, ErrorPage } from 'components'

import { makeDebugger } from 'utils'

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
