import { FC, memo } from 'react'

import type { TAccount, TUser, TComment } from '@/spec'

import BodyEditor from './BodyEditor'
// import ReplyToBar from '../ReplyToBar'
import ReplyHeader from './ReplyHeader'
import EditorFooter from './Footer'

import { Wrapper, InputEditorWrapper } from '../styles/editor/reply_editor'

import { createReplyComment } from '../logic'

type TProps = {
  referUsers: TUser[]
  show: boolean
  isEdit: boolean
  accountInfo: TAccount

  // restProps: {
  //   replyContent: string
  //   replyToComment: TComment
  //   replying: boolean
  // }
}

const CommentReplyEditor: FC<TProps> = ({
  referUsers,
  show,
  isEdit,
  accountInfo,
  // restProps: { replyToComment, replying },
}) => {
  return (
    <Wrapper>
      <ReplyHeader accountInfo={accountInfo} referUsers={referUsers} />

      {/* {!isEdit && <ReplyToBar comment={replyToComment} />} */}

      {show && (
        <div className="comment-reply-editor">
          <InputEditorWrapper>
            <BodyEditor />
          </InputEditorWrapper>
        </div>
      )}
      <EditorFooter loading={false} onCreate={createReplyComment} />
    </Wrapper>
  )
}

export default memo(CommentReplyEditor)
