/*
   this page is for /works
 */
import { Provider } from 'mobx-react'

import { METRIC } from '@/constant'
import {
  ssrFetchPrepare,
  ssrAmbulance,
  parseTheme,
  worksSEO,
  ssrError,
} from '@/utils'
import { P } from '@/schemas'

import GlobalLayout from '@/containers/layout/GlobalLayout'
import WorksContent from '@/containers/content/WorksContent'

import { useStore } from '@/stores/init'

const fetchData = async (context, opt = {}) => {
  const { gqClient } = ssrFetchPrepare(context, opt)

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

export const getServerSideProps = async (context) => {
  let resp
  try {
    resp = await fetchData(context)
  } catch ({ response: { errors } }) {
    if (ssrAmbulance.hasLoginError(errors)) {
      resp = await fetchData(context, { tokenExpired: true })
    } else {
      return ssrError(context, 'fetch', 500)
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

const WorksPage = (props) => {
  const store = useStore(props)
  const seoConfig = worksSEO()

  return (
    <Provider store={store}>
      <GlobalLayout metric={METRIC.WORKS} seoConfig={seoConfig} noSidebar>
        <WorksContent />
      </GlobalLayout>
    </Provider>
  )
}

export default WorksPage
