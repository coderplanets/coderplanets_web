import { GetServerSideProps } from 'next'
import { METRIC, ARTICLE_THREAD } from '@/constant'
import {
  articleUpdateSEO,
  ssrBaseStates,
  ssrRescue,
  ssrFetchPrepare,
  ssrGetParam,
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
  } catch ({ response: { errors } }) {
    if (ssrRescue.hasLoginError(errors)) {
      resp = await loader(context, { tokenExpired: true })
    }
  }

  const id = ssrGetParam(context, 'id')

  const initProps = {
    ...ssrBaseStates(resp),
    articleEditor: {
      mode: 'update',
    },
    viewing: {
      radar: { id },
      viewingThread: ARTICLE_THREAD.RADAR,
    },
  }

  return { props: { errorCode: null, ...initProps } }
}

export const UpdateRadarPage = (props) => {
  const store = useStore()
  store.mark(props)

  const seoConfig = articleUpdateSEO()

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

export default UpdateRadarPage
