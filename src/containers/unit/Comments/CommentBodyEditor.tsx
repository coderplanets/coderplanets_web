import { FC, memo } from 'react'
import dynamic from 'next/dynamic'

import { InputEditorWrapper } from './styles/comment_editor'
import EditorFooter from './EditorFooter'

import {
  // onCommentInputChange,
  backToEditor,
  createCommentPreview,
  onCommentInputBlur,
} from './logic'

export const BodyEditor = dynamic(
  () => import('@/containers/editor/RichEditor'),
  {
    /* eslint-disable react/display-name */
    loading: () => <div>loading</div>,
  },
)

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
      <InputEditorWrapper showInputEditor={showInputEditor}>
        <BodyEditor />
      </InputEditorWrapper>

      <EditorFooter
        loading={creating}
        showFold
        onCreate={onCreate}
        onBackEdit={backToEditor}
        onPreview={createCommentPreview}
        onFold={onCommentInputBlur}
      />
    </div>
  )
}

export default memo(CommentBodyEditor)
