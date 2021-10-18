import { FC, memo } from 'react'

import RichEditor from '@/containers/editor/RichEditor/RealEditor'

import EditorFooter from './EditorFooter'

import { InputEditorWrapper } from './styles/comment_editor'

type TProps = {
  showInputEditor?: boolean
  body: string
  onCreate: () => void
  creating: boolean
}

const CommentBodyEditor: FC<TProps> = ({
  showInputEditor = true,
  body,
  onCreate,
  creating,
}) => {
  return (
    <div className="comment-editor">
      <RichEditor
        data="{}"
        type="comment"
        placeholder="// 评论内容（'Tab' 键快速插入）"
      />

      <EditorFooter loading={creating} showFold onCreate={onCreate} />
    </div>
  )
}

export default memo(CommentBodyEditor)
