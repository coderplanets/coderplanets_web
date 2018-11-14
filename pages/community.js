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
  getMainPath,
  getSubPath,
  extractThreadFromPath,
  makeDebugger,
  BStore,
  nilOrEmpty,
  ssrPagedSchema,
  ssrContentsThread,
  addTopicIfNeed,
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
  const topic = getSubPath(props)
  const thread = extractThreadFromPath(props)
  /* const thread = getSubPath(props) */

  console.log('the page community thread ->: ', thread)
  const filter = addTopicIfNeed(
    {
      ...queryStringToJSON(asPath, { pagi: 'number' }),
      community,
    },
    thread,
    topic
  )

  // query data
  const curCommunity = gqClient.request(P.community, { raw: community })
  const pagedContents = gqClient.request(ssrPagedSchema(thread), {
    filter,
    userHasLogin,
  })

  const partialTags = gqClient.request(P.partialTags, { thread, community })
  const subscribedCommunities = gqClient.request(P.subscribedCommunities, {
    filter: {
      page: 1,
      size: 30,
    },
  })

  return {
    ...(await curCommunity),
    ...(await pagedContents),
    ...(await partialTags),
    ...(await subscribedCommunities),
  }
}

export default class PageCommunity extends React.Component {
  static async getInitialProps(props) {
    const { req, asPath } = props
    const isServer = !!req
    if (!isServer) return {}

    debug(
      'SSR (community--) queryStringToJSON l: ',
      queryStringToJSON(asPath, { pagi: 'number' })
    )
    /* console.log('SSR extractThreadFromPath -> ', extractThreadFromPath(props)) */
    const subPath = getSubPath(props)
    const thread = extractThreadFromPath(props)
    console.log('getSubPath thread: ', thread)

    let resp
    try {
      resp = await fetchData(props)
    } catch (error) {
      console.error('TODO: error handling:')
      // JSON.stringify(error, undefined, 2)
    }

    const { partialTags, community, subscribedCommunities } = resp

    // const pagedContents =

    console.log(
      'pages get subscribedCommunities: ',
      subscribedCommunities.totalCount
    )

    const contentsThread = ssrContentsThread(resp, thread)

    // console.log('contentsThread --> ', contentsThread)

    // console.log('pagedPosts -- ', pagedPosts)
    /* const { locale, messages } = req || Global.__NEXT_DATA__.props */
    /* const langSetup = {} */
    /* langSetup[locale] = messages */
    /* eslint-enable no-undef */
    /* console.log('partialTags --> ', partialTags) */

    return R.merge(
      {
        langSetup: {},
        // account: { user: { subscribedCommunities } },
        account: { userSubscribedCommunities: subscribedCommunities },
        viewing: { community, activeThread: R.toLower(thread) },
        route: { mainPath: community.raw, subPath },
        tagsBar: { tags: partialTags },
      },
      contentsThread
    )
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
