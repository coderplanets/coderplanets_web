import { GetStaticPaths, GetStaticProps } from 'next'
// import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { Provider } from 'mobx-react'

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

  const works = gqClient.request(P.works, { id, userHasLogin: false })

  return {
    ...(await works),
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
        works: resp.works,
        activeThread: ARTICLE_THREAD.WORKS,
      },
    },
    revalidate: 5,
  }
}

const WorksArticlePage = (props) => {
  const store = useStore(props)

  const { isFallback } = useRouter()
  if (isFallback) return <LavaLampLoading top={20} left={30} />

  const { viewing } = props
  const { works } = viewing

  const seoConfig = articleSEO(ARTICLE_THREAD.WORKS, works)

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
