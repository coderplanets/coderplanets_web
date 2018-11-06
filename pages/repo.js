import React from 'react'
import { Provider } from 'mobx-react'

import initRootStore from '../stores/init'
import { GAWraper } from '../components'

import {
  makeGQClient,
  queryStringToJSON,
  getSubPath,
  ROUTE,
  THREAD,
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
  const { request } = makeGQClient()
  const repoId = getSubPath(props)

  const repo = request(P.repo, { id: repoId })

  return { ...(await repo) }
}

export default class Index extends React.Component {
  static async getInitialProps(props) {
    const { req, asPath } = props
    const isServer = !!req
    if (!isServer) return {}

    console.log('SSR (repo--) queryStringToJSON: ', queryStringToJSON(asPath))
    /* console.log('SSR extractThreadFromPath -> ', extractThreadFromPath(props)) */
    const { repo } = await fetchData(props)
    /* const repoId = getSubPath(props) */
    /* console.log('getSubPath --> thread: ', thread) */

    return {
      langSetup: {},
      route: { mainPath: ROUTE.REPO, subPath: repo.id },
      viewing: { repo, activeThread: THREAD.REPO },
    }
  }

  constructor(props) {
    super(props)
    this.store = initRootStore({ ...props })
  }

  render() {
    return (
      <Provider store={this.store}>
        <GAWraper>
          <ThemeWrapper>
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
          </ThemeWrapper>
        </GAWraper>
      </Provider>
    )
  }
}
