import React from 'react'
import { Provider } from 'mobx-react'
import R from 'ramda'

import { SITE_URL } from '@/config'
import { ROUTE } from '@/constant'

import {
  getJwtToken,
  makeGQClient,
  parseURL,
  ssrAmbulance,
  parseTheme,
} from '@/utils'
import initRootStore from '@/stores/init'

import GlobalLayout from '@/containers/GlobalLayout'
import CoolGuideContent from '@/containers/content/CoolGuideContent'

import { P } from '@/schemas'

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

export default class CoolGuidePage extends React.Component {
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
      theme: {
        curTheme: parseTheme(sessionState),
      },
      account: {
        user: sessionState.user || {},
        isValidSession: sessionState.isValid,
        userSubscribedCommunities: subscribedCommunities,
      },
      route: { mainPath, subPath: ROUTE.COOL_GUIDE },
    }
  }

  constructor(props) {
    super(props)
    const store = props.statusCode
      ? initRootStore()
      : initRootStore({ ...props })

    this.store = store
  }

  render() {
    const { statusCode, target } = this.props

    const seoConfig = {
      url: `${SITE_URL}/${ROUTE.COOL_GUIDE}`,
      title: 'coderplanets 社区',
      description: '最性感的开发者社区',
    }

    return (
      <Provider store={this.store}>
        <GlobalLayout
          noSidebar
          metric="default"
          page={ROUTE.COOL_GUIDE}
          seoConfig={seoConfig}
          errorCode={statusCode}
          errorPath={target}
        >
          <CoolGuideContent />
        </GlobalLayout>
      </Provider>
    )
  }
}
