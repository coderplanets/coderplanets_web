import React from 'react'
import { Provider } from 'mobx-react'
import R from 'ramda'
import { BlogJsonLd } from 'next-seo'

import { PAGE_SIZE, SITE_URL } from '@config'
import { TYPE, ROUTE, THREAD } from '@constant'
import {
  getJwtToken,
  makeGQClient,
  parseURL,
  nilOrEmpty,
  ssrAmbulance,
  parseTheme,
} from '@utils'
import initRootStore from '@stores/init'

import AnalysisService from '@services/Analysis'

import GlobalLayout from '@containers/GlobalLayout'
import ThemeWrapper from '@containers/ThemeWrapper'
import MultiLanguage from '@containers/MultiLanguage'
import Preview from '@containers/Preview'
import Doraemon from '@containers/Doraemon'
import Route from '@containers/Route'
import Header from '@containers/Header'
import ArticleBanner from '@containers/ArticleBanner'
import JobContent from '@containers/JobContent'
import Footer from '@containers/Footer'
import ErrorBox from '@containers/ErrorBox'

import { P } from '@schemas'
import ErrorPage from '@components/ErrorPage'

// import { AnalysisService, ErrorPage } from '@components'
// try to fix safari bug
// see https://github.com/yahoo/react-intl/issues/422
global.Intl = require('intl')

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

    return (
      <Provider store={this.store}>
        <AnalysisService>
          <ThemeWrapper>
            {statusCode ? (
              <ErrorPage errorCode={statusCode} page="job" target={target} />
            ) : (
              <React.Fragment>
                <BlogJsonLd
                  url={`${SITE_URL}/${mainPath}/job/${job.id}`}
                  title={`${job.title}`}
                  datePublished={`${job.insertedAt}`}
                  dateModified={`${job.updatedAt}`}
                  authorName={`${job.author.nickname}`}
                  description={`${job.title}`}
                  images={[]}
                />
                <Route />
                <MultiLanguage>
                  <Preview />
                  <Doraemon />
                  <ErrorBox />
                  <GlobalLayout noSidebar>
                    <Header metric="article" />
                    <ArticleBanner showStar={false} />
                    <JobContent />
                    <Footer />
                  </GlobalLayout>
                </MultiLanguage>
              </React.Fragment>
            )}
          </ThemeWrapper>
        </AnalysisService>
      </Provider>
    )
  }
}
