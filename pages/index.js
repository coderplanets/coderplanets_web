import React from 'react'
import { Provider } from 'mobx-react'
import R from 'ramda'

import { ROUTE } from '@constant'
import { buildLog, parseURL, isServerSide } from '@utils'
import AnalysisService from '@services/Analysis'

import GlobalLayout from '@containers/GlobalLayout'
import ThemeWrapper from '@containers/ThemeWrapper'
import MultiLanguage from '@containers/MultiLanguage'
import Sidebar from '@containers/Sidebar'
import Preview from '@containers/Preview'
import Doraemon from '@containers/Doraemon'
import Route from '@containers/Route'
import Header from '@containers/Header'
import Banner from '@containers/Banner'
import Content from '@containers/Content'
import Footer from '@containers/Footer'
import ErrorBox from '@containers/ErrorBox'

import ErrorPage from '@components/ErrorPage'
import initRootStore from '@stores/init'
// import { AnalysisService, ErrorPage } from '@components'

/* eslint-disable-next-line */
const log = buildLog('page:community')

// try to fix safari bug
// see https://github.com/yahoo/react-intl/issues/422
global.Intl = require('intl')
/*
   NOTE: in dev mode, this index page is always be required, even the server
   is not routing to this page, it's very confused, help needed

   currently it's just the community page with no data fetch, works fine though
 */
export default class PageCommunity extends React.Component {
  static async getInitialProps(props) {
    if (!isServerSide()) return {}

    const { mainPath, subPath } = parseURL(props)
    const hideSidebar =
      R.contains(mainPath, [ROUTE.USER]) ||
      R.contains(subPath, [ROUTE.POST, ROUTE.REPO, ROUTE.VIDEO, ROUTE.JOB])

    return {
      hideSidebar,
    }
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
    const { statusCode, target, hideSidebar } = this.props

    return (
      <Provider store={this.store}>
        <AnalysisService>
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
                  {!hideSidebar && <Sidebar />}
                  <Preview />
                  <Doraemon />
                  <ErrorBox />
                  <GlobalLayout noSidebar={hideSidebar}>
                    <Header />
                    <Banner />
                    <Content />
                    <Footer />
                  </GlobalLayout>
                </MultiLanguage>
              </React.Fragment>
            )}
          </ThemeWrapper>
        </AnalysisService>
      </Provider>
    )
  }
}
