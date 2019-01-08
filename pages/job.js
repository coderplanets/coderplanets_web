import React from 'react'
import { Provider } from 'mobx-react'
import R from 'ramda'

import { PAGE_SIZE } from '../config'

import initRootStore from '../stores/init'
import { GAWraper, ErrorPage } from '../components'

import {
  makeGQClient,
  getSubPath,
  ROUTE,
  THREAD,
  TYPE,
  BStore,
  nilOrEmpty,
  ssrAmbulance,
} from '../utils'

import {
  ThemeWrapper,
  MultiLanguage,
  Sidebar,
  Preview,
  Doraemon,
  Route,
  BodyLayout,
  Header,
  Banner,
  Content,
  Footer,
} from '../containers'

import { P } from '../containers/schemas'

// try to fix safari bug
// see https://github.com/yahoo/react-intl/issues/422
global.Intl = require('intl')

async function fetchData(props) {
  const token = BStore.cookie.from_req(props.req, 'jwtToken')
  const gqClient = makeGQClient(token)
  const userHasLogin = nilOrEmpty(token) === false

  // schema
  const jobId = getSubPath(props)

  // query data
  const sessionState = gqClient.request(P.sessionState)
  const job = gqClient.request(P.job, { id: jobId })
  const pagedComments = gqClient.request(P.pagedComments, {
    id: jobId,
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

    const { sessionState, pagedComments, subscribedCommunities, job } = resp

    return {
      langSetup: {},
      account: {
        user: sessionState.user || {},
        isValidSession: sessionState.isValid,
        userSubscribedCommunities: subscribedCommunities,
      },
      route: { mainPath: ROUTE.JOB, subPath: job.id },
      viewing: { job, activeThread: THREAD.JOB },
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
              <ErrorPage errorCode={statusCode} page="job" target={target} />
            ) : (
              <React.Fragment>
                <Route />
                <MultiLanguage>
                  <Sidebar />
                  <Preview />
                  <Doraemon />
                  <BodyLayout>
                    <Header />
                    <Banner />
                    <Content />
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
