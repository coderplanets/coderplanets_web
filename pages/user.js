/*
   this page is for /user/xxx
 */
import React from 'react'
import { Provider } from 'mobx-react'
import R from 'ramda'

import ThemeWrapper from 'containers/ThemeWrapper'
import MultiLanguage from 'containers/MultiLanguage'
import Preview from 'containers/Preview'
import Doraemon from 'containers/Doraemon'
import Route from 'containers/Route'
import BodyLayout from 'containers/BodyLayout'
import Header from 'containers/Header'
import UserBanner from 'containers/UserBanner'
import UserContent from 'containers/UserContent'
import Footer from 'containers/Footer'
import ErrorBox from 'containers/ErrorBox'

import { P } from 'containers/schemas'
import GAWraper from 'components/GAWraper'
import ErrorPage from 'components/ErrorPage'
// import { GAWraper, ErrorPage } from 'components'

import {
  BStore,
  makeGQClient,
  queryStringToJSON,
  nilOrEmpty,
  getSubPath,
  USER_THREAD,
  /* BStore, */
  ROUTE,
  pagedFilter,
  ssrAmbulance,
} from '../utils'

import initRootStore from '../stores/init'

// try to fix safari bug
// see https://github.com/yahoo/react-intl/issues/422
global.Intl = require('intl')

async function fetchData(props, opt) {
  const { realname } = R.merge({ realname: true }, opt)

  const token = realname ? BStore.cookie.from_req(props.req, 'jwtToken') : null
  const gqClient = makeGQClient(token)
  const userHasLogin = nilOrEmpty(token) === false
  const login = R.toLower(getSubPath(props))

  const sessionState = gqClient.request(P.sessionState)
  const user = gqClient.request(P.user, { login, userHasLogin })

  const filter = pagedFilter(1)
  const subscribedCommunities = gqClient.request(P.subscribedCommunities, {
    filter,
  })

  return {
    ...(await sessionState),
    ...(await user),
    ...(await subscribedCommunities),
  }
}

export default class UserPage extends React.Component {
  static async getInitialProps(props) {
    const { asPath } = props

    const query = queryStringToJSON(asPath)

    let resp
    try {
      resp = await fetchData(props)
    } catch ({ response: { errors } }) {
      if (ssrAmbulance.hasLoginError(errors)) {
        resp = await fetchData(props, { realname: false })
      } else {
        return { statusCode: 404, target: getSubPath(props) }
      }
    }

    const { sessionState, user, subscribedCommunities } = resp

    return {
      langSetup: {},
      account: {
        user: sessionState.user || {},
        isValidSession: sessionState.isValid,
        userSubscribedCommunities: subscribedCommunities,
      },
      route: { mainPath: ROUTE.USER, subPath: user.id, query },
      userContent: { activeThread: query.tab || USER_THREAD.PUBLISH },
      viewing: { user },
    }
  }

  constructor(props) {
    super(props)

    const store = props.statusCode
      ? initRootStore({ langSetup: {} })
      : initRootStore({ ...props })

    this.store = store
    // this.store = initRootStore({ ...props })
  }

  render() {
    const { statusCode, target } = this.props

    return (
      <Provider store={this.store}>
        <GAWraper>
          <ThemeWrapper>
            {statusCode ? (
              <ErrorPage errorCode={statusCode} page="user" target={target} />
            ) : (
              <React.Fragment>
                <Route />
                <MultiLanguage>
                  <Preview />
                  <Doraemon />
                  <ErrorBox />
                  <BodyLayout noSidebar>
                    <Header />
                    <UserBanner />
                    <UserContent />
                    <Footer />
                  </BodyLayout>
                </MultiLanguage>
              </React.Fragment>
            )}
          </ThemeWrapper>
        </GAWraper>
      </Provider>
    )
  }
}
