import { Provider } from 'mobx-react'

import { ARTICLE_THREAD, METRIC } from '@/constant'
import {
  ssrBaseStates,
  ssrFetchPrepare,
  ssrError,
  articleSEO,
  ssrGetParam,
  refreshIfneed,
} from '@/utils'
import { useStore } from '@/stores/init'

import GlobalLayout from '@/containers/layout/GlobalLayout'
import ArticleDigest from '@/containers/digest/ArticleDigest'
import ArticleContent from '@/containers/content/ArticleContent'

import { P } from '@/schemas'

const fetchData = async (context, opt = {}) => {
  const id = ssrGetParam(context, 'id')
  const { gqClient, userHasLogin } = ssrFetchPrepare(context, opt)

  // query data
  const sessionState = gqClient.request(P.sessionState)
  const post = gqClient.request(P.post, { id, userHasLogin })

  const subscribedCommunities = gqClient.request(P.subscribedCommunities, {
    filter: {
      page: 1,
      size: 30,
    },
  })

  return {
    ...(await sessionState),
    ...(await post),
    ...(await subscribedCommunities),
  }
}

export const getServerSideProps = async (context) => {
  let resp
  try {
    resp = await fetchData(context)
    const { post, sessionState } = resp
    refreshIfneed(sessionState, `/post/${post.id}`, context)
  } catch (e) {
    console.log('#### error from server: ', e)
    return ssrError(context, 'fetch', 500)
  }

  const { post } = resp

  const initProps = {
    ...ssrBaseStates(resp),
    viewing: {
      post,
      activeThread: ARTICLE_THREAD.POST,
    },
  }

  return { props: { errorCode: null, ...initProps } }
}

const PostPage = (props) => {
  const store = useStore(props)
  const { viewing } = props
  const { post } = viewing

  const seoConfig = articleSEO(ARTICLE_THREAD.POST, post)

  return (
    <Provider store={store}>
      <GlobalLayout metric={METRIC.ARTICLE} seoConfig={seoConfig} noSidebar>
        <ArticleDigest />
        <ArticleContent />
      </GlobalLayout>
    </Provider>
  )
}

export default PostPage
