import React from 'react'
import { Provider } from 'mobx-react'
import R from 'ramda'
import { BlogJsonLd } from 'next-seo'

import { PAGE_SIZE, SITE_URL } from 'config'

import ThemeWrapper from 'containers/ThemeWrapper'
import MultiLanguage from 'containers/MultiLanguage'
import Preview from 'containers/Preview'
import Doraemon from 'containers/Doraemon'
import Route from 'containers/Route'
import BodyLayout from 'containers/BodyLayout'
import Header from 'containers/Header'
import ArticleBanner from 'containers/ArticleBanner'
import JobContent from 'containers/JobContent'
import Footer from 'containers/Footer'
import ErrorBox from 'containers/ErrorBox'

import { P } from 'schemas'
import GAWraper from 'components/GAWraper'
import ErrorPage from 'components/ErrorPage'

// import { GAWraper, ErrorPage } from 'components'

import {
  makeGQClient,
  getMainPath,
  getSubPath,
  getThirdPath,
  ROUTE,
  THREAD,
  TYPE,
  BStore,
  nilOrEmpty,
  ssrAmbulance,
  parseTheme,
} from 'utils'

import initRootStore from 'stores/init'

// try to fix safari bug
// see https://github.com/yahoo/react-intl/issues/422
global.Intl = require('intl')

async function fetchData(props) {
  const token = BStore.cookie.from_req(props.req, 'jwtToken')
  const gqClient = makeGQClient(token)
  const userHasLogin = nilOrEmpty(token) === false

  // schema
  const id = getThirdPath(props)

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

export default class Index extends React.Component {
  static async getInitialProps(props) {
    let resp
    try {
      resp = await fetchData(props)
    } catch ({ response: { errors } }) {
      if (ssrAmbulance.hasLoginError(errors)) {
        resp = await fetchData(props, { realname: false })
      } else {
        return { statusCode: 404, target: getSubPath(props) }
      }
    }

    const mainPath = getMainPath(props)
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
      route: { mainPath, subPath: ROUTE.JOB },
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
        <GAWraper>
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
                  <BodyLayout noSidebar>
                    <Header />
                    <ArticleBanner showStar={false} />
                    <JobContent />
                    <Footer />
                  </BodyLayout>
                </MultiLanguage>
              </React.Fragment>
            )}
          </ThemeWrapper>
        </GAWraper>
      </Provider>
    )
  }
}
