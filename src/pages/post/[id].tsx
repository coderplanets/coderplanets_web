import { Provider } from 'mobx-react'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'

import { ARTICLE_THREAD, METRIC } from '@/constant'

import {
  ssrBaseStates,
  ssrFetchPrepare,
  ssrError,
  articleSEO,
  ssrGetParam,
  refreshIfneed,
  makeGQClient,
} from '@/utils'
import { useStore } from '@/stores/init'

import GlobalLayout from '@/containers/layout/GlobalLayout'
import ArticleDigest from '@/containers/digest/ArticleDigest'
import ArticleContent from '@/containers/content/ArticleContent'

import { P } from '@/schemas'

const loader2 = async (context, opt = {}) => {
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

const loader = async (params) => {
  const gqClient = makeGQClient('')
  const { id } = params

  const post = gqClient.request(P.post, { id, userHasLogin: false })

  return {
    ...(await post),
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  console.log('ctx: ', ctx)
  const { params } = ctx

  const resp = await loader(params)
  // console.log('resp: ', resp)

  return {
    props: {
      viewing: {
        post: resp.post,
        activeThread: ARTICLE_THREAD.POST,
      },
    },
    revalidate: 5,
  }
}

const PostPage = (props) => {
  const store = useStore(props)

  const { isFallback } = useRouter()
  if (isFallback) return <h3>loading ...</h3>

  const { viewing } = props
  const { post } = viewing

  const seoConfig = articleSEO(ARTICLE_THREAD.POST, post)
  // console.log('## init store: ', store)

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
