// import { GetServerSideProps } from 'next'
import { Provider } from 'mobx-react'

import { ROUTE, THREAD, METRIC } from '@/constant'
import {
  ssrBaseStates,
  ssrFetchPrepare,
  ssrParseURL,
  ssrRescue,
  ssrError,
  articleSEO,
} from '@/utils'
import { useStore } from '@/stores/init'

import GlobalLayout from '@/containers/layout/GlobalLayout'
import ArticleDigest from '@/containers/digest/ArticleDigest'
import ArticleContent from '@/containers/content/ArticleContent'

import { P } from '@/schemas'

const fetchData = async (context, opt = {}) => {
  const { gqClient, userHasLogin } = ssrFetchPrepare(context, opt)

  // schema
  const { subPath: id } = ssrParseURL(context.req)

  // query data
  const sessionState = gqClient.request(P.sessionState)
  const post = gqClient.request(P.post, { id, userHasLogin })
  // const pagedComments = gqClient.request(P.pagedComments, {
  //   id,
  //   userHasLogin,
  //   thread: toUpper(THREAD.POST),
  //   filter: { page: 1, size: PAGE_SIZE.D, sort: TYPE.ASC_INSERTED },
  // })
  const subscribedCommunities = gqClient.request(P.subscribedCommunities, {
    filter: {
      page: 1,
      size: 30,
    },
  })

  // TODO: comments
  return {
    ...(await sessionState),
    ...(await post),
    // ...(await pagedComments),
    ...(await subscribedCommunities),
  }
}

export const getServerSideProps = async (context) => {
  let resp
  try {
    resp = await fetchData(context)
  } catch (e) {
    console.log('#### error from server: ', e)
    if (ssrRescue.hasLoginError(e.response?.errors)) {
      resp = await fetchData(context, { tokenExpired: true })
    } else {
      return ssrError(context, 'fetch', 500)
    }
  }

  const { post } = resp

  const initProps = {
    ...ssrBaseStates(resp),
    route: { mainPath: ROUTE.POST, subPath: post.id },
    viewing: {
      post,
      activeThread: THREAD.POST,
    },
    // TODO: load comments on Client
    // comments: { pagedComments },
  }

  return { props: { errorCode: null, ...initProps } }
}

const PostPage = (props) => {
  const store = useStore(props)
  const { viewing } = props
  const { post } = viewing

  const seoConfig = articleSEO(THREAD.POST, post)

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
