/*
   this page is for /communities
 */
import React from 'react'
import { Provider } from 'mobx-react'

import initRootStore from '../stores/init'
import { GAWraper } from '../components'

import {
  makeGQClient,
  queryStringToJSON,
  nilOrEmpty,
  getSubPath,
  BStore,
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
  Footer,
} from '../containers'

import CommunitiesSchema from '../containers/CommunitiesContent/schema'
/* import PostsThreadSchema from '../containers/PostsThread/schema' */

// try to fix safari bug
// see https://github.com/yahoo/react-intl/issues/422
global.Intl = require('intl')

async function fetchData({ asPath, req }) {
  /* const community = getMainPath(props) */
  /* const thread = extractThreadFromPath(props) */
  /* const category = getSubPath(props) */
  const filter = { ...queryStringToJSON(asPath) }
  const token = BStore.cookie.from_req(req, 'jwtToken')
  const gqClient = makeGQClient(token)

  const pagedCommunities = gqClient.request(
    CommunitiesSchema.pagedCommunitiesRaw,
    {
      filter,
      userHasLogin: nilOrEmpty(token) === false,
    }
  )

  return {
    ...(await pagedCommunities),
  }
}

export default class Index extends React.Component {
  static async getInitialProps(props) {
    const { req, asPath } = props
    const isServer = !!req
    if (!isServer) return {}

    console.log(
      'SSR (community) queryStringToJSON: ',
      queryStringToJSON(asPath)
    )
    /* console.log('props --> ', props.req.headers.cookie) */
    /* console.log( */
    /* 'read_from(BStore cookie)--> ', */
    /* read_from(props.req.headers.cookie, '_ga') */
    /* BStore.cookie.from_req(props.req, 'jwtToken') */
    /* ) */

    /* console.log('SSR extractThreadFromPath -> ', extractThreadFromPath(props)) */
    const category = getSubPath(props)
    console.log('getSubPath --> category: ', category)

    const { pagedCommunities } = await fetchData(props)
    /* console.log('communities ->> ', pagedCommunities) */
    /* const { locale, messages } = req || Global.__NEXT_DATA__.props */
    /* const langSetup = {} */
    /* langSetup[locale] = messages */
    /* eslint-enable no-undef */
    /* console.log('partialTags --> ', partialTags) */

    return {
      langSetup: {},
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
