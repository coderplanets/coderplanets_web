/*
   this page is for /user/xxx
 */
import React from 'react'
import { Provider } from 'mobx-react'

import initRootStore from '../stores/init'
import { GAWraper } from '../components'

import AccountSchema from '../containers/AccountViewer/schema'
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
  /* nilOrEmpty, */
  getSubPath,
  USER_THREAD,
  /* BStore, */
  ROUTE,
  makeDebugger,
} from '../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('page:user')
/* eslint-enable no-unused-vars */

// try to fix safari bug
// see https://github.com/yahoo/react-intl/issues/422
global.Intl = require('intl')

async function fetchData(props) {
  const token = null // BStore.cookie.from_req(req, 'jwtToken')
  const gqClient = makeGQClient(token)

  const userId = getSubPath(props)
  const user = gqClient
    .request(AccountSchema.userRaw, {
      id: userId,
      /* userHasLogin: nilOrEmpty(token) === false, */
    })
    .catch(e => {
      debug('error? ', e)
    })

  return {
    ...(await user),
  }
}

export default class UserPage extends React.Component {
  static async getInitialProps(props) {
    const { req, asPath } = props
    const isServer = !!req
    if (!isServer) return {}

    debug('SSR (user) queryStringToJSON: ', queryStringToJSON(asPath))
    const query = queryStringToJSON(asPath)

    const { user } = await fetchData(props)
    debug('fetchData user: ', user)

    return {
      langSetup: {},
      route: { mainPath: ROUTE.USER, subPath: user.id, query },
      userContent: { activeThread: query.tab || USER_THREAD.POSTS },
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
