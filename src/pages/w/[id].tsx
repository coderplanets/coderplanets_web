import { GetStaticPaths, GetStaticProps } from 'next'
// import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

import { ARTICLE_THREAD, METRIC } from '@/constant'
import { articleSEO, makeGQClient, log } from '@/utils'

import { useStore } from '@/stores/init'

import GlobalLayout from '@/containers/layout/GlobalLayout'
import ArticleDigest from '@/containers/digest/ArticleDigest'
import ArticleContent from '@/containers/content/ArticleContent'
import LavaLampLoading from '@/widgets/Loading/LavaLampLoading'

import { P } from '@/schemas'

const loader = async (params) => {
  const gqClient = makeGQClient('')
  const { id } = params

  const works = gqClient.request(P.works, { id, userHasLogin: false })

  return {
    ...(await works),
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  log('ctx: ', ctx)
  const { params } = ctx

  const resp = await loader(params)

  return {
    props: {
      viewing: {
        works: resp.works,
        activeThread: ARTICLE_THREAD.WORKS,
      },
    },
    revalidate: 5,
  }
}

const WorksArticlePage = (props) => {
  const store = useStore()
  store.mark(props)

  const { isFallback } = useRouter()
  if (isFallback) return <LavaLampLoading top={20} left={30} />

  const { viewing } = props
  const { works } = viewing

  const seoConfig = articleSEO(ARTICLE_THREAD.WORKS, works)

  return (
    <GlobalLayout metric={METRIC.WORKS_ARTICLE} seoConfig={seoConfig} noSidebar>
      <ArticleDigest />
      <ArticleContent />
    </GlobalLayout>
  )
}

export default WorksArticlePage
