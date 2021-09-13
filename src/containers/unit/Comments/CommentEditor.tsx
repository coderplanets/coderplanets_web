import { FC, memo } from 'react'

import type { TAccount, TUser } from '@/spec'
import MarkDownRender from '@/components/MarkDownRender'

import EditorHeader from './EditorHeader'
import EditorFooter from './EditorFooter'
import CommentBodyEditor from './CommentBodyEditor'

import { Container, PreviewerWrapper } from './styles/comment_editor'
import { backToEditor, createCommentPreview } from './logic'

type TProps = {
  referUsers: TUser[]
  accountInfo: TAccount

  /* TODO:  () => void */
  onCreate?: any

  restProps: {
    countCurrent: number
    showInputBox: boolean
    showInputEditor: boolean
    showInputPreview: boolean
    editContent: string
    creating: boolean
  }
}

const CommentEditor: FC<TProps> = (props) => {
  const {
    referUsers,
    accountInfo,
    onCreate,
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
          body={editContent}
          onCreate={onCreate}
          creating={creating}
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
            onBackEdit={backToEditor}
            onPreview={createCommentPreview}
          />
        </div>
      )}
    </Container>
  )
}

export default memo(CommentEditor)
