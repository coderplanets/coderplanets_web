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
import RepoContent from '@/containers/content/RepoContent'

import { P } from '@/schemas'

async function fetchData(props, opt) {
  const { realname } = R.merge({ realname: true }, opt)

  const token = realname ? getJwtToken(props) : null
  const gqClient = makeGQClient(token)
  const userHasLogin = nilOrEmpty(token) === false

  const { thridPath: id } = parseURL(props)

  const sessionState = gqClient.request(P.sessionState)
  const repo = gqClient.request(P.repo, { id })
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

  return {
    ...(await sessionState),
    ...(await repo),
    ...(await pagedComments),
    ...(await subscribedCommunities),
  }
}

export default class RepoPage extends React.Component {
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

    const { sessionState, repo, pagedComments, subscribedCommunities } = resp

    if (!R.contains(mainPath, R.pluck('raw', repo.communities))) {
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
      route: { mainPath, subPath: ROUTE.REPO },
      viewing: {
        repo,
        activeThread: THREAD.REPO,
        community: repo.origialCommunity,
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
      viewing: { repo },
      route,
    } = this.props
    const { mainPath } = route

    const seoConfig = {
      url: `${SITE_URL}/${mainPath}/repo/${repo.id}`,
      title: `${repo.title}`,
      datePublished: `${repo.insertedAt}`,
      dateModified: `${repo.updatedAt}`,
      authorName: `${repo.author.nickname}`,
      description: `${repo.title}`,
      images: [],
    }

    return (
      <Provider store={this.store}>
        <GlobalLayout
          page="repo"
          metric="article"
          seoConfig={seoConfig}
          errorCode={statusCode}
          errorPath={target}
          noSidebar
        >
          <ArticleBanner showStar={false} showWordCount={false} showLastSync />
          <RepoContent />
        </GlobalLayout>
      </Provider>
    )
  }
}
