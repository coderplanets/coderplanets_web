import React from 'react'
import { Provider } from 'mobx-react'
import R from 'ramda'

import { PAGE_SIZE } from 'config'
import initRootStore from 'stores/init'

import ThemeWrapper from 'containers/ThemeWrapper'
import MultiLanguage from 'containers/MultiLanguage'
import Sidebar from 'containers/Sidebar'
import Preview from 'containers/Preview'
import Doraemon from 'containers/Doraemon'
import Route from 'containers/Route'
import BodyLayout from 'containers/BodyLayout'
import Header from 'containers/Header'
import CommunityBanner from 'containers/CommunityBanner'
import CommunityContent from 'containers/CommunityContent'
import Footer from 'containers/Footer'
import ErrorBox from 'containers/ErrorBox'

import GAWraper from 'components/GAWraper'
import ErrorPage from 'components/ErrorPage'

import {
  makeGQClient,
  queryStringToJSON,
  getMainPath,
  getSubPath,
  extractThreadFromPath,
  makeDebugger,
  BStore,
  nilOrEmpty,
  ssrPagedSchema,
  ssrPagedFilter,
  ssrContentsThread,
  addTopicIfNeed,
  ssrAmbulance,
  validCommunityFilters,
} from 'utils'

import { P } from 'containers/schemas'

/* eslint-disable-next-line */
const debug = makeDebugger('page:community')

// try to fix safari bug
// see https://github.com/yahoo/react-intl/issues/422
global.Intl = require('intl')

async function fetchData(props, opt) {
  const { realname } = R.merge({ realname: true }, opt)

  const token = realname ? BStore.cookie.from_req(props.req, 'jwtToken') : null
  const gqClient = makeGQClient(token)
  const userHasLogin = nilOrEmpty(token) === false

  const { asPath } = props
  // schema

  // utils: filter, tags staff
  const community = getMainPath(props)
  const topic = getSubPath(props)
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

export default class PageCommunity extends React.Component {
  static async getInitialProps(props) {
    const subPath = getSubPath(props)
    const thread = extractThreadFromPath(props)

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
        route: { mainPath: community.raw, subPath },
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

    return (
      <Provider store={this.store}>
        <GAWraper>
          <ThemeWrapper>
            {statusCode ? (
              <ErrorPage
                errorCode={statusCode}
                page="community"
                target={target}
              />
            ) : (
              <React.Fragment>
                <Route />
                <MultiLanguage>
                  <Sidebar />
                  <Preview />
                  <Doraemon />
                  <ErrorBox />
                  <BodyLayout>
                    <Header />
                    <CommunityBanner />
                    <CommunityContent />
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
