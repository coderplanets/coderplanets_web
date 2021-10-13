import { GetServerSideProps } from 'next'
import { Provider } from 'mobx-react'
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

const fetchData = async (context, opt = {}) => {
  const { gqClient } = ssrFetchPrepare(context, opt)

  // const { thirdPath: id } = ssrParseURL(context.req)
  const sessionState = gqClient.request(P.sessionState)

  return {
    ...(await sessionState),
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let resp
  try {
    resp = await fetchData(context)
  } catch ({ response: { errors } }) {
    if (ssrRescue.hasLoginError(errors)) {
      resp = await fetchData(context, { tokenExpired: true })
    }
  }

  const initProps = {
    ...ssrBaseStates(resp),
    articleEditor: {
      thread: ARTICLE_THREAD.POST,
      mode: 'update',
      post: { id: ssrGetParam(context, 'id') },
    },
  }

  return { props: { errorCode: null, ...initProps } }
}

export const UpdatePostPage = (props) => {
  const store = useStore(props)
  const seoConfig = articleUpdateSEO()

  return (
    <Provider store={store}>
      <GlobalLayout
        metric={METRIC.ARTICLE_EDITOR}
        seoConfig={seoConfig}
        noSidebar
      >
        <ArticleEditor mode="update" />
      </GlobalLayout>
    </Provider>
  )
}

export default UpdatePostPage
