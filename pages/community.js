import React from 'react'
import { Provider } from 'mobx-react'

import initRootStore from '../stores'
import { GAWraper } from '../components'

import {
  gqRequest,
  queryStringToJSON,
  parseMainPath,
  extractThreadFromPath,
  TYPE,
} from '../utils'

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
} from '../containers'

import BannerSchema from '../containers/Banner/schema'
import PostsThreadSchema from '../containers/PostsThread/schema'

import Footer from '../components/Footer'
// try to fix safari bug
// see https://github.com/yahoo/react-intl/issues/422
global.Intl = require('intl')

async function fetchData(props) {
  const community = parseMainPath(props)
  const thread = extractThreadFromPath(props)
  const filter = { ...queryStringToJSON(props.asPath), community }

  const pagedPosts = gqRequest(PostsThreadSchema.pagedPostsRaw, { filter })
  const partialTags = gqRequest(PostsThreadSchema.partialTagsRaw, {
    thread,
    community,
  })

  const curCommunity = gqRequest(BannerSchema.communityRaw, { raw: community })

  return {
    ...(await pagedPosts),
    ...(await partialTags),
    ...(await curCommunity),
  }
}

export default class Index extends React.Component {
  static async getInitialProps(props) {
    const { req, asPath } = props
    const isServer = !!req
    if (!isServer) return {}

    console.log('SSR (index) queryStringToJSON: ', queryStringToJSON(asPath))
    console.log('SSR extractThreadFromPath -> ', extractThreadFromPath(props))

    const { pagedPosts, partialTags, community } = await fetchData(props)
    const curView =
      pagedPosts.entries.length === 0 ? TYPE.RESULT_EMPTY : TYPE.RESULT
    /* const { locale, messages } = req || Global.__NEXT_DATA__.props */
    /* const langSetup = {} */
    /* langSetup[locale] = messages */
    /* eslint-enable no-undef */
    /* console.log('curView --> ', curView) */

    return {
      langSetup: {},
      curCommunity: { community },
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
