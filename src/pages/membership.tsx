import { GetServerSideProps } from 'next'
import { Provider } from 'mobx-react'

import { METRIC } from '@/constant'

import {
  ssrBaseStates,
  ssrFetchPrepare,
  refreshIfneed,
  membershipSEO,
  ssrError,
} from '@/utils'
import { P } from '@/schemas'
import GlobalLayout from '@/containers/layout/GlobalLayout'
import MembershipContent from '@/containers/content/MembershipContent'

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

    refreshIfneed(sessionState, '/membership', context)
  } catch (e) {
    console.log('#### error from server: ', e)
    return ssrError(context, 'fetch', 500)
  }

  const initProps = {
    ...ssrBaseStates(resp),
  }

  return { props: { errorCode: null, ...initProps } }
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
