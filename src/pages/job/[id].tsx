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
  const job = gqClient.request(P.job, { id, userHasLogin })

  const subscribedCommunities = gqClient.request(P.subscribedCommunities, {
    filter: {
      page: 1,
      size: 30,
    },
  })

  return {
    ...(await sessionState),
    ...(await job),
    ...(await subscribedCommunities),
  }
}

export const getServerSideProps = async (context) => {
  let resp
  try {
    resp = await loader(context)
    const { job, sessionState } = resp
    refreshIfneed(sessionState, `/job/${job.id}`, context)
  } catch (e) {
    log('#### error from server: ', e)
    return ssrError(context, 'fetch', 500)
  }

  const { job } = resp

  const initProps = {
    ...ssrBaseStates(resp),
    viewing: {
      job,
      activeThread: ARTICLE_THREAD.JOB,
    },
  }

  return { props: { errorCode: null, ...initProps } }
}

const JobPage = (props) => {
  const store = useStore()
  store.mark(props)

  const { viewing } = props
  const { job } = viewing

  const seoConfig = articleSEO(ARTICLE_THREAD.JOB, job)

  return (
    <GlobalLayout metric={METRIC.ARTICLE} seoConfig={seoConfig} noSidebar>
      <ArticleDigest />
      <ArticleContent />
    </GlobalLayout>
  )
}

export default JobPage
