import { FC, memo } from 'react'
import dynamic from 'next/dynamic'

import type { TAccount, TUser, TComment } from '@/spec'

import MarkDownRender from '@/components/MarkDownRender'

import ReplyToBar from './ReplyToBar'
import ReplyEditorHeader from './ReplyEditorHeader'
import EditorFooter from './EditorFooter'

import {
  Wrapper,
  InputEditorWrapper,
  PreviewWrapper,
} from './styles/comment_reply_editor'

import { createReplyComment } from './logic'

export const BodyEditor = dynamic(
  () => import('@/containers/editor/RichEditor'),
  {
    /* eslint-disable react/display-name */
    loading: () => <div>loading</div>,
  },
)

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
      <ReplyEditorHeader accountInfo={accountInfo} referUsers={referUsers} />

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
