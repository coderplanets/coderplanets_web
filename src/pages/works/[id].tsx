// import { GetServerSideProps } from 'next'
import { Provider } from 'mobx-react'

import { ROUTE, THREAD, METRIC } from '@/constant'

import {
  ssrFetchPrepare,
  ssrError,
  articleSEO,
  ssrBaseStates,
  ssrGetParam,
  refreshIfneed,
} from '@/utils'

import { useStore } from '@/stores/init'

import GlobalLayout from '@/containers/layout/GlobalLayout'
import ArticleDigest from '@/containers/digest/ArticleDigest'
import ArticleContent from '@/containers/content/ArticleContent'

import { P } from '@/schemas'

const loader = async (context, opt = {}) => {
  const id = ssrGetParam(context, 'id')
  const { gqClient, userHasLogin } = ssrFetchPrepare(context, opt)

  // query data
  const sessionState = gqClient.request(P.sessionState)
  const works = gqClient.request(P.works, { id, userHasLogin })

  const subscribedCommunities = gqClient.request(P.subscribedCommunities, {
    filter: {
      page: 1,
      size: 30,
    },
  })

  return {
    ...(await sessionState),
    ...(await works),
    ...(await subscribedCommunities),
  }
}

export const getServerSideProps = async (context) => {
  let resp
  try {
    resp = await loader(context)
    const { works, sessionState } = resp
    refreshIfneed(sessionState, `/works/${works.id}`, context)
  } catch (e) {
    console.log('#### error from server: ', e)
    return ssrError(context, 'fetch', 500)
  }

  const { works } = resp

  const initProps = {
    ...ssrBaseStates(resp),
    route: { mainPath: ROUTE.WORKS, subPath: works.id },
    viewing: {
      works,
      activeThread: THREAD.WORKS,
    },
  }

  return { props: { errorCode: null, ...initProps } }
}

const WorksArticlePage = (props) => {
  const store = useStore(props)
  const { viewing } = props
  const { works } = viewing

  const seoConfig = articleSEO(THREAD.WORKS, works)

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
