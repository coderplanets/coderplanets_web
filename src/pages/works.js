/*
   this page is for /communities
 */
import React from 'react'
import { Provider } from 'mobx-react'
import R from 'ramda'

import { SITE_URL } from '@/config'
import { ROUTE } from '@/constant'

import { getJwtToken, makeGQClient, ssrAmbulance, parseTheme } from '@/utils'

import initRootStore from '@/stores/init'
import GlobalLayout from '@/containers/GlobalLayout'
import WorksContent from '@/containers/content/WorksContent'

import { P } from '@/schemas'

/* import PostsThreadSchema from '@/containers/PostsThread/schema' */

// try to fix safari bug
// see https://github.com/yahoo/react-intl/issues/422
global.Intl = require('intl')

async function fetchData(props, opt) {
  const { realname } = R.merge({ realname: true }, opt)

  const token = realname ? getJwtToken(props) : null
  const gqClient = makeGQClient(token)

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

export default class CommunitiesPage extends React.Component {
  static async getInitialProps(props) {
    let resp
    try {
      resp = await fetchData(props)
    } catch ({ response: { errors } }) {
      if (ssrAmbulance.hasLoginError(errors)) {
        resp = await fetchData(props, { realname: false })
      }
    }

    const { sessionState, subscribedCommunities } = resp

    return {
      langSetup: {},
      theme: {
        curTheme: parseTheme(sessionState),
      },
      route: {
        mainPath: ROUTE.WORKS,
        subPath: '',
      },
      account: {
        user: sessionState.user || {},
        isValidSession: sessionState.isValid,
        userSubscribedCommunities: subscribedCommunities,
      },
    }
  }

  constructor(props) {
    super(props)
    this.store = initRootStore({ ...props })
  }

  render() {
    const seoConfig = {
      url: `${SITE_URL}/communities`,
      title: 'coderplanets | 作品集市',
      description: '有趣有爱的作品分享',
    }

    return (
      <Provider store={this.store}>
        <GlobalLayout page={ROUTE.COMMUNITIES} seoConfig={seoConfig}>
          <WorksContent />
        </GlobalLayout>
      </Provider>
    )
  }
}
