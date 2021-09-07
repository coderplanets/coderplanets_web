import React from 'react'
import { Provider } from 'mobx-react'

import { METRIC } from '@/constant'
import { P } from '@/schemas'

import { ssrBaseStates, ssrFetchPrepare, ssrRescue, trendingSEO } from '@/utils'
import GlobalLayout from '@/containers/layout/GlobalLayout'
import TrendingContent from '@/containers/content/TrendingContent'

import { useStore } from '@/stores/init'

const fetchData = async (context, opt = {}) => {
  const { gqClient } = ssrFetchPrepare(context, opt)

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

export const getServerSideProps = async (context) => {
  let resp
  try {
    resp = await fetchData(context)
  } catch ({ response: { errors } }) {
    if (ssrRescue.hasLoginError(errors)) {
      resp = await fetchData(context, { tokenExpired: true })
    }
  }

  const initProps = { ...ssrBaseStates(resp) }

  return {
    props: { errorCode: null, namespacesRequired: ['general'], ...initProps },
  }
}

const TrendingPage = (props) => {
  const store = useStore(props)

  const seoConfig = trendingSEO()

  return (
    <Provider store={store}>
      <GlobalLayout metric={METRIC.TRENDING} seoConfig={seoConfig} noSidebar>
        <TrendingContent />
      </GlobalLayout>
    </Provider>
  )
}

export default TrendingPage
