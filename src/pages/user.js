/*
   this page is for /user/xxx
 */
import React from 'react'
import { Provider } from 'mobx-react'
import R from 'ramda'
import { SocialProfileJsonLd } from 'next-seo'

// eslint-disable-next-line import/named
import { SITE_URL } from '@config'
import { ROUTE, USER_THREAD } from '@constant'
import {
  getJwtToken,
  makeGQClient,
  queryStringToJSON,
  nilOrEmpty,
  parseURL,
  pagedFilter,
  ssrAmbulance,
  parseTheme,
} from '@utils'
import initRootStore from '@stores/init'

import AnalysisService from '@services/Analysis'
import GlobalLayout from '@containers/GlobalLayout'
import ThemeWrapper from '@containers/ThemeWrapper'
import MultiLanguage from '@containers/MultiLanguage'
import Preview from '@containers/Preview'
import Doraemon from '@containers/Doraemon'
import Route from '@containers/Route'
import Header from '@containers/Header'
import UserBanner from '@containers/UserBanner'
import UserContent from '@containers/UserContent'
import Footer from '@containers/Footer'
import ErrorBox from '@containers/ErrorBox'

import { P } from '@schemas'
import ErrorPage from '@components/ErrorPage'
// import { AnalysisService, ErrorPage } from '@components'

// try to fix safari bug
// see https://github.com/yahoo/react-intl/issues/422
global.Intl = require('intl')

async function fetchData(props, opt) {
  const { realname } = R.merge({ realname: true }, opt)

  const token = realname ? getJwtToken(props) : null
  const gqClient = makeGQClient(token)
  const userHasLogin = nilOrEmpty(token) === false
  const { subPath } = parseURL(props)
  const login = R.toLower(subPath)

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
    const { subPath } = parseURL(props)

    let resp
    try {
      resp = await fetchData(props)
    } catch ({ response: { errors } }) {
      if (ssrAmbulance.hasLoginError(errors)) {
        resp = await fetchData(props, { realname: false })
      } else {
        return { statusCode: 404, target: subPath }
      }
    }

    const { sessionState, user, subscribedCommunities } = resp

    return {
      langSetup: {},
      theme: {
        curTheme: parseTheme(sessionState),
      },
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
  }

  render() {
    const { statusCode, target } = this.props
    const {
      viewing: { user },
    } = this.props

    return (
      <Provider store={this.store}>
        <AnalysisService>
          <ThemeWrapper>
            {statusCode ? (
              <ErrorPage errorCode={statusCode} page="user" target={target} />
            ) : (
              <React.Fragment>
                <SocialProfileJsonLd
                  type="Person"
                  name={`${user.nickname}`}
                  url={`${SITE_URL}/user/${user.login}`}
                  sameAs={[]}
                />
                <Route />
                <MultiLanguage>
                  <Preview />
                  <Doraemon />
                  <ErrorBox />
                  <GlobalLayout noSidebar>
                    <Header />
                    <UserBanner />
                    <UserContent />
                    <Footer />
                  </GlobalLayout>
                </MultiLanguage>
              </React.Fragment>
            )}
          </ThemeWrapper>
        </AnalysisService>
      </Provider>
    )
  }
}
