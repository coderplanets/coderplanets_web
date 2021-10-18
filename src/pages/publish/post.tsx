import { GetServerSideProps } from 'next'
import { Provider } from 'mobx-react'
import { METRIC } from '@/constant'
import {
  articlePublishSEO,
  ssrBaseStates,
  ssrRescue,
  ssrFetchPrepare,
} from '@/utils'
import { P } from '@/schemas'

import { useStore } from '@/stores/init'
import GlobalLayout from '@/containers/layout/GlobalLayout'
import ArticleEditor from '@/containers/editor/ArticleEditor'

const fetchData = async (context, opt = {}) => {
  const { gqClient } = ssrFetchPrepare(context, opt)

  const sessionState = gqClient.request(P.sessionState)

  return {
    ...(await sessionState),
  }
}

/**
 * TODO: know-why
 *
 * 即使不需要这里的数据初始化 store, 这里也必须要放一个 getserverSideProps,
 * 否则 Provider 在 URL 中包含 param 的时候会报错，十分诡异 。。
 * 大概率是 mobx-react 的问题, 真尼玛坑爹。
 */
export const getServerSideProps: GetServerSideProps = async (context) => {
  let resp
  try {
    resp = await fetchData(context)
  } catch ({ response: { errors } }) {
    if (ssrRescue.hasLoginError(errors)) {
      resp = await fetchData(context, { tokenExpired: true })
    }
  }

  const initProps = {
    ...ssrBaseStates(resp),
  }

  return { props: { errorCode: null, ...initProps } }
}

export const PublishPostPage = (props) => {
  const store = useStore(props)
  const seoConfig = articlePublishSEO()

  return (
    <Provider store={store}>
      <GlobalLayout
        metric={METRIC.ARTICLE_EDITOR}
        seoConfig={seoConfig}
        noSidebar
      >
        <ArticleEditor />
      </GlobalLayout>
    </Provider>
  )
}

export default PublishPostPage
