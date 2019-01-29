import React from 'react'
import withClickOutside from 'react-click-outside'
import dynamic from 'next/dynamic'

import MarkDownRender from 'components/MarkDownRender'
import { debounce } from 'utils'
import ReplyToBar from './ReplyToBar'
import ReplyEditorHeader from './ReplyEditorHeader'

import {
  Wrapper,
  InputEditorWrapper,
  PreviewWrapper,
} from './styles/comment_reply_editor'

import EditorFooter from './EditorFooter'

import * as logic from './logic'

const DynamicBodyEditor = dynamic({
  loader: () => import('components/MarkdownEditor'),
  /* eslint-disable */
  loading: () => <div>loading</div>,
  /* eslint-enable */
})

class CommentReplyEditor extends React.Component {
  /* eslint-disable */
  handleClickOutside() {
    logic.closeReplyBox()
    logic.onCommentInputBlur()
  }
  /* eslint-enable */

  render() {
    const {
      referUsers,
      show,
      isEdit,
      accountInfo,
      showReplyPreview,
      mentionList,
      restProps: { countCurrent, replyContent, replyToComment, replying },
    } = this.props

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
              <DynamicBodyEditor
                mentionList={mentionList}
                onChange={debounce(logic.onReplyInputChange, 450)}
                onMention={logic.onMention}
                body={replyContent}
              />
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
          onCreate={logic.createReplyComment}
          onBackEdit={logic.replyBackToEditor}
          onPreview={logic.replyCommentPreview}
        />
      </Wrapper>
    )
  }
}

export default withClickOutside(CommentReplyEditor)
