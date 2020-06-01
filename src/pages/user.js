/*
   this page is for /user/xxx
 */
import React from 'react'
import { Provider } from 'mobx-react'
import { merge, toLower } from 'ramda'

import { SITE_URL } from '@/config'
import { ROUTE, USER_THREAD } from '@/constant'
import {
  getJwtToken,
  makeGQClient,
  queryStringToJSON,
  ssrParseURL,
  nilOrEmpty,
  pagedFilter,
  ssrAmbulance,
  parseTheme,
} from '@/utils'

import { useStore } from '@/stores/init'

import GlobalLayout from '@/containers/GlobalLayout'
import UserBanner from '@/containers/banner/UserBanner'
import UserContent from '@/containers/content/UserContent'

import { P } from '@/schemas'

async function fetchData(props, opt) {
  const { realname } = merge({ realname: true }, opt)

  const token = realname ? getJwtToken(props) : null
  const gqClient = makeGQClient(token)
  const userHasLogin = nilOrEmpty(token) === false
  const { subPath } = ssrParseURL(props.req)
  const login = toLower(subPath)

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

export async function getServerSideProps(props) {
  const query = queryStringToJSON(props.req.url)

  let resp
  try {
    resp = await fetchData(props)
  } catch ({ response: { errors } }) {
    if (ssrAmbulance.hasLoginError(errors)) {
      resp = await fetchData(props, { realname: false })
    } else {
      return { errorCode: 404 }
    }
  }

  const { sessionState, user, subscribedCommunities } = resp

  const initProps = {
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

  return {
    props: { errorCode: null, namespacesRequired: ['general'], ...initProps },
  }
}

const UserPage = props => {
  const store = useStore(props)

  const { viewing, errorCode } = props
  const { user } = viewing

  const seoConfig = {
    name: `${user.nickname}`,
    url: `${SITE_URL}/user/${user.login}`,
    sameAs: [],
  }

  return (
    <Provider store={store}>
      <GlobalLayout
        page={ROUTE.USER}
        seoConfig={seoConfig}
        errorCode={errorCode}
        noSidebar={`/user/${user.login}`}
      >
        <UserBanner />
        <UserContent />
      </GlobalLayout>
    </Provider>
  )
}

export default UserPage
