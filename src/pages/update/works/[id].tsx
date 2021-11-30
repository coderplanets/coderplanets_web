/*
   this page is for /create/works
 */
import { GetServerSideProps } from 'next'
import { Provider } from 'mobx-react'

import { METRIC, ARTICLE_THREAD } from '@/constant'
import { useStore } from '@/stores/init'

import {
  ssrFetchPrepare,
  articlePublishSEO,
  ssrBaseStates,
  refreshIfneed,
  ssrError,
  ssrGetParam,
} from '@/utils'

import GlobalLayout from '@/containers/layout/GlobalLayout'
import WorksEditor from '@/containers/editor/WorksEditor'

import { P } from '@/schemas'

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
    refreshIfneed(sessionState, '/publish/blog', context)
  } catch (e) {
    console.log('#### error from server: ', e)
    return ssrError(context, 'fetch', 500)
  }

  const id = ssrGetParam(context, 'id')

  const initProps = {
    ...ssrBaseStates(resp),
    viewing: {
      works: { id },
      viewingThread: ARTICLE_THREAD.WORKS,
    },
    worksEditor: {
      mode: 'update',
    },
  }

  return { props: { errorCode: null, ...initProps } }
}

const UpdateWorksPage = (props) => {
  const store = useStore(props)
  const seoConfig = articlePublishSEO(ARTICLE_THREAD.WORKS)

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

export default UpdateWorksPage
