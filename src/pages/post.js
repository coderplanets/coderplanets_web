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
import PostContent from '@/containers/content/PostContent'

import { P } from '@/schemas'

async function fetchData(props, opt) {
  const { realname } = R.merge({ realname: true }, opt)

  const token = realname ? getJwtToken(props) : null
  const gqClient = makeGQClient(token)
  const userHasLogin = nilOrEmpty(token) === false

  // schema
  const { thridPath: id } = parseURL(props)

  // query data
  const sessionState = gqClient.request(P.sessionState)
  const post = gqClient.request(P.post, { id, userHasLogin })
  const pagedComments = gqClient.request(P.pagedComments, {
    id,
    userHasLogin,
    thread: R.toUpper(THREAD.POST),
    filter: { page: 1, size: PAGE_SIZE.D, sort: TYPE.ASC_INSERTED },
  })
  const subscribedCommunities = gqClient.request(P.subscribedCommunities, {
    filter: {
      page: 1,
      size: 30,
    },
  })

  // TODO: comments
  return {
    ...(await sessionState),
    ...(await post),
    ...(await pagedComments),
    ...(await subscribedCommunities),
  }
}

export default class PostPage extends React.Component {
  static async getInitialProps(props) {
    const { mainPath, subPath } = parseURL(props)
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

    const { sessionState, post, pagedComments, subscribedCommunities } = resp

    if (!R.contains(mainPath, R.pluck('raw', post.communities))) {
      return { statusCode: 404, target: subPath }
    }

    return {
      langSetup: {},
      theme: {
        curTheme: parseTheme(sessionState),
      },
      account: {
        user: sessionState.user || {},
        isValidSession: sessionState.isValid,
        userSubscribedCommunities: subscribedCommunities,
      },
      route: { mainPath, subPath: ROUTE.POST },
      viewing: {
        post,
        activeThread: THREAD.POST,
        community: post.origialCommunity,
      },
      comments: { pagedComments },
    }
  }

  constructor(props) {
    super(props)
    const store = props.statusCode
      ? initRootStore({ langSetup: {} })
      : initRootStore({ ...props })

    this.store = store
  }

  render() {
    const { statusCode, target } = this.props
    const {
      viewing: { post },
      route,
    } = this.props
    const { mainPath } = route

    const seoConfig = {
      url: `${SITE_URL}/${mainPath}/post/${post.id}`,
      title: `${post.title}`,
      datePublished: `${post.insertedAt}`,
      dateModified: `${post.updatedAt}`,
      authorName: `${post.author.nickname}`,
      description: `${post.title}`,
      images: [],
    }

    return (
      <Provider store={this.store}>
        <GlobalLayout
          page="post"
          metric="article"
          seoConfig={seoConfig}
          errorCode={statusCode}
          errorPath={target}
          noSidebar
        >
          <ArticleBanner />
          <PostContent />
        </GlobalLayout>
      </Provider>
    )
  }
}
