import { GetServerSideProps } from 'next'

import { METRIC } from '@/constant'
import { P } from '@/schemas'

import {
  ssrBaseStates,
  ssrFetchPrepare,
  refreshIfneed,
  trendingSEO,
  ssrError,
  log,
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
    log('#### error from server: ', e)
    return ssrError(context, 'fetch', 500)
  }

  const initProps = {
    ...ssrBaseStates(resp),
  }

  return { props: { errorCode: null, ...initProps } }
}

const TrendingPage = (props) => {
  const store = useStore()
  store.mark(props)

  const seoConfig = trendingSEO()

  return (
    <GlobalLayout metric={METRIC.TRENDING} seoConfig={seoConfig} noSidebar>
      <TrendingContent />
    </GlobalLayout>
  )
}

export default TrendingPage
