import React from 'react'
import { Provider } from 'mobx-react'
import { toUpper } from 'ramda'

import { PAGE_SIZE, SITE_URL } from '@/config'
import { TYPE, ROUTE, THREAD } from '@/constant'
import {
  getJwtToken,
  nilOrEmpty,
  makeGQClient,
  ssrParseURL,
  ssrAmbulance,
  parseTheme,
} from '@/utils'
import { useStore } from '@/stores/init'

import GlobalLayout from '@/containers/GlobalLayout'
import ArticleBanner from '@/containers/banner/ArticleBanner'
import VideoContent from '@/containers/content/VideoContent'

import { P } from '@/schemas'

export const fetchData = async (props) => {
  const token = getJwtToken(props)
  const gqClient = makeGQClient(token)
  const userHasLogin = nilOrEmpty(token) === false

  const { thirdPath: id } = ssrParseURL(props.req)
  // query data
  const sessionState = gqClient.request(P.sessionState)
  const video = gqClient.request(P.video, { id })
  const pagedComments = gqClient.request(P.pagedComments, {
    id,
    userHasLogin,
    thread: toUpper(THREAD.VIDEO),
    filter: { page: 1, size: PAGE_SIZE.D, sort: TYPE.ASC_INSERTED },
  })
  const subscribedCommunities = gqClient.request(P.subscribedCommunities, {
    filter: {
      page: 1,
      size: 30,
    },
  })

  return {
    ...(await sessionState),
    ...(await video),
    ...(await pagedComments),
    ...(await subscribedCommunities),
  }
}

export const getServerSideProps = async (props) => {
  const { mainPath } = ssrParseURL(props.req)

  let resp
  try {
    resp = await fetchData(props)
  } catch ({ response: { errors } }) {
    if (ssrAmbulance.hasLoginError(errors)) {
      resp = await fetchData(props, { realname: false })
    } else {
      return { props: { errorCode: 404 } }
    }
  }

  const { sessionState, video, pagedComments, subscribedCommunities } = resp

  const { origialCommunity: community, ...viewingContent } = video
  const initProps = {
    theme: {
      curTheme: parseTheme(sessionState),
    },
    account: {
      user: sessionState.user || {},
      isValidSession: sessionState.isValid,
      userSubscribedCommunities: subscribedCommunities,
    },
    route: { mainPath, subPath: ROUTE.VIDEO },
    viewing: {
      video: viewingContent,
      activeThread: THREAD.VIDEO,
      community,
    },
    comments: { pagedComments },
  }

  return { props: { errorCode: null, ...initProps } }
}

const VideoPage = (props) => {
  const store = useStore(props)

  const { errorCode, viewing, route } = props
  const { video } = viewing
  const { mainPath } = route

  const seoConfig = {
    url: `${SITE_URL}/${mainPath}/video/${video.id}`,
    title: `${video.title}`,
    datePublished: `${video.insertedAt}`,
    dateModified: `${video.updatedAt}`,
    authorName: `${video.author.nickname}`,
    description: `${video.title}`,
    images: [],
  }

  return (
    <Provider store={store}>
      <GlobalLayout
        page={ROUTE.VIDEO}
        metric="article"
        seoConfig={seoConfig}
        errorCode={errorCode}
        errorPath={`/${mainPath}/video/${video.id}`}
        noSidebar
      >
        <ArticleBanner showStar={false} />
        <VideoContent />
      </GlobalLayout>
    </Provider>
  )
}

export default VideoPage
