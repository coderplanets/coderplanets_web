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
  // schema
  const postId = getSubPath(props)

  // query data
  const post = request(P.post, { id: postId })

  return { ...(await post) }
}

export default class Index extends React.Component {
  static async getInitialProps(props) {
    const { req, asPath } = props
    const isServer = !!req
    if (!isServer) return {}

    console.log('SSR (post--) queryStringToJSON: ', queryStringToJSON(asPath))
    /* console.log('SSR extractThreadFromPath -> ', extractThreadFromPath(props)) */
    const { post } = await fetchData(props)
    /* const postId = getSubPath(props) */
    /* console.log('getSubPath --> thread: ', thread) */

    return {
      langSetup: {},
      route: { mainPath: ROUTE.POST, subPath: post.id },
      viewing: { post, activeThread: THREAD.POST },
      /* curPost: { post }, */
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
