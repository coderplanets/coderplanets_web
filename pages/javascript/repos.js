import React from 'react'
import { Provider } from 'mobx-react'

import initRootStore from '../../stores/init'
import { GAWraper } from '../../components'

import {
  makeGQClient,
  getMainPath,
  getSubPath,
  queryStringToJSON,
  extractThreadFromPath,
  TYPE,
  subPath2Thread,
} from '../../utils'

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

import CommunityBannerSchema from '../../containers/CommunityBanner/schema'
import ReposThreadSchema from '../../containers/ReposThread/schema'

// try to fix safari bug
// see https://github.com/yahoo/react-intl/issues/422
global.Intl = require('intl')

async function fetchData(props) {
  const { request } = makeGQClient()
  const { asPath } = props
  // schema
  const { communityRaw } = CommunityBannerSchema
  const { pagedReposRaw, partialTagsRaw } = ReposThreadSchema

  // utils
  const community = getMainPath(props)
  const thread = extractThreadFromPath(props)
  const filter = { ...queryStringToJSON(asPath), community }

  // data
  const curCommunity = request(communityRaw, { raw: community })
  const pagedRepos = request(pagedReposRaw, { filter })
  const partialTags = request(partialTagsRaw, { thread, community })

  return {
    ...(await pagedRepos),
    ...(await partialTags),
    ...(await curCommunity),
  }
}

export default class Repos extends React.Component {
  static async getInitialProps(props) {
    const { req, asPath } = props
    const isServer = !!req
    if (!isServer) return {}

    console.log('SSR ## community (in javascript) repo ##: ', asPath)
    console.log('SSR queryStringToJSON: ', queryStringToJSON(asPath))
    const thread = getSubPath(props)

    const { pagedRepos, partialTags, community } = await fetchData(props)

    const curView =
      pagedRepos.entries.length === 0 ? TYPE.RESULT_EMPTY : TYPE.RESULT
    /* const { locale, messages } = req || Global.__NEXT_DATA__.props */
    /* const langSetup = {} */
    /* langSetup[locale] = messages */
    /* eslint-enable no-undef */

    return {
      langSetup: {},
      /* curCommunity: { community, activeThread: subPath2Thread(thread) }, */
      viewing: { community, activeThread: subPath2Thread(thread) },
      route: { mainPath: community.raw, subPath: thread },
      reposThread: {
        pagedRepos,
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
