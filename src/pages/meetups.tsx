import { Provider } from 'mobx-react'

import { METRIC, THREAD } from '@/constant'

import {
  ssrFetchPrepare,
  ssrHomePagedArticlesFilter,
  ssrPagedArticleSchema,
  ssrParseArticleThread,
  ssrRescue,
  parseTheme,
  meetupsSEO,
  ssrError,
} from '@/utils'

import { P } from '@/schemas'

import GlobalLayout from '@/containers/layout/GlobalLayout'
import MeetupsContent from '@/containers/content/MeetupsContent'

import { useStore } from '@/stores/init'

const fetchData = async (context, opt = {}) => {
  const { gqClient, userHasLogin } = ssrFetchPrepare(context, opt)
  const filter = ssrHomePagedArticlesFilter(context, userHasLogin)

  const pagedArticles = gqClient.request(
    ssrPagedArticleSchema(THREAD.MEETUP),
    filter,
  )
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
  } catch ({ response: { errors } }) {
    if (ssrRescue.hasLoginError(errors)) {
      resp = await fetchData(context, { tokenExpired: true })
    } else {
      return ssrError(context, 'fetch', 500)
    }
  }

  const { filter, sessionState, subscribedCommunities } = resp
  const { articlesThread } = ssrParseArticleThread(resp, THREAD.MEETUP, filter)
  const { pagedMeetups } = articlesThread

  const initProps = {
    theme: {
      curTheme: parseTheme(sessionState),
    },
    account: {
      user: sessionState.user || {},
      isValidSession: sessionState.isValid,
      userSubscribedCommunities: subscribedCommunities,
    },
    meetupsContent: {
      pagedMeetups,
    },
  }

  return {
    props: { errorCode: null, namespacesRequired: ['general'], ...initProps },
  }
}

const MeetupsPage = (props) => {
  const store = useStore(props)
  const seoConfig = meetupsSEO()

  return (
    <Provider store={store}>
      <GlobalLayout metric={METRIC.MEETUPS} seoConfig={seoConfig} noSidebar>
        <MeetupsContent />
      </GlobalLayout>
    </Provider>
  )
}

export default MeetupsPage
