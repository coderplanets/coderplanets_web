import { Provider } from 'mobx-react'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'
import { merge, toLower } from 'ramda'

import { HCN, THREAD, METRIC } from '@/constant'
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

const loader = async (query) => {
  const gqClient = makeGQClient('')

  // 线上环境会直接跳过 index 到这里，有待排查。。
  const community = query.community || HCN
  const thread = singular(query.thread || THREAD.POST)

  // query data
  const curCommunity = gqClient.request(P.community, {
    raw: community,
    userHasLogin: false,
  })

  const pagedArticleTags = gqClient.request(P.pagedArticleTags, {
    filter: { communityRaw: community, thread: singular(thread, 'upperCase') },
  })

  const filter = isrPagedArticlesFilter(query)

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

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx
  console.log('params: ', params)

  const thread = singular((params.thread as string) || THREAD.POST)
  const resp = await loader(params)

  const { filter, community, pagedArticleTags } = resp
  // console.log('iii got resp: ', resp)
  const articleThread = ssrParseArticleThread(resp, thread, filter)

  const initProps = merge(
    {
      // ...ssrBaseStates(resp),
      route: {
        communityPath: community.raw,
        mainPath: community.raw === HCN ? '' : community.raw,
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
  const store = useStore(props)

  const { isFallback } = useRouter()
  if (isFallback) return <h3>loading ...</h3>

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
