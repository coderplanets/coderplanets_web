/*
   this page is for /user/xxx
 */
import React from 'react'
import { Provider } from 'mobx-react'

import initRootStore from '../stores/init'
import { GAWraper } from '../components'

import {
  makeGQClient,
  queryStringToJSON,
  /* nilOrEmpty, */
  getSubPath,
  /* BStore, */
  ROUTE,
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

import AccountSchema from '../containers/AccountViewer/schema'

import Footer from '../components/Footer'
// try to fix safari bug
// see https://github.com/yahoo/react-intl/issues/422
global.Intl = require('intl')

async function fetchData(props) {
  /* const community = getMainPath(props) */
  /* const thread = extractThreadFromPath(props) */
  /* const category = getSubPath(props) */

  const { asPath } = props
  const filter = { ...queryStringToJSON(asPath) }
  const token = null // BStore.cookie.from_req(req, 'jwtToken')
  const gqClient = makeGQClient(token)

  console.log('filter: ', filter)
  const userId = getSubPath(props)
  console.log('getSubPath --> userId: ', userId)

  const user = gqClient
    .request(AccountSchema.userRaw, {
      id: userId,
      /* userHasLogin: nilOrEmpty(token) === false, */
    })
    .catch(e => {
      console.log('error? ', e)
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

    console.log('SSR (user) queryStringToJSON: ', queryStringToJSON(asPath))
    /* console.log('props --> ', props.req.headers.cookie) */
    /* console.log( */
    /* 'read_from(BStore cookie)--> ', */
    /* read_from(props.req.headers.cookie, '_ga') */
    /* BStore.cookie.from_req(props.req, 'jwtToken') */
    /* ) */

    /* console.log('SSR extractThreadFromPath -> ', extractThreadFromPath(props)) */

    const { user } = await fetchData(props)
    console.log('fetchData user: ', user)

    return {
      langSetup: {},
      route: { mainPath: ROUTE.USER, subPath: user.id },
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
