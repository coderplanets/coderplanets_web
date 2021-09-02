// import { GetServerSideProps } from 'next'
import { Provider } from 'mobx-react'

import { SITE_URL } from '@/config'
import { ROUTE, THREAD, METRIC } from '@/constant'
import {
  ssrFetchPrepare,
  ssrParseURL,
  ssrRescue,
  ssrError,
  parseTheme,
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
  console.log('# -> id: ', id)

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
    const {
      response: { errors },
    } = e
    if (ssrRescue.hasLoginError(errors)) {
      resp = await fetchData(context, { tokenExpired: true })
    } else {
      return ssrError(context, 'fetch', 500)
    }
  }

  const { sessionState, post, subscribedCommunities } = resp

  const { originalCommunity: community, ...viewingContent } = post
  const initProps = {
    theme: {
      curTheme: parseTheme(sessionState),
    },
    account: {
      user: sessionState.user || {},
      isValidSession: sessionState.isValid,
      userSubscribedCommunities: subscribedCommunities,
    },
    route: { mainPath: ROUTE.POST, subPath: viewingContent.id },
    viewing: {
      post: viewingContent,
      activeThread: THREAD.POST,
    },
    // TODO: load comments on Client
    // comments: { pagedComments },
  }

  return { props: { errorCode: null, ...initProps } }
}

const PostPage = (props) => {
  const store = useStore(props)
  const { viewing, route } = props
  const { post } = viewing

  const { mainPath } = route

  const seoConfig = {
    url: `${SITE_URL}/${mainPath}/${ROUTE.POST}/${post.id}`,
    title: `${post.title}`,
    datePublished: `${post.insertedAt}`,
    dateModified: `${post.updatedAt}`,
    authorName: `${post.author.nickname}`,
    description: `${post.title}`,
    images: [],
  }

  return (
    <Provider store={store}>
      <GlobalLayout
        metric={METRIC.ARTICLE}
        // metric={METRIC.WORKS_ARTICLE}
        seoConfig={seoConfig}
        noSidebar
      >
        <ArticleDigest />
        <ArticleContent />
      </GlobalLayout>
    </Provider>
  )
}

export default PostPage
