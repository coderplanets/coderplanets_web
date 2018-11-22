/*
   this page is for /communities
 */
import React from 'react'
import { Provider } from 'mobx-react'

import initRootStore from '../../stores/init'
import { GAWraper } from '../../components'

import {
  makeGQClient,
  queryStringToJSON,
  nilOrEmpty,
  getSubPath,
  BStore,
  ROUTE,
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

import { P } from '../../containers/schemas'

/* import PostsThreadSchema from '../containers/PostsThread/schema' */

// try to fix safari bug
// see https://github.com/yahoo/react-intl/issues/422
global.Intl = require('intl')

async function fetchData(props) {
  const token = BStore.cookie.from_req(props.req, 'jwtToken')
  const gqClient = makeGQClient(token)
  const userHasLogin = nilOrEmpty(token) === false
  const subPath = getSubPath(props)
  const category = subPath !== '' ? subPath : 'pl'
  console.log('category meet: ', category)

  const { asPath } = props

  const filter = { ...queryStringToJSON(asPath, { pagi: 'number' }) }

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
    ...(await pagedCategories),
    ...(await pagedCommunities),
    ...(await subscribedCommunities),
  }
}

export default class Index extends React.Component {
  static async getInitialProps(props) {
    const { req, asPath } = props
    const isServer = !!req
    if (!isServer) return {}

    console.log(
      'SSR (communities) queryStringToJSON: ',
      queryStringToJSON(asPath)
    )
    /* console.log('SSR extractThreadFromPath -> ', extractThreadFromPath(props)) */
    const {
      category,
      pagedCategories,
      pagedCommunities,
      subscribedCommunities,
    } = await fetchData(props)
    // console.log('communities ->> ', pagedCommunities)

    /* const { locale, messages } = req || Global.__NEXT_DATA__.props */
    /* const langSetup = {} */
    /* langSetup[locale] = messages */
    /* eslint-enable no-undef */
    /* console.log('partialTags --> ', partialTags) */

    return {
      langSetup: {},
      route: {
        mainPath: ROUTE.COMMUNITIES,
        subPath: category,
      },
      account: { userSubscribedCommunities: subscribedCommunities },
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
