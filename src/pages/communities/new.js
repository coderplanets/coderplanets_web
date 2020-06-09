/*
   this page is for /communities
 */
import React from 'react'
import { Provider } from 'mobx-react'
import { merge } from 'ramda'

import { SITE_URL } from '@/config'
import { ROUTE } from '@/constant'

import { useStore } from '@/stores/init'

import {
  getJwtToken,
  makeGQClient,
  queryStringToJSON,
  nilOrEmpty,
  ssrAmbulance,
  ssrParseURL,
  parseTheme,
} from '@/utils'

import GlobalLayout from '@/containers/GlobalLayout'
import NewCommunityContent from '@/containers/content/NewCommunityContent'

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
    communitiesContent: {
      pagedCommunities,
      pagedCategories,
    },
  }

  return { props: { errorCode: null, ...initProps } }
}

const NewCommunityPage = (props) => {
  const store = useStore(props)

  const seoConfig = {
    url: `${SITE_URL}/communities`,
    title: '建立新社区 | coderplanets',
    description: '建立新社区',
  }

  return (
    <Provider store={store}>
      <GlobalLayout page={ROUTE.COMMUNITIES} seoConfig={seoConfig}>
        {/* <h2>22</h2> */}
        <NewCommunityContent />
      </GlobalLayout>
    </Provider>
  )
}

export default NewCommunityPage
