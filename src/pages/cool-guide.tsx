import { GetServerSideProps } from 'next'

import { METRIC } from '@/constant'

import {
  ssrBaseStates,
  refreshIfneed,
  ssrFetchPrepare,
  ssrError,
  coolGuideSEO,
  log,
} from '@/utils'
import { P } from '@/schemas'

import GlobalLayout from '@/containers/layout/GlobalLayout'
import CoolGuideContent from '@/containers/content/CoolGuideContent'

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

    refreshIfneed(sessionState, '/cool-guide', context)
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

const CoolGuidePage = (props) => {
  const store = useStore()
  store.mark(props)
  const seoConfig = coolGuideSEO()

  return (
    <GlobalLayout metric={METRIC.COOL_GUIDE} seoConfig={seoConfig} noSidebar>
      <CoolGuideContent />
    </GlobalLayout>
  )
}

export default CoolGuidePage
