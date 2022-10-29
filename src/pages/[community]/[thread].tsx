import { GetServerSideProps } from 'next'
import { merge, toLower } from 'ramda'

import type { TCommunity } from '@/spec'
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
} from '@/utils'

import GlobalLayout from '@/containers/layout/GlobalLayout'
import CommunityContent from '@/containers/content/CommunityContent'

import { P } from '@/schemas'

const loader = async (context, opt = {}) => {
  const { query } = context
  const { gqClient, userHasLogin } = ssrFetchPrepare(context, opt)

  // 线上环境会直接跳过 index 到这里，有待排查。。
  const community = query.community || HCN
  const thread = singular(query.thread || THREAD.POST)

  // query data
  const sessionState = gqClient.request(P.sessionState)
  const curCommunity = gqClient.request(P.community, {
    raw: community,
    userHasLogin,
  })

  // tmply
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

  const subscribedCommunities = gqClient.request(P.subscribedCommunities, {
    filter: {
      page: 1,
      size: PAGE_SIZE.M,
    },
  })

  return {
    filter,
    ...(await pagedArticleTags),
    ...(await sessionState),
    ...(await curCommunity),
    ...(await pagedArticles),
    ...(await subscribedCommunities),
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { res, query } = context

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59',
  )

  const thread = singular((query.thread as string) || THREAD.POST)
  console.log('page community, thread: ', thread)

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

  const initProps = merge(
    {
      ...ssrBaseStates(resp),
      route: {
        communityPath: community.raw,
        mainPath: community.raw === HCN ? '' : community.raw,
        subPath: thread === THREAD.POST ? '' : thread,
        thread,
      },
      tagsBar: {
        tags: pagedArticleTags?.entries || [],
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
  const { viewing } = props
  const { community, activeThread } = viewing
  const store = useStore()

  store.mark(props)

  return (
    <GlobalLayout
      metric={METRIC.COMMUNITY}
      seoConfig={communitySEO(community as TCommunity, activeThread)}
    >
      <CommunityContent />
    </GlobalLayout>
  )
}

export default CommunityPage
