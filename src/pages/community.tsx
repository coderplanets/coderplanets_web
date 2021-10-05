import { Provider } from 'mobx-react'
import { GetServerSideProps } from 'next'
import { merge, toLower } from 'ramda'

import { PAGE_SIZE } from '@/config'
import { METRIC } from '@/constant'
import { useStore } from '@/stores/init'

import {
  isArticleThread,
  ssrBaseStates,
  ssrFetchPrepare,
  ssrParseURL,
  ssrError,
  ssrPagedArticleSchema,
  ssrPagedArticlesFilter,
  ssrParseArticleThread,
  ssrRescue,
  communitySEO,
} from '@/utils'

import GlobalLayout from '@/containers/layout/GlobalLayout'
import CommunityContent from '@/containers/content/CommunityContent'

import { P } from '@/schemas'

const fetchData = async (context, opt = {}) => {
  const { gqClient, userHasLogin } = ssrFetchPrepare(context, opt)
  const { community, thread } = ssrParseURL(context.req)

  // query data
  const sessionState = gqClient.request(P.sessionState)
  const curCommunity = gqClient.request(P.community, {
    raw: community,
    userHasLogin,
  })

  const filter = ssrPagedArticlesFilter(context, userHasLogin)
  const pagedArticles = isArticleThread(thread)
    ? gqClient.request(ssrPagedArticleSchema(thread), filter)
    : {}

  const subscribedCommunities = gqClient.request(P.subscribedCommunities, {
    filter: {
      page: 1,
      size: PAGE_SIZE.M,
    },
  })

  return {
    filter,
    ...(await sessionState),
    ...(await curCommunity),
    ...(await pagedArticles),
    ...(await subscribedCommunities),
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { thread, threadPath } = ssrParseURL(context.req)

  let resp
  try {
    resp = await fetchData(context)
  } catch (e) {
    console.log('#### error from server: ', e)
    if (ssrRescue.hasLoginError(e.response?.errors)) {
      // token 过期了，重新用匿名方式请求一次
      await fetchData(context, { tokenExpired: true })
    } else {
      return ssrError(context, 'fetch', 500)
    }
  }

  const { filter, community } = resp
  const articleThread = ssrParseArticleThread(resp, thread, filter)

  // console.log('articleThread: ', articleThread.articlesThread.pagedJobs.entries)
  const initProps = merge(
    {
      ...ssrBaseStates(resp),
      route: {
        communityPath: community.raw,
        mainPath: community.raw,
        threadPath,
        subPath: threadPath,
      },
      viewing: {
        community,
        activeThread: toLower(thread),
      },
    },
    articleThread,
  )

  return { props: { errorCode: null, ...initProps } }
}

const CommunityPage = (props) => {
  const store = useStore(props)

  const { viewing } = store
  const { community, activeThread } = viewing

  return (
    <Provider store={store}>
      <GlobalLayout
        metric={METRIC.COMMUNITY}
        seoConfig={communitySEO(community, activeThread)}
      >
        <CommunityContent />
      </GlobalLayout>
    </Provider>
  )
}

export default CommunityPage
