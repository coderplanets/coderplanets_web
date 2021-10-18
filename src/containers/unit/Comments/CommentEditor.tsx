import { FC, memo } from 'react'

import type { TAccount, TUser } from '@/spec'

import EditorHeader from './EditorHeader'
import CommentBodyEditor from './CommentBodyEditor'

import { Wrapper } from './styles/comment_editor'
import { backToEditor } from './logic'

type TProps = {
  referUsers: TUser[]
  accountInfo: TAccount

  /* TODO:  () => void */
  onCreate?: any

  restProps: {
    showInputBox: boolean
    showInputEditor: boolean
    editContent: string
    creating: boolean
  }
}

const CommentEditor: FC<TProps> = (props) => {
  const {
    referUsers,
    accountInfo,
    onCreate,
    restProps: { showInputBox, showInputEditor, editContent, creating },
  } = props

  return (
    <Wrapper show>
      <EditorHeader
        accountInfo={accountInfo}
        showInputEditor={showInputEditor}
        referUsers={referUsers}
      />
      {showInputEditor && (
        <CommentBodyEditor
          body={editContent}
          onCreate={onCreate}
          creating={creating}
        />
      )}
    </Wrapper>
  )
}

export default memo(CommentEditor)
