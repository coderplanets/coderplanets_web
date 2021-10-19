import { FC, memo } from 'react'

import type { TAccount, TSubmitState } from '@/spec'

import Header from './Header'
import BodyEditor from './BodyEditor'
import Footer from './Footer'

import { Wrapper, ExpandWrapper } from '../styles/editor'
import { commentOnChange, createComment, closeEditor } from '../logic'

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

      <Footer
        submitState={submitState}
        body={body}
        onPublish={createComment}
        onCancel={closeEditor}
      />
    </ExpandWrapper>
  )
}

export default memo(CommentEditor)
