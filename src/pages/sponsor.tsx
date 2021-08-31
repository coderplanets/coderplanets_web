import { Provider } from 'mobx-react'

import { METRIC } from '@/constant'

import {
  ssrFetchPrepare,
  ssrRescue,
  parseTheme,
  sponsorSEO,
  ssrError,
} from '@/utils'
import { P } from '@/schemas'
import GlobalLayout from '@/containers/layout/GlobalLayout'
import SponsorContent from '@/containers/content/SponsorContent'

import { useStore } from '@/stores/init'

const fetchData = async (props, opt = {}) => {
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
    if (ssrRescue.hasLoginError(errors)) {
      resp = await fetchData(context, { realname: false })
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

const SponsorPage = (props) => {
  const store = useStore(props)
  const seoConfig = sponsorSEO()

  return (
    <Provider store={store}>
      <GlobalLayout metric={METRIC.SPONSOR} seoConfig={seoConfig} noSidebar>
        <SponsorContent />
      </GlobalLayout>
    </Provider>
  )
}

export default SponsorPage
