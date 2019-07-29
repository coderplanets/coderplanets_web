import React from 'react'
import { Provider } from 'mobx-react'
import R from 'ramda'
import { BlogJsonLd } from 'next-seo'

import { PAGE_SIZE, SITE_URL } from '@config'
import { TYPE, ROUTE, THREAD } from '@constant'
import {
  getJwtToken,
  nilOrEmpty,
  makeGQClient,
  parseURL,
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
import PostContent from '@containers/PostContent'
import Footer from '@containers/Footer'
import ErrorBox from '@containers/ErrorBox'

import ErrorPage from '@components/ErrorPage'
import { P } from '@schemas'

// try to fix safari bug
// see https://github.com/yahoo/react-intl/issues/422
global.Intl = require('intl')

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

    return (
      <Provider store={this.store}>
        <AnalysisService>
          <ThemeWrapper>
            {statusCode ? (
              <ErrorPage errorCode={statusCode} page="post" target={target} />
            ) : (
              <React.Fragment>
                <BlogJsonLd
                  url={`${SITE_URL}/${mainPath}/post/${post.id}`}
                  title={`${post.title}`}
                  datePublished={`${post.insertedAt}`}
                  dateModified={`${post.updatedAt}`}
                  authorName={`${post.author.nickname}`}
                  description={`${post.title}`}
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
                    <PostContent />
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
