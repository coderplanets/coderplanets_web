import React from 'react'
import { Provider } from 'mobx-react'

import GAWraper from '../components/GAWraper'
import initRootStore from '../stores/init'
import ThemeWrapper from '../containers/ThemeWrapper'
import MultiLanguage from '../containers/MultiLanguage'
import Sidebar from '../containers/Sidebar'
import Preview from '../containers/Preview'
import Doraemon from '../containers/Doraemon'
import Route from '../containers/Route'
import BodyLayout from '../containers/BodyLayout'
import Header from '../containers/Header'
import Banner from '../containers/Banner'
import Content from '../containers/Content'

import Footer from '../containers/Footer'

import { P } from '../containers/schemas'

import {
  makeGQClient,
  /*
     queryStringToJSON,
     getMainPath,
     getSubPath,
     extractThreadFromPath,
     subPath2Thread,
     TYPE,
     makeDebugger,
   */
  BStore,
  // nilOrEmpty,
} from '../utils'

// try to fix safari bug
// see https://github.com/yahoo/react-intl/issues/422
global.Intl = require('intl')

async function fetchData(props) {
  const token = BStore.cookie.from_req(props.req, 'jwtToken')
  const gqClient = makeGQClient(token)
  // const userHasLogin = nilOrEmpty(token) === false

  /*
     const { asPath } = props

     const community = getMainPath(props)
     const thread = extractThreadFromPath(props)
     const filter = { ...queryStringToJSON(asPath, { pagi: 'number' }), community }
   */

  // query data
  // const curCommunity = gqClient.request(P.community, { raw: community })
  // const pagedPosts = gqClient.request(P.pagedPosts, { filter, userHasLogin })
  // const partialTags = gqClient.request(P.partialTags, { thread, community })
  const sessionState = gqClient.request(P.sessionState)
  const subscribedCommunities = gqClient.request(P.subscribedCommunities, {
    filter: {
      page: 1,
      size: 30,
    },
  })

  return {
    ...(await sessionState),
    ...(await subscribedCommunities),
  }
}

export default class Index extends React.Component {
  static async getInitialProps(props) {
    // console.log('SSR (index) queryStringToJSON: ')
    const { subscribedCommunities, sessionState } = await fetchData(props)

    return {
      account: {
        user: sessionState.user || {},
        isValidSession: sessionState.isValid,
        userSubscribedCommunities: subscribedCommunities,
      },
    }
    /*
       return {
       account: { userSubscribedCommunities: subscribedCommunities },
       }
     */
  }

  constructor(props) {
    super(props)
    this.store = initRootStore({ ...props })
  }

  //  <Doraemon />

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
