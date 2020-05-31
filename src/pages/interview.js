import React from 'react'
import { Provider } from 'mobx-react'
import { merge } from 'ramda'

import { SITE_URL } from '@/config'
import { ROUTE } from '@/constant'

import { getJwtToken, makeGQClient, ssrAmbulance, parseTheme } from '@/utils'

import { useStore } from '@/stores/init2'

import GlobalLayout from '@/containers/GlobalLayout'
import InterviewContent from '@/containers/content/InterviewContent'

import { P } from '@/schemas'

async function fetchData(props, opt) {
  const { realname } = merge({ realname: true }, opt)

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

export async function getServerSideProps(props) {
  let resp
  try {
    resp = await fetchData(props)
  } catch ({ response: { errors } }) {
    if (ssrAmbulance.hasLoginError(errors)) {
      resp = await fetchData(props, { realname: false })
    }
  }

  const { sessionState, subscribedCommunities } = resp
  const initProps = {
    theme: {
      curTheme: parseTheme(sessionState),
    },
    account: {
      user: sessionState.user || {},
      isValidSession: sessionState.isValid,
      userSubscribedCommunities: subscribedCommunities,
    },
  }

  return {
    props: { errorCode: null, namespacesRequired: ['general'], ...initProps },
  }
}

const InterviewPage = props => {
  const store = useStore(props)

  const seoConfig = {
    url: `${SITE_URL}/${ROUTE.INTERVIEW}`,
    title: '面经 | coderplanets',
    description: '面试题库，面试经验分享交流',
  }

  return (
    <Provider store={store}>
      <GlobalLayout
        noSidebar
        metric="default"
        page={ROUTE.INTERVIEW}
        seoConfig={seoConfig}
      >
        <InterviewContent />
      </GlobalLayout>
    </Provider>
  )
}

export default InterviewPage
