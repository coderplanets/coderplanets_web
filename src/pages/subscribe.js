import React from 'react'
import { Provider } from 'mobx-react'
import { merge } from 'ramda'

import { SITE_URL } from '@/config'
import { ROUTE, METRIC } from '@/constant'

import { getJwtToken, makeGQClient, ssrRescue, parseTheme } from '@/utils'
import { P } from '@/schemas'
import GlobalLayout from '@/containers/layout/GlobalLayout'
import SubscribeContent from '@/containers/content/SubscribeContent'

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
    if (ssrRescue.hasLoginError(errors)) {
      resp = await fetchData(props, { tokenExpired: true })
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

const SubscribePage = (props) => {
  const store = useStore(props)

  const seoConfig = {
    url: `${SITE_URL}/${ROUTE.SUBSCRIBE}`,
    title: '社区订阅 | coderplanets',
    description: '社区订阅',
  }

  return (
    <Provider store={store}>
      <GlobalLayout metric={METRIC.SUBSCRIBE} seoConfig={seoConfig} noSidebar>
        <SubscribeContent />
      </GlobalLayout>
    </Provider>
  )
}

export default SubscribePage
