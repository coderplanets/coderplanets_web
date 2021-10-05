import { Provider } from 'mobx-react'
import { METRIC } from '@/constant'
import { articleEditorSEO } from '@/utils'

import { useStore } from '@/stores/init'
import GlobalLayout from '@/containers/layout/GlobalLayout'
import ArticleEditor from '@/containers/editor/ArticleEditor'

export const EditorPage = (props) => {
  const store = useStore(props)
  const seoConfig = articleEditorSEO()

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

export default EditorPage
