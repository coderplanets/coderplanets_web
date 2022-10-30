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

/**
 * TODO: know-why
 *
 * 即使不需要这里的数据初始化 store, 这里也必须要放一个 getserverSideProps,
 * 否则 Provider 在 URL 中包含 param 的时候会报错，十分诡异 。。
 * 大概率是 mobx-react 的问题, 真尼玛坑爹。
 */
export const getServerSideProps: GetServerSideProps = async (context) => {
  let resp
  try {
    resp = await loader(context)
    const { sessionState } = resp
    refreshIfneed(sessionState, '/publish/post', context)
  } catch (e) {
    return ssrError(context, 'fetch', 500)
  }

  const initProps = {
    ...ssrBaseStates(resp),
    viewing: {
      viewingThread: ARTICLE_THREAD.POST,
    },
  }

  return { props: { errorCode: null, ...initProps } }
}

export const PublishPostPage = (props) => {
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

export default PublishPostPage
