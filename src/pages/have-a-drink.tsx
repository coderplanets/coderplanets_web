import { Provider } from 'mobx-react'

import { METRIC } from '@/constant'

import { ssrBaseStates, ssrFetchPrepare, ssrRescue, drinkSEO } from '@/utils'
import { P } from '@/schemas'
import GlobalLayout from '@/containers/layout/GlobalLayout'
import HaveADrinkContent from '@/containers/content/HaveADrinkContent'

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
    }
  }

  const initProps = {
    ...ssrBaseStates(resp),
  }

  return {
    props: { errorCode: null, namespacesRequired: ['general'], ...initProps },
  }
}

const HaveADrinkPage = (props) => {
  const store = useStore(props)
  const seoConfig = drinkSEO()

  return (
    <Provider store={store}>
      <GlobalLayout
        metric={METRIC.HAVE_A_DRINK}
        seoConfig={seoConfig}
        noSidebar
      >
        <HaveADrinkContent />
      </GlobalLayout>
    </Provider>
  )
}

export default HaveADrinkPage
