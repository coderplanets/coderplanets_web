import React from 'react'
import { Provider } from 'mobx-react'
import R from 'ramda'

import { SITE_URL } from '@config'
import { ROUTE } from '@constant'

import {
  getJwtToken,
  makeGQClient,
  parseURL,
  ssrAmbulance,
  parseTheme,
} from '@utils'
import initRootStore from '@stores/init'

import GlobalLayout from '@containers/GlobalLayout'
import HaveADrinkContent from '@containers/content/HaveADrinkContent'

import { P } from '@schemas'

// try to fix safari bug
// see https://github.com/yahoo/react-intl/issues/422
global.Intl = require('intl')

async function fetchData(props, opt) {
  const { realname } = R.merge({ realname: true }, opt)

  const token = realname ? getJwtToken(props) : null
  const gqClient = makeGQClient(token)

  // query data
  const sessionState = gqClient.request(P.sessionState)
  const subscribedCommunities = gqClient.request(P.subscribedCommunities, {
    filter: {
      page: 1,
      size: 30,
    },
  })

  return {
    ...(await sessionState),
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

    const { sessionState, subscribedCommunities } = resp

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
      route: { mainPath, subPath: ROUTE.HAVE_A_DRINK },
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

    const seoConfig = {
      url: `${SITE_URL}/${ROUTE.HAVE_A_DRINK}`,
      title: 'coderplanets 社区',
      description: '最性感的开发者社区',
    }

    return (
      <Provider store={this.store}>
        <GlobalLayout
          noSidebar
          metric="article"
          page={ROUTE.HAVE_A_DRINK}
          seoConfig={seoConfig}
          errorCode={statusCode}
          errorPath={target}
        >
          <HaveADrinkContent />
        </GlobalLayout>
      </Provider>
    )
  }
}
