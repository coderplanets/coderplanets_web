/*
   this page is for /communities
 */
import React from 'react'
import { Provider } from 'mobx-react'
import R from 'ramda'

import initRootStore from '../stores/init'
import { GAWraper } from '../components'

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

import {
  makeGQClient,
  queryStringToJSON,
  nilOrEmpty,
  getSubPath,
  BStore,
  ROUTE,
  ssrAmbulance,
} from '../utils'

import { P } from '../containers/schemas'

/* import PostsThreadSchema from '../containers/PostsThread/schema' */

// try to fix safari bug
// see https://github.com/yahoo/react-intl/issues/422
global.Intl = require('intl')

async function fetchData(props, opt) {
  const { realname } = R.merge({ realname: true }, opt)

  const token = realname ? BStore.cookie.from_req(props.req, 'jwtToken') : null
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

export default class Index extends React.Component {
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
        <GAWraper>
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
                <Footer />
              </BodyLayout>
            </MultiLanguage>
          </ThemeWrapper>
        </GAWraper>
      </Provider>
    )
  }
}
