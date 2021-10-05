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

import {
  onReplyInputChange,
  createReplyComment,
  replyBackToEditor,
  replyCommentPreview,
} from './logic'

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
  showReplyPreview: boolean

  restProps: {
    countCurrent: number
    replyContent: string
    replyToComment: TComment
    replying: boolean
  }
}

const CommentReplyEditor: FC<TProps> = ({
  referUsers,
  show,
  isEdit,
  accountInfo,
  showReplyPreview,
  restProps: { countCurrent, replyContent, replyToComment, replying },
}) => {
  return (
    <Wrapper>
      <ReplyEditorHeader
        accountInfo={accountInfo}
        countCurrent={countCurrent}
        referUsers={referUsers}
        showPreview={showReplyPreview}
      />

      {!isEdit && <ReplyToBar comment={replyToComment} />}

      {show ? (
        <div className="comment-reply-editor">
          <InputEditorWrapper>
            <BodyEditor />
          </InputEditorWrapper>
        </div>
      ) : (
        <PreviewWrapper>
          <MarkDownRender body={replyContent} />
        </PreviewWrapper>
      )}
      <EditorFooter
        loading={replying}
        showPreview={showReplyPreview}
        onCreate={createReplyComment}
        onBackEdit={replyBackToEditor}
        onPreview={replyCommentPreview}
      />
    </Wrapper>
  )
}

export default memo(CommentReplyEditor)
