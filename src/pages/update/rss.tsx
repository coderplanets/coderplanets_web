import { GetServerSideProps } from 'next'
import { METRIC } from '@/constant'
import {
  articleUpdateSEO,
  ssrBaseStates,
  ssrRescue,
  ssrFetchPrepare,
} from '@/utils'
import { P } from '@/schemas'

import { useStore } from '@/stores/init'
import GlobalLayout from '@/containers/layout/GlobalLayout'
import BlogEditor from '@/containers/editor/BlogEditor'

const loader = async (context, opt = {}) => {
  const { gqClient } = ssrFetchPrepare(context, opt)

  // const { thirdPath: id } = ssrParseURL(context.req)
  const sessionState = gqClient.request(P.sessionState)

  return {
    ...(await sessionState),
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let resp
  try {
    resp = await loader(context)
  } catch ({ response: { errors } }) {
    if (ssrRescue.hasLoginError(errors)) {
      resp = await loader(context, { tokenExpired: true })
    }
  }

  // const id = ssrGetParam(context, 'id')

  const initProps = {
    ...ssrBaseStates(resp),
  }

  return { props: { errorCode: null, ...initProps } }
}

export const UpdatePostPage = (props) => {
  const store = useStore()
  store.mark(props)
  const seoConfig = articleUpdateSEO()

  return (
    <GlobalLayout
      metric={METRIC.ARTICLE_EDITOR}
      seoConfig={seoConfig}
      noSidebar
    >
      <BlogEditor mode="update" />
    </GlobalLayout>
  )
}

export default UpdatePostPage
