import { Provider } from 'mobx-react'
import { METRIC } from '@/constant'
import { articleEditorSEO } from '@/utils'

import { useStore } from '@/stores/init'
import GlobalLayout from '@/containers/layout/GlobalLayout'
import BlogEditor from '@/containers/editor/BlogEditor'

export const CreateBlogPage = (props) => {
  const store = useStore(props)
  const seoConfig = articleEditorSEO()

  return (
    <Provider store={store}>
      <GlobalLayout
        metric={METRIC.ARTICLE_EDITOR}
        seoConfig={seoConfig}
        noSidebar
      >
        <BlogEditor />
      </GlobalLayout>
    </Provider>
  )
}

export default CreateBlogPage
