import { GetServerSideProps } from 'next'
import { Provider } from 'mobx-react'

import { METRIC } from '@/constant'

import {
  ssrBaseStates,
  ssrFetchPrepare,
  refreshIfneed,
  subscribeSEO,
  ssrError,
} from '@/utils'
import { P } from '@/schemas'
import GlobalLayout from '@/containers/layout/GlobalLayout'
import SubscribeContent from '@/containers/content/SubscribeContent'

import { useStore } from '@/stores/init'

const loader = async (context, opt = {}) => {
  const { gqClient } = ssrFetchPrepare(context, opt)
  const sessionState = gqClient.request(P.sessionState)

  return {
    ...(await sessionState),
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let resp
  try {
    resp = await loader(context)
    const { sessionState } = resp

    refreshIfneed(sessionState, '/subscribe', context)
  } catch (e) {
    console.log('#### error from server: ', e)
    return ssrError(context, 'fetch', 500)
  }

  const initProps = {
    ...ssrBaseStates(resp),
  }

  return { props: { errorCode: null, ...initProps } }
}

const SubscribePage = (props) => {
  const store = useStore(props)

  const seoConfig = subscribeSEO()

  return (
    <Provider store={store}>
      <GlobalLayout metric={METRIC.SUBSCRIBE} seoConfig={seoConfig} noSidebar>
        <SubscribeContent />
      </GlobalLayout>
    </Provider>
  )
}

export default SubscribePage
