import { Provider } from 'mobx-react'

import { METRIC } from '@/constant'

import {
  ssrBaseStates,
  ssrFetchPrepare,
  ssrRescue,
  membershipSEO,
  ssrError,
} from '@/utils'
import { P } from '@/schemas'
import GlobalLayout from '@/containers/layout/GlobalLayout'
import MembershipContent from '@/containers/content/MembershipContent'

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
    if (ssrRescue.hasLoginError(errors)) {
      resp = await fetchData(context, { tokenExpired: true })
    } else {
      return ssrError(context, 'fetch', 500)
    }
  }

  const initProps = { ...ssrBaseStates(resp) }

  return {
    props: { errorCode: null, namespacesRequired: ['general'], ...initProps },
  }
}

const MembershipPage = (props) => {
  const store = useStore(props)
  const seoConfig = membershipSEO()

  return (
    <Provider store={store}>
      <GlobalLayout metric={METRIC.MEMBERSHIP} seoConfig={seoConfig} noSidebar>
        <MembershipContent />
      </GlobalLayout>
    </Provider>
  )
}

export default MembershipPage
