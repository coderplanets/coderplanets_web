import { Provider } from 'mobx-react'
import { GetServerSideProps } from 'next'
import { merge, pick, toLower } from 'ramda'

import { PAGE_SIZE, SITE_URL } from '@/config'
import { METRIC } from '@/constant'
import { useStore } from '@/stores/init2'

import {
  getJwtToken,
  makeGQClient,
  queryStringToJSON,
  ssrParseURL,
  akaTranslate,
  nilOrEmpty,
  ssrPagedArticleSchema,
  ssrPagedFilter,
  ssrParseArticleThread,
  ssrAmbulance,
  validCommunityFilters,
  parseTheme,
} from '@/utils'

import GlobalLayout from '@/containers/layout/GlobalLayout'
import CommunityContent from '@/containers/content/CommunityContent'

import { P } from '@/schemas'

const fetchData = async (props, opt = {}) => {
  const { realname } = merge({ realname: true }, opt)

  const token = realname ? getJwtToken(props) : null
  const gqClient = makeGQClient(token)
  const userHasLogin = nilOrEmpty(token) === false

  // const { asPath } = props
  // schema

  const { communityPath, thread } = ssrParseURL(props.req)
  const community = akaTranslate(communityPath)

  let filter = {
    // @ts-ignore TODO:
    ...queryStringToJSON(props.req.url, { pagi: 'number' }),
    community,
    thread,
  }
  filter = pick(validCommunityFilters, filter)

  // query data
  const sessionState = gqClient.request(P.sessionState)
  const curCommunity = gqClient.request(P.community, {
    raw: community,
    userHasLogin,
  })
  const pagedContents = gqClient.request(
    ssrPagedArticleSchema(thread),
    ssrPagedFilter(community, thread, filter, userHasLogin),
  )

  const pagedArticleTags = gqClient.request(P.pagedArticleTags, {
    filter: {
      thread,
      community,
    },
  })
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
    ...((await pagedContents) as Record<string, unknown>),
    ...((await pagedArticleTags) as Record<string, unknown>),
    ...((await subscribedCommunities) as Record<string, unknown>),
  }
}

export const getServerSideProps: GetServerSideProps = async (props) => {
  const { communityPath, thread, threadPath } = ssrParseURL(props.req)

  let resp
  try {
    resp = await fetchData(props)
  } catch (e) {
    const {
      response: { errors },
    } = e
    if (ssrAmbulance.hasLoginError(errors)) {
      resp = await fetchData(props, { realname: false })
    } else {
      return {
        props: {
          errorCode: 404,
          target: communityPath,
          viewing: {
            community: {
              raw: communityPath,
              title: communityPath,
              desc: communityPath,
            },
          },
        },
      }
    }
  }

  const {
    filter,
    sessionState,
    pagedArticleTags,
    community,
    subscribedCommunities,
  } = resp
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
      tagsBar: { tags: pagedArticleTags },
    },
    articleThread,
  )

  return { props: { errorCode: null, ...initProps } }
}

const MiniSize = (props) => {
  const store = useStore(props)

  const { errorCode, viewing } = store
  const { community, activeThread } = viewing

  const seoConfig = {
    url: `${SITE_URL}/${community.raw}/${activeThread}`,
    title: `${community.title} | coderplanets`,
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
        {/* <CommunityContent /> */}
      </GlobalLayout>
    </Provider>
  )
}

export default MiniSize
