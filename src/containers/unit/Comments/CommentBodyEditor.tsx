import { FC, memo } from 'react'
import dynamic from 'next/dynamic'

import type { TUser } from '@/spec'
import { debounce } from '@/utils/helper'

import { InputEditorWrapper } from './styles/comment_editor'
import EditorFooter from './EditorFooter'

import {
  onMentionSearch,
  onMention,
  onCommentInputChange,
  backToEditor,
  createCommentPreview,
  onCommentInputBlur,
} from './logic'

export const BodyEditor = dynamic(() => import('@/components/MarkdownEditor'), {
  /* eslint-disable react/display-name */
  loading: () => <div>loading</div>,
})

type TProps = {
  showInputEditor: boolean
  showInputPreview: boolean
  body: string
  mentionList: TUser[]
  onCreate: () => void
  creating: boolean
}

const CommentBodyEditor: FC<TProps> = ({
  showInputEditor,
  showInputPreview,
  body,
  mentionList,
  onCreate,
  creating,
}) => {
  return (
    <div className="comment-editor">
      <InputEditorWrapper showInputEditor={showInputEditor}>
        <BodyEditor
          mentionList={mentionList}
          onChange={debounce(onCommentInputChange, 200)}
          onMention={onMention}
          onMentionSearch={onMentionSearch}
          body={body}
        />
      </InputEditorWrapper>

      <EditorFooter
        loading={creating}
        showFold
        showPreview={showInputPreview}
        onCreate={onCreate}
        onBackEdit={backToEditor}
        onPreview={createCommentPreview}
        onFold={onCommentInputBlur}
      />
    </div>
  )
}

export default memo(CommentBodyEditor)
