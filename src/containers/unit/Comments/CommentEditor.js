import React from 'react'
import MarkDownRender from '@/components/MarkDownRender'
import CommentBodyEditor from './CommentBodyEditor'

import { Container, PreviewerWrapper } from './styles/comment_editor'

import EditorHeader from './EditorHeader'
import EditorFooter from './EditorFooter'

import * as logic from './logic'

const CommentEditor = (props) => {
  const {
    referUsers,
    accountInfo,
    onCreate,
    mentionList,
    restProps: {
      countCurrent,
      showInputBox,
      showInputEditor,
      showInputPreview,
      editContent,
      creating,
    },
  } = props

  return (
    <Container show={showInputBox}>
      <EditorHeader
        accountInfo={accountInfo}
        showInputEditor={showInputEditor}
        showInputPreview={showInputPreview}
        countCurrent={countCurrent}
        referUsers={referUsers}
      />
      {showInputEditor && (
        <CommentBodyEditor
          mentionList={mentionList}
          showInputPreview={showInputPreview}
          showInputEditor={showInputEditor}
          body={editContent}
          onCreate={onCreate}
          restProps={{ ...props }}
        />
      )}
      {showInputPreview && (
        <div>
          <PreviewerWrapper>
            <MarkDownRender body={editContent} />
          </PreviewerWrapper>
          <EditorFooter
            loading={creating}
            showPreview={showInputPreview}
            onCreate={onCreate}
            onBackEdit={logic.backToEditor}
            onPreview={logic.createCommentPreview}
          />
        </div>
      )}
    </Container>
  )
}

export default React.memo(CommentEditor)
