import { ARTICLE_THREAD, METRIC } from '@/constant'
import {
  ssrBaseStates,
  ssrFetchPrepare,
  ssrError,
  articleSEO,
  ssrGetParam,
  refreshIfneed,
  log,
} from '@/utils'
import { useStore } from '@/stores/init'

import GlobalLayout from '@/containers/layout/GlobalLayout'
import ArticleDigest from '@/containers/digest/ArticleDigest'
import ArticleContent from '@/containers/content/ArticleContent'

import { P } from '@/schemas'

const loader = async (context, opt = {}) => {
  const id = ssrGetParam(context, 'id')
  const { gqClient, userHasLogin } = ssrFetchPrepare(context, opt)

  // query data
  const sessionState = gqClient.request(P.sessionState)
  const radar = gqClient.request(P.radar, { id, userHasLogin })

  const subscribedCommunities = gqClient.request(P.subscribedCommunities, {
    filter: {
      page: 1,
      size: 30,
    },
  })

  return {
    ...(await sessionState),
    ...(await radar),
    ...(await subscribedCommunities),
  }
}

export const getServerSideProps = async (context) => {
  let resp
  try {
    resp = await loader(context)
    const { radar, sessionState } = resp
    refreshIfneed(sessionState, `/radar/${radar.id}`, context)
  } catch (e) {
    log('#### error from server: ', e)
    return ssrError(context, 'fetch', 500)
  }

  const { radar } = resp

  const initProps = {
    ...ssrBaseStates(resp),
    viewing: {
      radar,
      activeThread: ARTICLE_THREAD.RADAR,
    },
  }

  return { props: { errorCode: null, ...initProps } }
}

const RadarPage = (props) => {
  const store = useStore()
  store.mark(props)

  const { viewing } = props
  const { radar } = viewing

  const seoConfig = articleSEO(ARTICLE_THREAD.RADAR, radar)

  return (
    <GlobalLayout metric={METRIC.ARTICLE} seoConfig={seoConfig} noSidebar>
      <ArticleDigest />
      <ArticleContent />
    </GlobalLayout>
  )
}

export default RadarPage
