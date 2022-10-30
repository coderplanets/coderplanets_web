import { GetServerSideProps } from 'next'

import { METRIC } from '@/constant'

import {
  ssrBaseStates,
  ssrFetchPrepare,
  refreshIfneed,
  supportUsSEO,
  ssrError,
  log,
} from '@/utils'

import { P } from '@/schemas'
import GlobalLayout from '@/containers/layout/GlobalLayout'
import SupportUs from '@/widgets/SupportUs'

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

    refreshIfneed(sessionState, '/support-us', context)
  } catch (e) {
    log('#### error from server: ', e)
    return ssrError(context, 'fetch', 500)
  }

  const initProps = {
    ...ssrBaseStates(resp),
  }

  return { props: { errorCode: null, ...initProps } }
}

const SupportUSPage = (props) => {
  const store = useStore()
  store.mark(props)

  const seoConfig = supportUsSEO()

  return (
    <GlobalLayout metric={METRIC.SUPPORT_US} seoConfig={seoConfig} noSidebar>
      <SupportUs />
    </GlobalLayout>
  )
}

export default SupportUSPage
