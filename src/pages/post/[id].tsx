import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import { ARTICLE_THREAD, METRIC } from '@/constant'

import { articleSEO, makeGQClient } from '@/utils'
import { useStore } from '@/stores/init'

import GlobalLayout from '@/containers/layout/GlobalLayout'
import ArticleDigest from '@/containers/digest/ArticleDigest'
import ArticleContent from '@/containers/content/ArticleContent'
import LavaLampLoading from '@/widgets/Loading/LavaLampLoading'

import { P } from '@/schemas'

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
  const { params } = ctx

  const resp = await loader(params)

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
  const store = useStore()
  store.mark(props)

  const { isFallback } = useRouter()
  if (isFallback) return <LavaLampLoading top={20} left={30} />

  const { viewing } = props
  const { post } = viewing

  const seoConfig = articleSEO(ARTICLE_THREAD.POST, post)

  return (
    <GlobalLayout metric={METRIC.ARTICLE} seoConfig={seoConfig} noSidebar>
      <ArticleDigest />
      <ArticleContent />
    </GlobalLayout>
  )
}

export default PostPage
