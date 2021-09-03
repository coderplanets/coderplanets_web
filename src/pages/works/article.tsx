// import { GetServerSideProps } from 'next'
import { Provider } from 'mobx-react'

import { SITE_URL } from '@/config'
import { ROUTE, THREAD, METRIC } from '@/constant'
import {
  ssrBaseStates,
  ssrFetchPrepare,
  ssrParseURL,
  ssrRescue,
  ssrError,
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
      works: post,
      activeThread: THREAD.WORKS,
    },
    // TODO: load comments on Client
    // comments: { pagedComments },
  }

  return { props: { errorCode: null, ...initProps } }
}

const WorksArticlePage = (props) => {
  const store = useStore(props)
  const { viewing } = props
  const { works } = viewing

  const seoConfig = {
    url: `${SITE_URL}/${THREAD.WORKS}/${works.id}`,
    title: `${works.title}`,
    datePublished: `${works.insertedAt}`,
    dateModified: `${works.updatedAt}`,
    authorName: `${works.author.nickname}`,
    description: `${works.title}`,
    images: [],
  }

  return (
    <Provider store={store}>
      <GlobalLayout
        metric={METRIC.WORKS_ARTICLE}
        seoConfig={seoConfig}
        noSidebar
      >
        <ArticleDigest />
        <ArticleContent />
      </GlobalLayout>
    </Provider>
  )
}

export default WorksArticlePage
