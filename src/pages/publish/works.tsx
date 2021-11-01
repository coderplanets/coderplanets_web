/*
   this page is for /create/works
 */
import { GetServerSideProps } from 'next'
import { Provider } from 'mobx-react'

import { METRIC, THREAD } from '@/constant'
import { useStore } from '@/stores/init'

import {
  ssrFetchPrepare,
  articlePublishSEO,
  ssrBaseStates,
  refreshIfneed,
  ssrError,
} from '@/utils'

import GlobalLayout from '@/containers/layout/GlobalLayout'
import WorksEditor from '@/containers/editor/WorksEditor'

import { P } from '@/schemas'

const fetchData = async (context, opt = {}) => {
  const { gqClient } = ssrFetchPrepare(context, opt)
  const sessionState = gqClient.request(P.sessionState)

  return {
    ...(await sessionState),
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let resp
  try {
    resp = await fetchData(context)
    const { sessionState } = resp
    refreshIfneed(sessionState, '/publish/blog', context)
  } catch (e) {
    console.log('#### error from server: ', e)
    return ssrError(context, 'fetch', 500)
  }

  const initProps = {
    ...ssrBaseStates(resp),
  }

  return { props: { errorCode: null, ...initProps } }
}

const PublishWorksPage = (props) => {
  const store = useStore(props)
  const seoConfig = articlePublishSEO(THREAD.WORKS)

  return (
    <Provider store={store}>
      <GlobalLayout
        metric={METRIC.WORKS_EDITOR}
        seoConfig={seoConfig}
        noSidebar
        noFooter
      >
        <WorksEditor />
      </GlobalLayout>
    </Provider>
  )
}

export default PublishWorksPage
