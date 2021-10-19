import { FC, memo } from 'react'

import type { TAccount, TSubmitState } from '@/spec'

import Header from './Header'
import BodyEditor from './BodyEditor'
import EditorFooter from './Footer'

import { Wrapper, ExpandWrapper } from '../styles/editor'
import { commentOnChange, createComment } from '../logic'

type TProps = {
  accountInfo: TAccount
  body: string
  submitState: TSubmitState
  showEditor: boolean
}

const CommentEditor: FC<TProps> = ({
  accountInfo,
  submitState,
  showEditor,
  body,
}) => {
  if (!showEditor) {
    return (
      <Wrapper>
        <Header accountInfo={accountInfo} showEditor={showEditor} />
      </Wrapper>
    )
  }
  return (
    <ExpandWrapper>
      <Header accountInfo={accountInfo} showEditor={showEditor} />
      <BodyEditor
        body={body}
        onChange={(v) => commentOnChange(v, 'commentBody')}
      />

      <EditorFooter
        submitState={submitState}
        body={body}
        onPublish={createComment}
      />
    </ExpandWrapper>
  )
}

export default memo(CommentEditor)
