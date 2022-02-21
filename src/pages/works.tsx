/*
   this page is for /works
 */

import { Provider } from 'mobx-react'
import { GetStaticProps } from 'next'

import { METRIC, THREAD } from '@/constant'
import {
  isrPagedArticlesFilter,
  ssrPagedArticleSchema,
  ssrParseArticleThread,
  worksSEO,
  makeGQClient,
} from '@/utils'
// import { P } from '@/schemas'

import GlobalLayout from '@/containers/layout/GlobalLayout'
import WorksContent from '@/containers/content/WorksContent'

import { useStore } from '@/stores/init'

const loader = async () => {
  const gqClient = makeGQClient('')
  const filter = isrPagedArticlesFilter({})

  const pagedArticles = gqClient.request(
    ssrPagedArticleSchema(THREAD.WORKS),
    filter,
  )

  return {
    filter,
    ...(await pagedArticles),
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const thread = THREAD.WORKS
  const resp = await loader()

  const { filter } = resp
  // console.log('iii got resp: ', resp)
  const {
    articlesThread: { pagedWorks },
  } = ssrParseArticleThread(resp, thread, filter)

  const initProps = {
    viewing: {
      activeThread: thread,
    },
    worksContent: {
      pagedWorks,
    },
  }

  return {
    props: { errorCode: null, namespacesRequired: ['general'], ...initProps },
  }
}

const WorksPage = (props) => {
  const store = useStore(props)
  const seoConfig = worksSEO()

  return (
    <Provider store={store}>
      <GlobalLayout metric={METRIC.WORKS} seoConfig={seoConfig} noSidebar>
        <WorksContent />
      </GlobalLayout>
    </Provider>
  )
}

export default WorksPage
