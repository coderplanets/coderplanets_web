import React from 'react'
import withClickOutside from 'react-click-outside'
import dynamic from 'next/dynamic'

import MarkDownRender from '../../components/MarkDownRender'
import ReplyToBar from './ReplyToBar'
import ReplyEditorHeader from './ReplyEditorHeader'

import {
  Wrapper,
  InputEditorWrapper,
  PreviewWrapper,
} from './styles/comment_reply_editor'

import EditorFooter from './EditorFooter'

import { debounce } from '../../utils'
import * as logic from './logic'

const DynamicBodyEditor = dynamic({
  loader: () => import('../../components/MarkdownEditor'),
  /* eslint-disable */
  loading: () => <div>loading</div>,
  /* eslint-enable */
})

const mentions = [
  {
    id: 112,
    name: 'mydearxym',
    avatar: 'https://avatars2.githubusercontent.com/u/6184465?v=4',
  },
  {
    id: 113,
    name: 'Julian',
    avatar: 'http://coderplanets.oss-cn-beijing.aliyuncs.com/mock/avatar4.png',
  },
]

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
      accountInfo,
      showReplyPreview,
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
        <ReplyToBar comment={replyToComment} />
        {show ? (
          <div className="comment-reply-editor">
            <InputEditorWrapper>
              <DynamicBodyEditor
                mentions={mentions}
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
