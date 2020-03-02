import React from 'react'
import dynamic from 'next/dynamic'

import { debounce } from '@utils'
import { InputEditorWrapper } from './styles/comment_editor'
import EditorFooter from './EditorFooter'

import * as logic from './logic'

const DynamicBodyEditor = dynamic({
  loader: () => import('@components/MarkdownEditor'),
  /* eslint-disable */
  loading: () => <div>loading</div>,
  /* eslint-enable */
})

const CommentBodyEditor = ({
  showInputEditor,
  showInputPreview,
  body,
  mentionList,
  onCreate,
  restProps: { creating },
}) => (
  <div className="comment-editor">
    <InputEditorWrapper showInputEditor={showInputEditor}>
      <DynamicBodyEditor
        mentionList={mentionList}
        onChange={debounce(logic.onCommentInputChange, 200)}
        onMention={logic.onMention}
        onMentionSearch={logic.onMentionSearch}
        body={body}
      />
    </InputEditorWrapper>

    <EditorFooter
      loading={creating}
      showFold
      showPreview={showInputPreview}
      onCreate={onCreate}
      onBackEdit={logic.backToEditor}
      onPreview={logic.createCommentPreview}
      onFold={logic.onCommentInputBlur}
    />
  </div>
)

export default React.memo(CommentBodyEditor)
