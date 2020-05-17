/*
   this page is for /communities
 */
import React from 'react'
import { Provider } from 'mobx-react'
import R from 'ramda'

import { SITE_URL } from '@/config'
import { ROUTE } from '@/constant'

import {
  parseURL,
  getJwtToken,
  makeGQClient,
  queryStringToJSON,
  nilOrEmpty,
  ssrAmbulance,
  parseTheme,
} from '@/utils'

import initRootStore from '@/stores/init'

import GlobalLayout from '@/containers/GlobalLayout'
import NewCommunityContent from '@/containers/content/NewCommunityContent'

import { P } from '@/schemas'

/* import PostsThreadSchema from '@/containers/PostsThread/schema' */

async function fetchData(props, opt) {
  const { realname } = R.merge({ realname: true }, opt)

  const token = realname ? getJwtToken(props) : null
  const gqClient = makeGQClient(token)
  const userHasLogin = nilOrEmpty(token) === false
  const { subPath } = parseURL(props)
  const category = subPath !== '' ? subPath : 'pl'

  const { asPath } = props

  const filter = { ...queryStringToJSON(asPath, { pagi: 'number' }) }

  const sessionState = gqClient.request(P.sessionState)
  const pagedCommunities = gqClient.request(P.pagedCommunities, {
    filter: { ...filter, category },
    userHasLogin,
  })
  const pagedCategories = gqClient.request(P.pagedCategories, { filter })

  const subscribedCommunities = gqClient.request(P.subscribedCommunities, {
    filter: {
      page: 1,
      size: 30,
    },
  })

  return {
    category,
    ...(await sessionState),
    ...(await pagedCategories),
    ...(await pagedCommunities),
    ...(await subscribedCommunities),
  }
}

export default class NewCommunityPage extends React.Component {
  static async getInitialProps(props) {
    let resp
    try {
      resp = await fetchData(props)
    } catch ({ response: { errors } }) {
      if (ssrAmbulance.hasLoginError(errors)) {
        resp = await fetchData(props, { realname: false })
      }
    }

    const {
      category,
      sessionState,
      pagedCategories,
      pagedCommunities,
      subscribedCommunities,
    } = resp

    return {
      theme: {
        curTheme: parseTheme(sessionState),
      },
      route: {
        mainPath: ROUTE.COMMUNITIES,
        subPath: category,
      },
      account: {
        user: sessionState.user || {},
        isValidSession: sessionState.isValid,
        userSubscribedCommunities: subscribedCommunities,
      },
      communitiesContent: {
        pagedCommunities,
        pagedCategories,
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
      title: 'coderplanets | 社区索引',
      description: 'coderplanets | 社区索引',
    }

    return (
      <Provider store={this.store}>
        <GlobalLayout page={ROUTE.COMMUNITIES} seoConfig={seoConfig}>
          <NewCommunityContent />
        </GlobalLayout>
      </Provider>
    )
  }
}
