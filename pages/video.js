import React from 'react'
import { Provider } from 'mobx-react'
import R from 'ramda'
import { BlogJsonLd } from 'next-seo'

import { PAGE_SIZE, SITE_URL } from '@config'
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
import VideoContent from '@containers/VideoContent'
import Footer from '@containers/Footer'
import ErrorBox from '@containers/ErrorBox'

import ErrorPage from '@components/ErrorPage'

import {
  getJwtToken,
  nilOrEmpty,
  makeGQClient,
  getMainPath,
  getSubPath,
  getThirdPath,
  TYPE,
  ROUTE,
  THREAD,
  ssrAmbulance,
  parseTheme,
} from '@utils'

import { P } from '@schemas'

// try to fix safari bug
// see https://github.com/yahoo/react-intl/issues/422
global.Intl = require('intl')

async function fetchData(props) {
  const token = getJwtToken(props)
  const gqClient = makeGQClient(token)
  const userHasLogin = nilOrEmpty(token) === false

  const id = getThirdPath(props)

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
    const { sessionState, video, pagedComments, subscribedCommunities } = resp

    if (!R.contains(mainPath, R.pluck('raw', video.communities))) {
      return { statusCode: 404, target: getSubPath(props) }
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
      route: { mainPath, subPath: ROUTE.VIDEO },
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
      ? initRootStore({ langSetup: {} })
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

    return (
      <Provider store={this.store}>
        <AnalysisService>
          <ThemeWrapper>
            {statusCode ? (
              <ErrorPage errorCode={statusCode} page="video" target={target} />
            ) : (
              <React.Fragment>
                <BlogJsonLd
                  url={`${SITE_URL}/${mainPath}/video/${video.id}`}
                  title={`${video.title}`}
                  datePublished={`${video.insertedAt}`}
                  dateModified={`${video.updatedAt}`}
                  authorName={`${video.author.nickname}`}
                  description={`${video.desc}`}
                  images={[]}
                />
                <Route />
                <MultiLanguage>
                  <Preview />
                  <Doraemon />
                  <ErrorBox />
                  <GlobalLayout noSidebar>
                    <Header />
                    <ArticleBanner />
                    <VideoContent />
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
