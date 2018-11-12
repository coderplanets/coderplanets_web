import React from 'react'
import { Provider } from 'mobx-react'

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
  getMainPath,
  getSubPath,
  extractThreadFromPath,
  subPath2Thread,
  TYPE,
  makeDebugger,
  BStore,
  nilOrEmpty,
} from '../utils'

import { P } from '../containers/schemas'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('page:community')
/* eslint-enable no-unused-vars */

// try to fix safari bug
// see https://github.com/yahoo/react-intl/issues/422
global.Intl = require('intl')

async function fetchData(props) {
  const token = BStore.cookie.from_req(props.req, 'jwtToken')
  const gqClient = makeGQClient(token)
  const userHasLogin = nilOrEmpty(token) === false

  const { asPath } = props
  // schema

  // utils: filter, tags staff
  const community = getMainPath(props)
  const thread = extractThreadFromPath(props)
  const filter = { ...queryStringToJSON(asPath, { pagi: 'number' }), community }

  // query data
  const curCommunity = gqClient.request(P.community, { raw: community })
  const pagedPosts = gqClient.request(P.pagedPosts, { filter, userHasLogin })
  const partialTags = gqClient.request(P.partialTags, { thread, community })
  const subscribedCommunities = gqClient.request(P.subscribedCommunities, {
    filter: {
      page: 1,
      size: 30,
    },
  })

  return {
    ...(await curCommunity),
    ...(await pagedPosts),
    ...(await partialTags),
    ...(await subscribedCommunities),
  }
}

export default class Index extends React.Component {
  static async getInitialProps(props) {
    const { req, asPath } = props
    const isServer = !!req
    if (!isServer) return {}

    debug(
      'SSR (community--) queryStringToJSON l: ',
      queryStringToJSON(asPath, { pagi: 'number' })
    )
    /* console.log('SSR extractThreadFromPath -> ', extractThreadFromPath(props)) */
    const thread = getSubPath(props)

    const {
      pagedPosts,
      partialTags,
      community,
      subscribedCommunities,
    } = await fetchData(props)

    console.log(
      'pages get subscribedCommunities: ',
      subscribedCommunities.totalCount
    )

    const curView =
      pagedPosts.entries.length === 0 ? TYPE.RESULT_EMPTY : TYPE.RESULT
    /* const { locale, messages } = req || Global.__NEXT_DATA__.props */
    /* const langSetup = {} */
    /* langSetup[locale] = messages */
    /* eslint-enable no-undef */
    /* console.log('partialTags --> ', partialTags) */

    return {
      langSetup: {},
      // account: { user: { subscribedCommunities } },
      account: { userSubscribedCommunities: subscribedCommunities },
      /* curCommunity: { community, activeThread: subPath2Thread(thread) }, */
      viewing: { community, activeThread: subPath2Thread(thread) },
      route: { mainPath: community.raw, subPath: thread },
      tagsBar: { tags: partialTags },
      postsThread: {
        pagedPosts,
        curView,
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
