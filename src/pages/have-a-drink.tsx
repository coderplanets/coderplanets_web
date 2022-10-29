import { METRIC } from '@/constant'

import {
  ssrBaseStates,
  ssrError,
  ssrFetchPrepare,
  refreshIfneed,
  drinkSEO,
  log,
} from '@/utils'
import { P } from '@/schemas'
import GlobalLayout from '@/containers/layout/GlobalLayout'
import HaveADrinkContent from '@/containers/content/HaveADrinkContent'

import { useStore } from '@/stores/init'

const loader = async (context, opt = {}) => {
  const { gqClient } = ssrFetchPrepare(context, opt)
  const sessionState = gqClient.request(P.sessionState)

  return {
    ...(await sessionState),
  }
}

export const getServerSideProps = async (context) => {
  let resp
  try {
    resp = await loader(context)
    const { sessionState } = resp

    refreshIfneed(sessionState, '/have-a-drink', context)
  } catch (e) {
    log('#### error from server: ', e)
    return ssrError(context, 'fetch', 500)
  }

  const initProps = {
    ...ssrBaseStates(resp),
  }

  return {
    props: { errorCode: null, ...initProps },
  }
}

const HaveADrinkPage = (props) => {
  const store = useStore()
  store.mark(props)

  const seoConfig = drinkSEO()

  return (
    <GlobalLayout metric={METRIC.HAVE_A_DRINK} seoConfig={seoConfig} noSidebar>
      <HaveADrinkContent />
    </GlobalLayout>
  )
}

export default HaveADrinkPage
