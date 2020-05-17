import React from 'react'
import { Provider } from 'mobx-react'
import R from 'ramda'

import { PAGE_SIZE, SITE_URL } from '@/config'
import { TYPE, ROUTE, THREAD } from '@/constant'
import {
  getJwtToken,
  nilOrEmpty,
  makeGQClient,
  parseURL,
  ssrAmbulance,
  parseTheme,
} from '@/utils'
import initRootStore from '@/stores/init'

import GlobalLayout from '@/containers/GlobalLayout'
import ArticleBanner from '@/containers/banner/ArticleBanner'
import VideoContent from '@/containers/content/VideoContent'

import { P } from '@/schemas'

async function fetchData(props) {
  const token = getJwtToken(props)
  const gqClient = makeGQClient(token)
  const userHasLogin = nilOrEmpty(token) === false

  const { thridPath: id } = parseURL(props)

  // query data
  const sessionState = gqClient.request(P.sessionState)
  const video = gqClient.request(P.video, { id })
  const pagedComments = gqClient.request(P.pagedComments, {
    id,
    userHasLogin,
    thread: R.toUpper(THREAD.JOB),
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

export default class VideoPage extends React.Component {
  static async getInitialProps(props) {
    const { communityPath, subPath } = parseURL(props)
    let resp
    try {
      resp = await fetchData(props)
    } catch ({ response: { errors } }) {
      if (ssrAmbulance.hasLoginError(errors)) {
        resp = await fetchData(props, { realname: false })
      } else {
        return { statusCode: 404, target: subPath }
      }
    }

    const { sessionState, video, pagedComments, subscribedCommunities } = resp

    if (!R.contains(communityPath, R.pluck('raw', video.communities))) {
      return { statusCode: 404, target: subPath }
    }

    return {
      theme: {
        curTheme: parseTheme(sessionState),
      },
      account: {
        user: sessionState.user || {},
        isValidSession: sessionState.isValid,
        userSubscribedCommunities: subscribedCommunities,
      },
      route: { communityPath, mainPath: communityPath, subPath: ROUTE.VIDEO },
      viewing: {
        video,
        activeThread: THREAD.VIDEO,
        community: video.origialCommunity,
      },
      comments: { pagedComments },
    }
  }

  constructor(props) {
    super(props)
    const store = props.statusCode
      ? initRootStore()
      : initRootStore({ ...props })

    this.store = store
  }

  render() {
    const { statusCode, target } = this.props
    const {
      viewing: { video },
      route,
    } = this.props
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
      <Provider store={this.store}>
        <GlobalLayout
          page="video"
          metric="article"
          seoConfig={seoConfig}
          errorCode={statusCode}
          errorPath={target}
          noSidebar
        >
          <ArticleBanner showStar={false} />
          <VideoContent />
        </GlobalLayout>
      </Provider>
    )
  }
}
