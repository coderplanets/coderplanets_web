/*
   this page is for /create/works
 */
import { GetServerSideProps } from 'next'

import { METRIC, ARTICLE_THREAD } from '@/constant'
import { useStore } from '@/stores/init'

import {
  ssrFetchPrepare,
  articlePublishSEO,
  ssrBaseStates,
  refreshIfneed,
  ssrError,
  ssrGetParam,
  log,
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
    log('#### error from server: ', e)
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
  const store = useStore()
  store.mark(props)

  const seoConfig = articlePublishSEO(ARTICLE_THREAD.WORKS)

  return (
    <GlobalLayout metric={METRIC.WORKS_EDITOR} seoConfig={seoConfig} noSidebar>
      <WorksEditor />
    </GlobalLayout>
  )
}

export default UpdateWorksPage
