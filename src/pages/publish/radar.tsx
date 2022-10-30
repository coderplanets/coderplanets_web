import { GetServerSideProps } from 'next'
import { METRIC, ARTICLE_THREAD } from '@/constant'
import {
  articlePublishSEO,
  ssrFetchPrepare,
  ssrBaseStates,
  refreshIfneed,
  ssrError,
} from '@/utils'
import { P } from '@/schemas'

import { useStore } from '@/stores/init'
import GlobalLayout from '@/containers/layout/GlobalLayout'
import ArticleEditor from '@/containers/editor/ArticleEditor'

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
    refreshIfneed(sessionState, '/publish/radar', context)
  } catch (e) {
    return ssrError(context, 'fetch', 500)
  }

  const initProps = {
    ...ssrBaseStates(resp),
    viewing: {
      viewingThread: ARTICLE_THREAD.RADAR,
    },
  }

  return { props: { errorCode: null, ...initProps } }
}

export const PublishRadarPage = (props) => {
  const store = useStore()
  store.mark(props)

  const seoConfig = articlePublishSEO()

  return (
    <GlobalLayout
      metric={METRIC.ARTICLE_EDITOR}
      seoConfig={seoConfig}
      noSidebar
    >
      <ArticleEditor />
    </GlobalLayout>
  )
}

export default PublishRadarPage
