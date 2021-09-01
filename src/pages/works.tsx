/*
   this page is for /works
 */
import { Provider } from 'mobx-react'

import { METRIC } from '@/constant'
import {
  ssrFetchPrepare,
  ssrHomePagedArticlesFilter,
  ssrPagedArticleSchema,
  ssrParseArticleThread,
  ssrRescue,
  parseTheme,
  worksSEO,
  ssrError,
} from '@/utils'
import { P } from '@/schemas'

import GlobalLayout from '@/containers/layout/GlobalLayout'
import WorksContent from '@/containers/content/WorksContent'

import { useStore } from '@/stores/init'

const fetchData = async (context, opt = {}) => {
  const { gqClient, userHasLogin } = ssrFetchPrepare(context, opt)
  const filter = ssrHomePagedArticlesFilter(context, userHasLogin)

  const pagedArticles = gqClient.request(ssrPagedArticleSchema('works'), filter)
  const sessionState = gqClient.request(P.sessionState)
  const subscribedCommunities = gqClient.request(P.subscribedCommunities, {
    filter: {
      page: 1,
      size: 30,
    },
  })

  return {
    filter,
    ...(await sessionState),
    ...(await subscribedCommunities),
    ...(await pagedArticles),
  }
}

export const getServerSideProps = async (context) => {
  let resp
  try {
    resp = await fetchData(context)
  } catch (e) {
    console.log('#### error from server: ', e)
    const {
      response: { errors },
    } = e

    if (ssrRescue.hasLoginError(errors)) {
      resp = await fetchData(context, { tokenExpired: true })
    } else {
      return ssrError(context, 'fetch', 500)
    }
  }

  const { filter, sessionState, subscribedCommunities } = resp
  const { articlesThread } = ssrParseArticleThread(resp, 'works', filter)
  const { pagedWorks } = articlesThread

  const initProps = {
    theme: {
      curTheme: parseTheme(sessionState),
    },
    account: {
      user: sessionState.user || {},
      isValidSession: sessionState.isValid,
      userSubscribedCommunities: subscribedCommunities,
    },
    worksContent: {
      pagedWorks,
    },
  }

  return {
    props: { errorCode: null, namespacesRequired: ['general'], ...initProps },
  }
}

const WorksPage = (props) => {
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

export default WorksPage
