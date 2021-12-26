import { Provider } from 'mobx-react'
import { GetServerSideProps } from 'next'
import { merge } from 'ramda'

import { PAGE_SIZE } from '@/config'
import { HCN, THREAD, METRIC } from '@/constant'
import { useStore } from '@/stores/init'

import {
  isArticleThread,
  ssrBaseStates,
  ssrFetchPrepare,
  ssrError,
  ssrPagedArticleSchema,
  ssrPagedArticlesFilter,
  ssrParseArticleThread,
  ssrRescue,
  communitySEO,
  singular,
  ssrGetParam,
} from '@/utils'

import GlobalLayout from '@/containers/layout/GlobalLayout'
import CommunityContent from '@/containers/content/CommunityContent'

import { P } from '@/schemas'

const loader = async (context, opt = {}) => {
  const { query } = context

  const { gqClient, userHasLogin } = ssrFetchPrepare(context, opt)
  let community = query.community || HCN
  // 生产环境，从其他页面返回时后有这种情况，需要单独判断
  if (community === 'index') community = 'home'

  const thread = singular(query.thread || THREAD.POST)
  // const thread = params.thread ? singular(params.thread) : THREAD.POST

  // query data
  const sessionState = gqClient.request(P.sessionState)
  const curCommunity = gqClient.request(P.community, {
    raw: community,
    userHasLogin,
  })

  const pagedArticleTags = isArticleThread(thread)
    ? gqClient.request(P.pagedArticleTags, {
        filter: {
          communityRaw: community,
          thread: singular(thread, 'upperCase'),
        },
      })
    : {}

  const filter = ssrPagedArticlesFilter(context, userHasLogin)
  const pagedArticles = isArticleThread(thread)
    ? gqClient.request(ssrPagedArticleSchema(thread), filter)
    : {}

  // const subscribedCommunities = gqClient.request(P.subscribedCommunities, {
  //   filter: {
  //     page: 1,
  //     size: PAGE_SIZE.M,
  //   },
  // })

  return {
    filter,
    ...(await pagedArticleTags),
    ...(await sessionState),
    ...(await curCommunity),
    ...(await pagedArticles),
    // ...(await subscribedCommunities),
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { res, query } = context

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59',
  )

  const thread = singular((query.thread as string) || THREAD.POST)

  console.log('page index, thread: ', thread)

  let resp
  try {
    resp = await loader(context)
  } catch (e) {
    console.log('#### error from server: ', e)
    if (ssrRescue.hasLoginError(e.response?.errors)) {
      // token 过期了，重新用匿名方式请求一次
      await loader(context, { tokenExpired: true })
    } else {
      return ssrError(context, 'fetch', 500)
    }
  }

  const { filter, community, pagedArticleTags } = resp

  const articleThread = ssrParseArticleThread(resp, thread, filter)

  // console.log('articleThread: ', articleThread.articlesThread.pagedJobs.entries)
  const initProps = merge(
    {
      ...ssrBaseStates(resp),
      route: {
        communityPath: community.raw,
        mainPath:
          community.raw === HCN && thread === THREAD.POST ? '' : community.raw,
        subPath: thread === THREAD.POST ? '' : thread,
        thread,
      },
      tagsBar: {
        tags: pagedArticleTags?.entries || [],
      },
      viewing: {
        community,
        activeThread: thread,
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
