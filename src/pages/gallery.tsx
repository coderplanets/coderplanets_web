/*
   this page is for /works
 */
import { Provider } from 'mobx-react'

import { METRIC, THREAD } from '@/constant'
import {
  ssrFetchPrepare,
  ssrHomePagedArticlesFilter,
  ssrPagedArticleSchema,
  ssrBaseStates,
  ssrParseArticleThread,
  ssrRescue,
  worksSEO,
  ssrError,
} from '@/utils'
import { P } from '@/schemas'

import GlobalLayout from '@/containers/layout/GlobalLayout'
import WorksContent from '@/containers/content/WorksContent'

import { useStore } from '@/stores/init'

const loader = async (context, opt = {}) => {
  const { gqClient, userHasLogin } = ssrFetchPrepare(context, opt)
  const filter = ssrHomePagedArticlesFilter(context, userHasLogin)

  const pagedArticles = gqClient.request(
    ssrPagedArticleSchema(THREAD.WORKS),
    filter,
  )
  const sessionState = gqClient.request(P.sessionState)

  return {
    filter,
    ...(await sessionState),
    ...(await pagedArticles),
  }
}

export const getServerSideProps = async (context) => {
  let resp
  try {
    resp = await loader(context)
  } catch (e) {
    console.log('#### error from server: ', e)
    if (ssrRescue.hasLoginError(e.response?.errors)) {
      resp = await loader(context, { tokenExpired: true })
    } else {
      return ssrError(context, 'fetch', 500)
    }
  }

  const { filter } = resp

  const { articlesThread } = ssrParseArticleThread(resp, THREAD.WORKS, filter)
  const { pagedWorks } = articlesThread

  const initProps = {
    ...ssrBaseStates(resp),
    viewing: {
      activeThread: THREAD.WORKS,
    },
    worksContent: {
      pagedWorks,
    },
  }

  return {
    props: { errorCode: null, namespacesRequired: ['general'], ...initProps },
  }
}

const GalleryPage = (props) => {
  const store = useStore(props)
  const seoConfig = worksSEO()

  return (
    <Provider store={store}>
      <GlobalLayout metric={METRIC.WORKS} seoConfig={seoConfig} noSidebar>
        <WorksContent />
      </GlobalLayout>
    </Provider>
  )
}

export default GalleryPage
