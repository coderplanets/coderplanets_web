import { GetServerSideProps } from 'next'
import { Provider } from 'mobx-react'
import { METRIC } from '@/constant'
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
  const { gqClient, userHasLogin } = ssrFetchPrepare(context, opt)

  const id = ssrGetParam(context, 'id')
  // const { thirdPath: id } = ssrParseURL(context.req)
  const sessionState = gqClient.request(P.sessionState)
  const post = gqClient.request(P.post, { id, userHasLogin })

  return {
    ...(await sessionState),
    ...(await post),
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

  const { post } = resp
  console.log('got post: ', post)

  const initProps = {
    ...ssrBaseStates(resp),
    viewing: {
      post,
      // activeThread: THREAD.POST,
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
