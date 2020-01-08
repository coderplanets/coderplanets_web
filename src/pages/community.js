import React from 'react'
import { Provider } from 'mobx-react'
import R from 'ramda'
import { NextSeo } from 'next-seo'

import { PAGE_SIZE, SITE_URL } from '@config'
import initRootStore from '@stores/init'

import {
  isServerSide,
  getJwtToken,
  makeGQClient,
  queryStringToJSON,
  parseURL,
  akaTranslate,
  extractThreadFromPath,
  buildLog,
  nilOrEmpty,
  ssrPagedSchema,
  ssrPagedFilter,
  ssrContentsThread,
  addTopicIfNeed,
  ssrAmbulance,
  validCommunityFilters,
  parseTheme,
} from '@utils'

import AnalysisService from '@services/Analysis'
import GlobalLayout from '@containers/GlobalLayout'
import ThemeWrapper from '@containers/ThemeWrapper'
import MultiLanguage from '@containers/MultiLanguage'
import Sidebar from '@containers/Sidebar'
import Preview from '@containers/Preview'
import Doraemon from '@containers/Doraemon'
import Route from '@containers/Route'
import Header from '@containers/Header'
import CommunityBanner from '@containers/CommunityBanner'
import CommunityContent from '@containers/CommunityContent'
import Footer from '@containers/Footer'
import ErrorBox from '@containers/ErrorBox'
import ErrorPage from '@components/ErrorPage'

import { P } from '@schemas'

/* eslint-disable-next-line */
const log = buildLog('page:community')

// try to fix safari bug
// see https://github.com/yahoo/react-intl/issues/422
global.Intl = require('intl')

async function fetchData(props, opt) {
  const { realname } = R.merge({ realname: true }, opt)

  const token = realname ? getJwtToken(props) : null
  const gqClient = makeGQClient(token)
  const userHasLogin = nilOrEmpty(token) === false

  const { asPath } = props
  // schema

  const { communityPath, threadPath: topic } = parseURL(props)
  const community = akaTranslate(communityPath)
  const thread = extractThreadFromPath(props)

  let filter = addTopicIfNeed(
    {
      ...queryStringToJSON(asPath, { pagi: 'number' }),
      community,
    },
    thread,
    topic
  )

  filter = R.pick(validCommunityFilters, filter)

  // query data
  const sessionState = gqClient.request(P.sessionState)
  const curCommunity = gqClient.request(P.community, {
    raw: community,
    userHasLogin,
  })
  const pagedContents = gqClient.request(
    ssrPagedSchema(thread),
    ssrPagedFilter(community, thread, filter, userHasLogin)
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

export default class CommunityPage extends React.Component {
  static async getInitialProps(props) {
    if (!isServerSide) return {}

    const { communityPath, threadPath } = parseURL(props)
    const thread = extractThreadFromPath(props)

    let resp
    try {
      resp = await fetchData(props)
    } catch ({ response: { errors } }) {
      if (ssrAmbulance.hasLoginError(errors)) {
        resp = await fetchData(props, { realname: false })
      } else {
        return {
          statusCode: 404,
          target: communityPath,
          viewing: { community: {} },
          route: {},
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

    // init state on server side
    return R.merge(
      {
        langSetup: {},
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
          activeThread: R.toLower(thread),
          post: {},
          job: {},
          video: {},
          repo: {},
          user: {},
        },
        route: {
          communityPath: community.raw,
          mainPath: community.raw,
          threadPath,
          subPath: threadPath,
        },
        tagsBar: { tags: partialTags },
      },
      contentsThread
    )
  }

  constructor(props) {
    super(props)
    const store = props.statusCode
      ? initRootStore({ langSetup: {} })
      : initRootStore({ ...props })

    this.store = store
    // this.store = initRootStore({ ...props })
  }

  render() {
    const { statusCode, target } = this.props
    const {
      viewing: { community },
      route,
    } = this.props
    const { communityPath, threadPath } = route

    const seoTitle =
      community.raw === 'home'
        ? 'coderplanets 社区'
        : `coderplanets ${community.raw}社区`

    return (
      <Provider store={this.store}>
        <AnalysisService>
          <ThemeWrapper>
            {statusCode ? (
              <ErrorPage
                errorCode={statusCode}
                page="community"
                target={target}
              />
            ) : (
              <React.Fragment>
                <NextSeo
                  config={{
                    url: `${SITE_URL}/${communityPath}/${threadPath}`,
                    title: seoTitle,
                    description: `${community.desc}`,
                  }}
                />
                <Route />
                <MultiLanguage>
                  <Sidebar />
                  <Preview />
                  <Doraemon />
                  <ErrorBox />
                  <GlobalLayout>
                    <Header />
                    <CommunityBanner />
                    <CommunityContent />
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
