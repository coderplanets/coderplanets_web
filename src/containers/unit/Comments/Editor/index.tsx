import { FC, memo } from 'react'

import type { TAccount, TUser } from '@/spec'

import Header from './Header'
import BodyEditor from './BodyEditor'

import { Wrapper } from '../styles/editor'

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
      <Header
        accountInfo={accountInfo}
        showInputEditor={showInputEditor}
        referUsers={referUsers}
      />
      {showInputEditor && (
        <BodyEditor
          body={editContent}
          onCreate={onCreate}
          creating={creating}
        />
      )}
    </Wrapper>
  )
}

export default memo(CommentEditor)
