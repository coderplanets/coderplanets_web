import React from 'react'
import { Provider } from 'mobx-react'
import { merge } from 'ramda'

import { SITE_URL } from '@/config'
import { ROUTE } from '@/constant'
import { P } from '@/schemas'

import { getJwtToken, makeGQClient, ssrAmbulance, parseTheme } from '@/utils'
import GlobalLayout from '@/containers/GlobalLayout'
import TrendingContent from '@/containers/content/TrendingContent'

import { useStore } from '@/stores/init'

const fetchData = async (props, opt) => {
  const { realname } = merge({ realname: true }, opt)

  const token = realname ? getJwtToken(props) : null
  const gqClient = makeGQClient(token)

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

export const getServerSideProps = async (props) => {
  let resp
  try {
    resp = await fetchData(props)
  } catch ({ response: { errors } }) {
    if (ssrAmbulance.hasLoginError(errors)) {
      resp = await fetchData(props, { realname: false })
    }
  }

  const { sessionState, subscribedCommunities } = resp
  const initProps = {
    theme: {
      curTheme: parseTheme(sessionState),
    },
    account: {
      user: sessionState.user || {},
      isValidSession: sessionState.isValid,
      userSubscribedCommunities: subscribedCommunities,
    },
  }

  return {
    props: { errorCode: null, namespacesRequired: ['general'], ...initProps },
  }
}

const TrendingPage = (props) => {
  const store = useStore(props)

  const seoConfig = {
    url: `${SITE_URL}/${ROUTE.TRENDING}`,
    title: '热点 | coderplanets',
    description: '站内外热门讨论',
  }

  return (
    <Provider store={store}>
      <GlobalLayout page={ROUTE.TRENDING} seoConfig={seoConfig} noSidebar>
        <TrendingContent />
      </GlobalLayout>
    </Provider>
  )
}

export default TrendingPage
