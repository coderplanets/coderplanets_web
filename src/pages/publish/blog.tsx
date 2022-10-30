// import { GetServerSideProps } from 'next'
import { METRIC, THREAD } from '@/constant'

import {
  articlePublishSEO,
  ssrFetchPrepare,
  ssrBaseStates,
  refreshIfneed,
  ssrError,
  log,
} from '@/utils'

import { useStore } from '@/stores/init'
import GlobalLayout from '@/containers/layout/GlobalLayout'
import BlogEditor from '@/containers/editor/BlogEditor'

import { P } from '@/schemas'

const loader = async (context, opt = {}) => {
  const { gqClient } = ssrFetchPrepare(context, opt)

  const sessionState = gqClient.request(P.sessionState)

  return {
    ...(await sessionState),
  }
}

export const getServerSideProps = async (context) => {
  let resp
  try {
    resp = await loader(context)
    const { sessionState } = resp
    refreshIfneed(sessionState, '/publish/blog', context)
  } catch (e) {
    log('#### error from server: ', e)
    return ssrError(context, 'fetch', 500)
  }

  const initProps = {
    ...ssrBaseStates(resp),
  }

  return { props: { errorCode: null, ...initProps } }
}

export const CreateBlogPage = (props) => {
  const store = useStore()
  store.mark(props)
  const seoConfig = articlePublishSEO(THREAD.BLOG)

  return (
    <GlobalLayout
      metric={METRIC.ARTICLE_EDITOR}
      seoConfig={seoConfig}
      noSidebar
    >
      <BlogEditor />
    </GlobalLayout>
  )
}

export default CreateBlogPage
