import { Provider } from 'mobx-react'
import { GetServerSideProps } from 'next'
import { merge, toLower } from 'ramda'

import { PAGE_SIZE, SITE_URL } from '@/config'
import { METRIC } from '@/constant'
import { useStore } from '@/stores/init'

import {
  ssrFetchPrepare,
  ssrParseURL,
  ssrError,
  ssrPagedArticleSchema,
  ssrPagedArticlesFilter,
  ssrParseArticleThread,
  ssrAmbulance,
  parseTheme,
} from '@/utils'

import GlobalLayout from '@/containers/layout/GlobalLayout'
import CommunityContent from '@/containers/content/CommunityContent'

import { P } from '@/schemas'

const fetchData = async (context, opt = {}) => {
  const { gqClient, userHasLogin } = ssrFetchPrepare(context, opt)
  const filter = ssrPagedArticlesFilter(context, userHasLogin)

  // query data
  const sessionState = gqClient.request(P.sessionState)
  const curCommunity = gqClient.request(P.community, {
    raw: filter.community,
    userHasLogin,
  })
  const pagedArticles = gqClient.request(
    ssrPagedArticleSchema(filter.thread),
    filter,
  )

  const subscribedCommunities = gqClient.request(P.subscribedCommunities, {
    filter: {
      page: 1,
      size: PAGE_SIZE.M,
    },
  })

  return {
    filter,
    ...((await sessionState) as Record<string, unknown>),
    ...((await curCommunity) as Record<string, unknown>),
    ...((await pagedArticles) as Record<string, unknown>),
    ...((await subscribedCommunities) as Record<string, unknown>),
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { thread, threadPath } = ssrParseURL(context.req)

  let resp
  try {
    resp = await fetchData(context)
    // console.log('#### fetchData from server: ', resp)
  } catch (e) {
    console.log('#### error from server: ', e)
    const {
      response: { errors },
    } = e
    if (ssrAmbulance.hasLoginError(errors)) {
      // token 过期了，重新用匿名方式请求一次
      await fetchData(context, { tokenExpired: true })
    } else {
      return ssrError(context, 'fetch', 500)
    }
  }

  const { filter, sessionState, community, subscribedCommunities } = resp
  const articleThread = ssrParseArticleThread(resp, thread, filter)

  // // init state on server side
  const initProps = merge(
    {
      theme: {
        curTheme: parseTheme(sessionState),
      },
      account: {
        user: sessionState.user || {},
        isValidSession: sessionState.isValid,
        userSubscribedCommunities: subscribedCommunities,
      },
      route: {
        communityPath: community.raw,
        mainPath: community.raw,
        threadPath,
        subPath: threadPath,
      },
      viewing: {
        community,
        activeThread: toLower(thread),
      },
    },
    articleThread,
  )

  return { props: { errorCode: null, ...initProps } }
}

const CommunityPage = (props) => {
  const store = useStore(props)

  const { errorCode, viewing } = store
  const { community, activeThread } = viewing

  const seoConfig = {
    url: `${SITE_URL}/${community.raw}/${activeThread}`,
    title:
      community.raw === 'home' ? 'CoderPlanets' : `${community.title} | CP`,
    description: `${community.desc}`,
  }

  return (
    <Provider store={store}>
      <GlobalLayout
        metric={METRIC.COMMUNITY}
        seoConfig={seoConfig}
        errorCode={errorCode}
        errorPath={community.raw}
      >
        <CommunityContent />
      </GlobalLayout>
    </Provider>
  )
}

export default CommunityPage
