import React from 'react'
import { Provider } from 'mobx-react'
import { merge, pick, toLower } from 'ramda'

import { PAGE_SIZE, SITE_URL } from '@/config'
import { ROUTE } from '@/constant'
import { useStore } from '@/stores/init'

import {
  getJwtToken,
  makeGQClient,
  queryStringToJSON,
  ssrParseURL,
  akaTranslate,
  buildLog,
  nilOrEmpty,
  ssrPagedSchema,
  ssrPagedFilter,
  ssrContentsThread,
  addTopicIfNeed,
  ssrAmbulance,
  validCommunityFilters,
  parseTheme,
} from '@/utils'

import GlobalLayout from '@/containers/GlobalLayout'
import CommunityBanner from '@/containers/banner/CommunityBanner'
import CommunityContent from '@/containers/content/CommunityContent'

import { P } from '@/schemas'

/* eslint-disable-next-line */
const log = buildLog('page:community')

const fetchData = async (props, opt) => {
  const { realname } = merge({ realname: true }, opt)

  const token = realname ? getJwtToken(props) : null
  const gqClient = makeGQClient(token)
  const userHasLogin = nilOrEmpty(token) === false

  // const { asPath } = props
  // schema

  const { communityPath, threadPath: topic, thread } = ssrParseURL(props.req)
  const community = akaTranslate(communityPath)

  let filter = addTopicIfNeed(
    {
      ...queryStringToJSON(props.req.url, { pagi: 'number' }),
      community,
    },
    thread,
    topic,
  )

  filter = pick(validCommunityFilters, filter)

  // query data
  const sessionState = gqClient.request(P.sessionState)
  const curCommunity = gqClient.request(P.community, {
    raw: community,
    userHasLogin,
  })
  const pagedContents = gqClient.request(
    ssrPagedSchema(thread),
    ssrPagedFilter(community, thread, filter, userHasLogin),
  )

  const partialTags = gqClient.request(P.partialTags, { thread, community })
  const subscribedCommunities = gqClient.request(P.subscribedCommunities, {
    filter: {
      page: 1,
      size: PAGE_SIZE.M,
    },
  })

  return {
    filter,
    ...(await sessionState),
    ...(await curCommunity),
    ...(await pagedContents),
    ...(await partialTags),
    ...(await subscribedCommunities),
  }
}

export const getServerSideProps = async (props) => {
  const { communityPath, thread } = ssrParseURL(props.req)

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
    partialTags,
    community,
    subscribedCommunities,
  } = resp
  const contentsThread = ssrContentsThread(resp, thread, filter)

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
      viewing: {
        community,
        activeThread: toLower(thread),
      },
      tagsBar: { tags: partialTags },
    },
    contentsThread,
  )

  return { props: { errorCode: null, ...initProps } }
}

const CommunityPage = (props) => {
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
        page={ROUTE.COMMUNITY}
        seoConfig={seoConfig}
        errorCode={errorCode}
        errorPath={community.raw}
      >
        <CommunityBanner />
        <CommunityContent />
      </GlobalLayout>
    </Provider>
  )
}

export default CommunityPage
