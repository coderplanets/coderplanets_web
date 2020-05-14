import React from 'react'
import { Provider } from 'mobx-react'
import R from 'ramda'

import { PAGE_SIZE, SITE_URL } from '@/config'
import { TYPE, ROUTE, THREAD } from '@/constant'
import {
  getJwtToken,
  makeGQClient,
  parseURL,
  nilOrEmpty,
  ssrAmbulance,
  parseTheme,
} from '@/utils'
import initRootStore from '@/stores/init'

import GlobalLayout from '@/containers/GlobalLayout'
import ArticleBanner from '@/containers/banner/ArticleBanner'
import JobContent from '@/containers/content/JobContent'

import { P } from '@/schemas'

async function fetchData(props) {
  const token = getJwtToken(props)
  const gqClient = makeGQClient(token)
  const userHasLogin = nilOrEmpty(token) === false

  // schema
  const { thridPath: id } = parseURL(props)

  // query data
  const sessionState = gqClient.request(P.sessionState)
  const job = gqClient.request(P.job, { id, userHasLogin })
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
    ...(await job),
    ...(await pagedComments),
    ...(await subscribedCommunities),
  }
}

export default class JobPage extends React.Component {
  static async getInitialProps(props) {
    let resp
    const { communityPath, threadPath } = parseURL(props)

    try {
      resp = await fetchData(props)
    } catch ({ response: { errors } }) {
      if (ssrAmbulance.hasLoginError(errors)) {
        resp = await fetchData(props, { realname: false })
      } else {
        return { statusCode: 404, target: threadPath }
      }
    }

    const { sessionState, pagedComments, subscribedCommunities, job } = resp

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
      route: {
        communityPath,
        mainPath: communityPath,
        threadPath: ROUTE.JOB,
        subPath: ROUTE.JOB,
      },
      viewing: {
        job,
        activeThread: THREAD.JOB,
        community: job.origialCommunity,
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
      viewing: { job },
      route,
    } = this.props
    const { mainPath } = route

    const seoConfig = {
      url: `${SITE_URL}/${mainPath}/job/${job.id}`,
      title: `${job.title}`,
      datePublished: `${job.insertedAt}`,
      dateModified: `${job.updatedAt}`,
      authorName: `${job.author.nickname}`,
      description: `${job.title}`,
      images: [],
    }

    return (
      <Provider store={this.store}>
        <GlobalLayout
          page="job"
          metric="article"
          seoConfig={seoConfig}
          errorCode={statusCode}
          errorPath={target}
          noSidebar
        >
          <ArticleBanner showStar={false} />
          <JobContent />
        </GlobalLayout>
      </Provider>
    )
  }
}
