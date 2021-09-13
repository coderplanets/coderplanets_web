import { Provider } from 'mobx-react'

import { useStore } from '@/stores/init'
import ThemePalette from '@/containers/layout/ThemePalette'
import RichEditor from '@/containers/editor/RichEditor'
// import EditorJS from '@editorjs/editorjs'

export const EditorPage = (props) => {
  const store = useStore(props)

  return (
    <Provider store={store}>
      <ThemePalette>
        <RichEditor />
      </ThemePalette>
    </Provider>
  )
}

export default EditorPage
