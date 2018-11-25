import React from 'react'
import R from 'ramda'
import { Provider } from 'mobx-react'

import initRootStore from '../stores/init'
import { GAWraper } from '../components'

import { PAGE_SIZE } from '../config'

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

import { P } from '../containers/schemas'

import {
  nilOrEmpty,
  makeGQClient,
  queryStringToJSON,
  getSubPath,
  TYPE,
  ROUTE,
  THREAD,
  BStore,
} from '../utils'

// try to fix safari bug
// see https://github.com/yahoo/react-intl/issues/422
global.Intl = require('intl')

async function fetchData(props) {
  const token = BStore.cookie.from_req(props.req, 'jwtToken')
  const gqClient = makeGQClient(token)
  const userHasLogin = nilOrEmpty(token) === false

  // schema
  const postId = getSubPath(props)

  // query data
  const sessionState = gqClient.request(P.sessionState)
  const post = gqClient.request(P.post, { id: postId })
  const pagedComments = gqClient.request(P.pagedComments, {
    id: postId,
    userHasLogin,
    thread: R.toUpper(THREAD.POST),
    filter: { page: 1, size: PAGE_SIZE.D, sort: TYPE.ASC_INSERTED },
  })
  const subscribedCommunities = gqClient.request(P.subscribedCommunities, {
    filter: {
      page: 1,
      size: 30,
    },
  })

  // TODO: comments
  return {
    ...(await sessionState),
    ...(await post),
    ...(await pagedComments),
    ...(await subscribedCommunities),
  }
}

export default class Index extends React.Component {
  static async getInitialProps(props) {
    const { req, asPath } = props
    const isServer = !!req
    if (!isServer) return {}

    console.log('SSR (post--) queryStringToJSON: ', queryStringToJSON(asPath))
    /* console.log('SSR extractThreadFromPath -> ', extractThreadFromPath(props)) */
    const {
      sessionState,
      post,
      pagedComments,
      subscribedCommunities,
    } = await fetchData(props)

    /* const postId = getSubPath(props) */
    /* console.log('getSubPath --> thread: ', thread) */

    return {
      langSetup: {},
      account: {
        user: sessionState.user || {},
        isValidSession: sessionState.isValid,
        userSubscribedCommunities: subscribedCommunities,
      },
      route: { mainPath: ROUTE.POST, subPath: post.id },
      viewing: { post, activeThread: THREAD.POST },
      comments: { pagedComments },
      /* curPost: { post }, */
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
