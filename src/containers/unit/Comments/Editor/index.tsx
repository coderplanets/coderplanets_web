import { FC, memo } from 'react'

import type { TAccount, TUser } from '@/spec'

import Header from './Header'
import BodyEditor from './BodyEditor'

import { Wrapper, ExpandWrapper } from '../styles/editor'

type TProps = {
  referUsers: TUser[]
  accountInfo: TAccount

  /* TODO:  () => void */
  onCreate?: any

  restProps: {
    showEditor: boolean
    editContent: string
    creating: boolean
  }
}

const CommentEditor: FC<TProps> = (props) => {
  const {
    referUsers,
    accountInfo,
    onCreate,
    restProps: { showEditor, editContent, creating },
  } = props

  if (!showEditor) {
    return (
      <Wrapper>
        <Header
          accountInfo={accountInfo}
          showEditor={showEditor}
          referUsers={referUsers}
        />
      </Wrapper>
    )
  }
  return (
    <ExpandWrapper>
      <Header
        accountInfo={accountInfo}
        showEditor={showEditor}
        referUsers={referUsers}
      />
      <BodyEditor body={editContent} onCreate={onCreate} creating={creating} />
    </ExpandWrapper>
  )
}

export default memo(CommentEditor)
