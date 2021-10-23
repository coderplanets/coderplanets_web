import { Provider } from 'mobx-react'

import { ROUTE, ARTICLE_THREAD, METRIC } from '@/constant'
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
  const blog = gqClient.request(P.blog, { id, userHasLogin })

  const subscribedCommunities = gqClient.request(P.subscribedCommunities, {
    filter: {
      page: 1,
      size: 30,
    },
  })

  return {
    ...(await sessionState),
    ...(await blog),
    ...(await subscribedCommunities),
  }
}

export const getServerSideProps = async (context) => {
  let resp
  try {
    resp = await fetchData(context)
    const { blog, sessionState } = resp
    refreshIfneed(sessionState, `/blog/${blog.id}`, context)
  } catch (e) {
    console.log('#### error from server: ', e)
    return ssrError(context, 'fetch', 500)
  }

  const { blog } = resp

  const initProps = {
    ...ssrBaseStates(resp),
    route: { mainPath: ROUTE.BLOG, subPath: blog.id },
    viewing: {
      blog,
      activeThread: ARTICLE_THREAD.BLOG,
    },
    // TODO: load comments on Client
    // comments: { pagedComments },
  }

  return { props: { errorCode: null, ...initProps } }
}

const BlogPage = (props) => {
  const store = useStore(props)
  const { viewing } = props
  const { blog } = viewing

  const seoConfig = articleSEO(ARTICLE_THREAD.BLOG, blog)

  return (
    <Provider store={store}>
      <GlobalLayout
        metric={METRIC.BLOG_ARTICLE}
        seoConfig={seoConfig}
        noSidebar
      >
        <ArticleDigest />
        <ArticleContent />
      </GlobalLayout>
    </Provider>
  )
}

export default BlogPage
