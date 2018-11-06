import React from 'react'
import { Provider } from 'mobx-react'

import initRootStore from '../../stores/init'
import { GAWraper } from '../../components'

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
} from '../../containers'

import { P } from '../../containers/schemas'

import {
  makeGQClient,
  queryStringToJSON,
  getMainPath,
  getSubPath,
  extractThreadFromPath,
  subPath2Thread,
  TYPE,
  makeDebugger,
} from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('page:index')
/* eslint-enable no-unused-vars */

// try to fix safari bug
// see https://github.com/yahoo/react-intl/issues/422
global.Intl = require('intl')

async function fetchData(props) {
  const { request } = makeGQClient()
  const { asPath } = props

  const community = getMainPath(props)
  const thread = extractThreadFromPath(props)
  const filter = { ...queryStringToJSON(asPath), community }

  // data
  const curCommunity = request(P.community, { raw: community })
  const pagedPosts = request(P.pagedPosts, { filter })
  const partialTags = request(P.partialTags, { thread, community })

  return {
    ...(await curCommunity),
    ...(await pagedPosts),
    ...(await partialTags),
  }
}

export default class Posts extends React.Component {
  static async getInitialProps(props) {
    const { req, asPath } = props
    const isServer = !!req
    if (!isServer) return {}

    debug('SSR ## community (in javascript)index ##: ', asPath)
    debug('SSR queryStringToJSON: ', queryStringToJSON(asPath))

    const thread = getSubPath(props)
    const curView =
      pagedPosts.entries.length === 0 ? TYPE.RESULT_EMPTY : TYPE.RESULT

    const { community, pagedPosts, partialTags } = await fetchData(props)

    /* const { locale, messages } = req || Global.__NEXT_DATA__.props */
    /* const langSetup = {} */
    /* langSetup[locale] = messages */
    /* eslint-enable no-undef */

    return {
      langSetup: {},
      /* curCommunity: { community, activeThread: subPath2Thread(thread) }, */
      viewing: { community, activeThread: subPath2Thread(thread) },
      route: { mainPath: community.raw, subPath: thread },
      postsThread: {
        pagedPosts,
        curView,
        tags: partialTags,
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
