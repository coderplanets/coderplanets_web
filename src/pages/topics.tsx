import { GetStaticProps } from 'next'
import { merge, toLower } from 'ramda'

import type { TCommunity } from '@/spec'
import { HCN, THREAD, METRIC, ROUTE } from '@/constant'
import { useStore } from '@/stores/init'

import {
  isArticleThread,
  ssrPagedArticleSchema,
  isrPagedArticlesFilter,
  ssrParseArticleThread,
  communitySEO,
  singular,
  makeGQClient,
} from '@/utils'

import GlobalLayout from '@/containers/layout/GlobalLayout'
import CommunityContent from '@/containers/content/CommunityContent'

import { P } from '@/schemas'

const loader = async () => {
  const gqClient = makeGQClient('')

  // 线上环境会直接跳过 index 到这里，有待排查。。
  const community = HCN
  const thread = THREAD.POST

  // query data
  const curCommunity = gqClient.request(P.community, {
    raw: community,
    userHasLogin: false,
  })

  const pagedArticleTags = gqClient.request(P.pagedArticleTags, {
    filter: { communityRaw: community, thread: singular(thread, 'upperCase') },
  })

  const filter = isrPagedArticlesFilter({})

  const pagedArticles = isArticleThread(thread)
    ? gqClient.request(ssrPagedArticleSchema(thread), filter)
    : {}

  return {
    filter,
    ...(await pagedArticleTags),
    ...(await curCommunity),
    ...(await pagedArticles),
  }
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   return { paths: [], fallback: true }
// }

export const getStaticProps: GetStaticProps = async (ctx) => {
  const thread = THREAD.POST
  const resp = await loader()

  const { filter, community, pagedArticleTags } = resp
  const articleThread = ssrParseArticleThread(resp, thread, filter)

  const initProps = merge(
    {
      // ...ssrBaseStates(resp),
      route: {
        communityPath: community.raw,
        mainPath: ROUTE.TOPICS,
        subPath: thread === THREAD.POST ? '' : thread,
        thread,
      },
      tagsBar: {
        tags: pagedArticleTags.entries,
      },
      viewing: {
        community,
        activeThread: toLower(thread),
      },
    },
    articleThread,
  )

  return { props: { errorCode: null, ...initProps }, revalidate: 10 }
}

const CommunityPage = (props) => {
  const store = useStore()
  store.mark(props)

  const { viewing } = store
  const { community, activeThread } = viewing

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
