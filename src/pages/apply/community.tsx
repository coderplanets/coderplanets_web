/*
   this page is for /create/community
 */
import { Provider } from 'mobx-react'

import { METRIC, ROUTE } from '@/constant'
import { useStore } from '@/stores/init'

import {
  publishCommunitySEO,
  ssrFetchPrepare,
  ssrBaseStates,
  refreshIfneed,
  ssrError,
} from '@/utils'

import GlobalLayout from '@/containers/layout/GlobalLayout'
import CommunityEditor from '@/containers/editor/CommunityEditor'

import { P } from '@/schemas'

const fetchData = async (context, opt = {}) => {
  const { gqClient } = ssrFetchPrepare(context, opt)

  const sessionState = gqClient.request(P.sessionState)

  return {
    ...(await sessionState),
  }
}

export const getServerSideProps = async (context) => {
  let resp
  try {
    resp = await fetchData(context)
    const { sessionState } = resp
    refreshIfneed(sessionState, `/${ROUTE.APPLY_COMMUNITY}`, context)
  } catch (e) {
    console.log('#### error from server: ', e)
    return ssrError(context, 'fetch', 500)
  }

  const initProps = {
    ...ssrBaseStates(resp),
  }

  return { props: { errorCode: null, ...initProps } }
}

const ApplyCommunityPage = (props) => {
  const store = useStore(props)
  const seoConfig = publishCommunitySEO()

  return (
    <Provider store={store}>
      <GlobalLayout
        metric={METRIC.COMMUNITY_EDITOR}
        seoConfig={seoConfig}
        noSidebar
      >
        <CommunityEditor />
      </GlobalLayout>
    </Provider>
  )
}

export default ApplyCommunityPage
