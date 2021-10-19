import { FC, memo } from 'react'

import type { TAccount, TSubmitState } from '@/spec'

import BodyEditor from './BodyEditor'
// import ReplyToBar from '../ReplyToBar'
import ReplyHeader from './ReplyHeader'
import Footer from './Footer'

import { Wrapper, InputEditorWrapper } from '../styles/editor/reply_editor'

import { createReplyComment } from '../logic'

type TProps = {
  show: boolean
  isEdit: boolean
  accountInfo: TAccount

  body: string
  submitState: TSubmitState
}

const CommentReplyEditor: FC<TProps> = ({
  show,
  isEdit,
  accountInfo,
  body,
  submitState,
  // restProps: { replyToComment, replying },
}) => {
  return (
    <Wrapper>
      <ReplyHeader accountInfo={accountInfo} />

      {/* {!isEdit && <ReplyToBar comment={replyToComment} />} */}

      {show && (
        <div className="comment-reply-editor">
          <InputEditorWrapper>
            <BodyEditor body={body} />
          </InputEditorWrapper>
        </div>
      )}
      <Footer
        body={body}
        onPublish={createReplyComment}
        submitState={submitState}
        onCancel={console.log}
      />
    </Wrapper>
  )
}

export default memo(CommentReplyEditor)
