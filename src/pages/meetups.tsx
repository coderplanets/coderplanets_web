import { METRIC, THREAD } from '@/constant'

import {
  ssrHomePagedArticlesFilter,
  ssrPagedArticleSchema,
  ssrParseArticleThread,
  ssrBaseStates,
  ssrFetchPrepare,
  refreshIfneed,
  meetupsSEO,
  ssrError,
  log,
} from '@/utils'

import { P } from '@/schemas'

import GlobalLayout from '@/containers/layout/GlobalLayout'
import MeetupsContent from '@/containers/content/MeetupsContent'

import { useStore } from '@/stores/init'

const loader = async (context, opt = {}) => {
  const { gqClient, userHasLogin } = ssrFetchPrepare(context, opt)
  const filter = ssrHomePagedArticlesFilter(context, userHasLogin)

  const pagedArticles = gqClient.request(
    ssrPagedArticleSchema(THREAD.MEETUP),
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
    const { sessionState } = resp

    refreshIfneed(sessionState, '/meetups', context)
  } catch (e) {
    log('#### error from server: ', e)
    return ssrError(context, 'fetch', 500)
  }

  const { filter } = resp
  const { articlesThread } = ssrParseArticleThread(resp, THREAD.MEETUP, filter)
  const { pagedMeetups } = articlesThread

  const initProps = {
    ...ssrBaseStates(resp),
    meetupsContent: {
      pagedMeetups,
    },
  }

  return {
    props: { errorCode: null, namespacesRequired: ['general'], ...initProps },
  }
}

const MeetupsPage = (props) => {
  const store = useStore()
  store.mark(props)
  const seoConfig = meetupsSEO()

  return (
    <GlobalLayout metric={METRIC.MEETUPS} seoConfig={seoConfig} noSidebar>
      <MeetupsContent />
    </GlobalLayout>
  )
}

export default MeetupsPage
