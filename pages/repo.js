import React from 'react'
import { Provider } from 'mobx-react'

import initRootStore from '../stores/init'
import { GAWraper, ErrorPage } from '../components'

import {
  makeGQClient,
  getSubPath,
  getThirdPath,
  ROUTE,
  THREAD,
  BStore,
  ssrAmbulance,
} from '../utils'

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

import { P } from '../containers/schemas'

// try to fix safari bug
// see https://github.com/yahoo/react-intl/issues/422
global.Intl = require('intl')

async function fetchData(props) {
  const token = BStore.cookie.from_req(props.req, 'jwtToken')
  const gqClient = makeGQClient(token)

  const id = getThirdPath(props)

  const sessionState = gqClient.request(P.sessionState)
  const repo = gqClient.request(P.repo, { id })
  const subscribedCommunities = gqClient.request(P.subscribedCommunities, {
    filter: {
      page: 1,
      size: 30,
    },
  })

  return {
    ...(await sessionState),
    ...(await repo),
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

    const { sessionState, repo, subscribedCommunities } = resp

    return {
      langSetup: {},
      account: {
        user: sessionState.user || {},
        isValidSession: sessionState.isValid,
        userSubscribedCommunities: subscribedCommunities,
      },
      route: { mainPath: ROUTE.REPO, subPath: repo.id },
      viewing: {
        repo,
        activeThread: THREAD.REPO,
        community: repo.communities[0],
      },
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
