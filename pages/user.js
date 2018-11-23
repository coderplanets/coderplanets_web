/*
   this page is for /user/xxx
 */
import React from 'react'
import { Provider } from 'mobx-react'

import initRootStore from '../stores/init'
import { GAWraper } from '../components'

// import UserBannerSchema from '../containers/UserBanner/schema'
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
  BStore,
  makeGQClient,
  queryStringToJSON,
  nilOrEmpty,
  getSubPath,
  USER_THREAD,
  /* BStore, */
  ROUTE,
  pagedFilter,
} from '../utils'

import { P } from '../containers/schemas'

// try to fix safari bug
// see https://github.com/yahoo/react-intl/issues/422
global.Intl = require('intl')

async function fetchData(props) {
  const token = BStore.cookie.from_req(props.req, 'jwtToken')
  const gqClient = makeGQClient(token)
  const userHasLogin = nilOrEmpty(token) === false

  /* console.log('user page props: ', props) */
  const userId = getSubPath(props)

  const sessionState = gqClient.request(P.sessionState)
  const user = gqClient
    .request(P.user, { id: userId, userHasLogin })
    .catch(e => console.log('SSR: user page error', e))

  const filter = pagedFilter(1)
  const subscribedCommunities = gqClient.request(P.subscribedCommunities, {
    filter,
  })

  return {
    ...(await sessionState),
    ...(await user),
    ...(await subscribedCommunities),
  }
}

export default class UserPage extends React.Component {
  static async getInitialProps(props) {
    const { req, asPath } = props
    const isServer = !!req
    if (!isServer) return {}

    console.log('SSR (user) queryStringToJSON: ', queryStringToJSON(asPath))

    const query = queryStringToJSON(asPath)

    const { sessionState, user, subscribedCommunities } = await fetchData(props)
    // console.log('fetchData user-->: ', user)

    return {
      langSetup: {},
      account: {
        user: sessionState.user,
        isValidSession: sessionState.isValid,
        userSubscribedCommunities: subscribedCommunities,
      },
      route: { mainPath: ROUTE.USER, subPath: user.id, query },
      userContent: { activeThread: query.tab || USER_THREAD.PUBLISH },
      viewing: { user },
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
