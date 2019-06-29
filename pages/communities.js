/*
   this page is for /communities
 */
import React from 'react'
import { Provider } from 'mobx-react'
import R from 'ramda'

import GlobalLayout from '@containers/GlobalLayout'
import ThemeWrapper from '@containers/ThemeWrapper'
import MultiLanguage from '@containers/MultiLanguage'
import Sidebar from '@containers/Sidebar'
import Preview from '@containers/Preview'
import Doraemon from '@containers/Doraemon'
import Route from '@containers/Route'
import Header from '@containers/Header'
import CommunitiesBanner from '@containers/CommunitiesBanner'
import CommunitiesContent from '@containers/CommunitiesContent'
import Footer from '@containers/Footer'

import { P } from '@schemas'
import AnalysisService from '@components/AnalysisService'
import {
  getJwtToken,
  makeGQClient,
  queryStringToJSON,
  nilOrEmpty,
  getSubPath,
  ROUTE,
  ssrAmbulance,
  parseTheme,
} from '@utils'

import initRootStore from '@stores/init'

/* import PostsThreadSchema from '@containers/PostsThread/schema' */

// try to fix safari bug
// see https://github.com/yahoo/react-intl/issues/422
global.Intl = require('intl')

async function fetchData(props, opt) {
  const { realname } = R.merge({ realname: true }, opt)

  const token = realname ? getJwtToken(props) : null
  const gqClient = makeGQClient(token)
  const userHasLogin = nilOrEmpty(token) === false
  const subPath = getSubPath(props)
  const category = subPath !== '' ? subPath : 'pl'

  const { asPath } = props

  const filter = { ...queryStringToJSON(asPath, { pagi: 'number' }) }

  const sessionState = gqClient.request(P.sessionState)
  const pagedCommunities = gqClient.request(P.pagedCommunities, {
    filter: { ...filter, category },
    userHasLogin,
  })
  const pagedCategories = gqClient.request(P.pagedCategories, { filter })

  const subscribedCommunities = gqClient.request(P.subscribedCommunities, {
    filter: {
      page: 1,
      size: 30,
    },
  })

  return {
    category,
    ...(await sessionState),
    ...(await pagedCategories),
    ...(await pagedCommunities),
    ...(await subscribedCommunities),
  }
}

export default class CommunitiesPage extends React.Component {
  static async getInitialProps(props) {
    let resp
    try {
      resp = await fetchData(props)
    } catch ({ response: { errors } }) {
      if (ssrAmbulance.hasLoginError(errors)) {
        resp = await fetchData(props, { realname: false })
      }
    }

    const {
      category,
      sessionState,
      pagedCategories,
      pagedCommunities,
      subscribedCommunities,
    } = resp

    return {
      langSetup: {},
      theme: {
        curTheme: parseTheme(sessionState),
      },
      route: {
        mainPath: ROUTE.COMMUNITIES,
        subPath: category,
      },
      account: {
        user: sessionState.user || {},
        isValidSession: sessionState.isValid,
        userSubscribedCommunities: subscribedCommunities,
      },
      communitiesBanner: {
        pagedCategories,
        activeTab: category,
      },
      communitiesContent: {
        pagedCommunities,
      },
    }
  }

  constructor(props) {
    super(props)
    this.store = initRootStore({ ...props })
  }

  render() {
    return (
      <Provider store={this.store}>
        <AnalysisService>
          <ThemeWrapper>
            <Route />
            <MultiLanguage>
              <Sidebar />
              <Preview />
              <Doraemon />
              <GlobalLayout>
                <Header />
                <CommunitiesBanner />
                <CommunitiesContent />
                <Footer />
              </GlobalLayout>
            </MultiLanguage>
          </ThemeWrapper>
        </AnalysisService>
      </Provider>
    )
  }
}
