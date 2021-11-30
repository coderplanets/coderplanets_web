import { GetServerSideProps } from 'next'
import { Provider } from 'mobx-react'

import { METRIC } from '@/constant'
import { P } from '@/schemas'

import {
  ssrBaseStates,
  ssrFetchPrepare,
  refreshIfneed,
  trendingSEO,
  ssrError,
} from '@/utils'
import GlobalLayout from '@/containers/layout/GlobalLayout'
import TrendingContent from '@/containers/content/TrendingContent'

import { useStore } from '@/stores/init'

const loader = async (context, opt = {}) => {
  const { gqClient } = ssrFetchPrepare(context, opt)
  const sessionState = gqClient.request(P.sessionState)

  return {
    ...(await sessionState),
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let resp
  try {
    resp = await loader(context)
    const { sessionState } = resp

    refreshIfneed(sessionState, '/trending', context)
  } catch (e) {
    console.log('#### error from server: ', e)
    return ssrError(context, 'fetch', 500)
  }

  const initProps = {
    ...ssrBaseStates(resp),
  }

  return { props: { errorCode: null, ...initProps } }
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
