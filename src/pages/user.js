/*
   this page is for /user/xxx
 */
import React from 'react'
import { Provider } from 'mobx-react'
import R from 'ramda'

import { SITE_URL } from '@/config'
import { ROUTE, USER_THREAD } from '@/constant'
import {
  getJwtToken,
  makeGQClient,
  queryStringToJSON,
  nilOrEmpty,
  parseURL,
  pagedFilter,
  ssrAmbulance,
  parseTheme,
} from '@/utils'
import initRootStore from '@/stores/init'

import GlobalLayout from '@/containers/GlobalLayout'
import UserBanner from '@/containers/banner/UserBanner'
import UserContent from '@/containers/content/UserContent'

import { P } from '@/schemas'

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
      ? initRootStore()
      : initRootStore({ ...props })

    this.store = store
  }

  render() {
    const { statusCode, target } = this.props
    const {
      viewing: { user },
    } = this.props

    const seoConfig = {
      name: `${user.nickname}`,
      url: `${SITE_URL}/user/${user.login}`,
      sameAs: [],
    }

    return (
      <Provider store={this.store}>
        <GlobalLayout
          page="user"
          seoConfig={seoConfig}
          errorCode={statusCode}
          errorPath={target}
          noSidebar
        >
          <UserBanner />
          <UserContent />
        </GlobalLayout>
      </Provider>
    )
  }
}
