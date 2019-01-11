import React from 'react'
import { Provider } from 'mobx-react'
import R from 'ramda'

import { PAGE_SIZE } from '../config'
import initRootStore from '../stores/init'

import {
  ThemeWrapper,
  MultiLanguage,
  Preview,
  Doraemon,
  Route,
  BodyLayout,
  Header,
  ArticleBanner,
  RepoContent,
  Footer,
} from '../containers'
import { GAWraper, ErrorPage } from '../components'

import {
  nilOrEmpty,
  makeGQClient,
  getMainPath,
  getSubPath,
  getThirdPath,
  TYPE,
  ROUTE,
  THREAD,
  BStore,
  ssrAmbulance,
} from '../utils'

import { P } from '../containers/schemas'

// try to fix safari bug
// see https://github.com/yahoo/react-intl/issues/422
global.Intl = require('intl')

async function fetchData(props, opt) {
  const { realname } = R.merge({ realname: true }, opt)

  const token = realname ? BStore.cookie.from_req(props.req, 'jwtToken') : null
  const gqClient = makeGQClient(token)
  const userHasLogin = nilOrEmpty(token) === false

  const id = getThirdPath(props)

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
    const { sessionState, repo, pagedComments, subscribedCommunities } = resp

    if (!R.contains(mainPath, R.pluck('raw', repo.communities))) {
      return { statusCode: 404, target: getSubPath(props) }
    }

    return {
      langSetup: {},
      account: {
        user: sessionState.user || {},
        isValidSession: sessionState.isValid,
        userSubscribedCommunities: subscribedCommunities,
      },
      route: { mainPath, subPath: ROUTE.REPO },
      viewing: {
        repo,
        activeThread: THREAD.REPO,
        community: repo.communities[0],
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

    return (
      <Provider store={this.store}>
        <GAWraper>
          <ThemeWrapper>
            {statusCode ? (
              <ErrorPage errorCode={statusCode} page="post" target={target} />
            ) : (
              <React.Fragment>
                <Route />
                <MultiLanguage>
                  <Preview />
                  <Doraemon />
                  <BodyLayout noSidebar>
                    <Header />
                    <ArticleBanner
                      showStar={false}
                      showWordCount={false}
                      showLastSync
                    />
                    <RepoContent />
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
