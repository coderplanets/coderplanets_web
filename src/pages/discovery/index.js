/*
   this page is for /discovery
 */
import React from 'react'
import { Provider } from 'mobx-react'
import { merge } from 'ramda'

import { SITE_URL } from '@/config'
import { ROUTE } from '@/constant'

import {
  getJwtToken,
  makeGQClient,
  queryStringToJSON,
  ssrParseURL,
  nilOrEmpty,
  ssrAmbulance,
  parseTheme,
} from '@/utils'

import { useStore } from '@/stores/init'

import GlobalLayout from '@/containers/GlobalLayout'
import DiscoveryContent from '@/containers/content/DiscoveryContent'

import { P } from '@/schemas'

const fetchData = async (props, opt) => {
  const { realname } = merge({ realname: true }, opt)

  const token = realname ? getJwtToken(props) : null
  const gqClient = makeGQClient(token)
  const userHasLogin = nilOrEmpty(token) === false
  const { subPath } = ssrParseURL(props.req)
  const category = subPath !== '' ? subPath : 'pl'

  const filter = { ...queryStringToJSON(props.req.url, { pagi: 'number' }) }

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

export const getServerSideProps = async (props) => {
  // const { communityPath, thread } = ssrParseURL(props.req)
  let resp
  try {
    resp = await fetchData(props)
  } catch ({ response: { errors } }) {
    if (ssrAmbulance.hasLoginError(errors)) {
      resp = await fetchData(props, { realname: false })
    }
  }

  const {
    // category,
    sessionState,
    pagedCategories,
    pagedCommunities,
    subscribedCommunities,
  } = resp

  const initProps = {
    theme: {
      curTheme: parseTheme(sessionState),
    },
    account: {
      user: sessionState.user || {},
      isValidSession: sessionState.isValid,
      userSubscribedCommunities: subscribedCommunities,
    },
    discoveryContent: {
      pagedCommunities,
      pagedCategories,
    },
  }

  return { props: { errorCode: null, ...initProps } }
}

const DiscoveryPage = (props) => {
  const store = useStore(props)

  const { errorCode } = store

  const seoConfig = {
    url: `${SITE_URL}/discovery`,
    title: '社区索引 | coderplanets',
    description: 'coderplanets 所有社区节点',
  }

  return (
    <Provider store={store}>
      <GlobalLayout
        page={ROUTE.DISCOVERY}
        seoConfig={seoConfig}
        errorCode={errorCode}
      >
        <DiscoveryContent />
      </GlobalLayout>
    </Provider>
  )
}

export default DiscoveryPage
