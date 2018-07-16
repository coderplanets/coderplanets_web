import React from 'react'
import withClickOutside from 'react-click-outside'

import BodyEditor from '../TypeWriter/BodyEditor'

import { ICON_ASSETS, WORD_LIMIT } from '../../config'

import { debounce } from '../../utils'
import * as logic from './logic'

import { AvatarsRow, SpaceGrow, MarkDownRender } from '../../components'

import {
  InputEditorWrapper,
  Container,
  InputHeaderWrapper,
  UserAvatar,
  LeaveResponseUsername,
  ReplyAvatars,
  ReferToIcon,
  CounterWrapper,
  CounterSpliter,
  CounterCur,
  CounterTotal,
  ReplyBar,
  ReplyToBody,
  ReplyToFloor,
  PreviewWrapper,
} from './styles/comment_replyer'

import EditorFooter from './EditorFooter'

const fakeUser = {
  avatar:
    'https://coderplanets.oss-cn-beijing.aliyuncs.com/icons/fakeuser/10.jpg',
}

const WordsCounter = ({ countCurrent }) => (
  <CounterWrapper>
    <CounterCur num={countCurrent}>{countCurrent}</CounterCur>
    <CounterSpliter>/</CounterSpliter>
    <CounterTotal>{WORD_LIMIT.COMMENT}</CounterTotal>
  </CounterWrapper>
)

const Header = ({ countCurrent, referUsers, showPreview }) => {
  return (
    <InputHeaderWrapper>
      <UserAvatar src={fakeUser.avatar} />
      <LeaveResponseUsername>mydearxym</LeaveResponseUsername>
      {referUsers.length > 0 ? (
        <div style={{ display: 'flex' }}>
          <ReferToIcon src={`${ICON_ASSETS}/cmd/refer.svg`} />
          <ReplyAvatars>
            <AvatarsRow
              users={referUsers}
              total={referUsers.length}
              height="20px"
            />
          </ReplyAvatars>
        </div>
      ) : (
        <div />
      )}
      <SpaceGrow />
      {showPreview ? <div /> : <WordsCounter countCurrent={countCurrent} />}
    </InputHeaderWrapper>
  )
}

const InputEditor = ({ body, mentions }) => (
  <div className="comment-reply-editor">
    <InputEditorWrapper>
      <BodyEditor
        mentions={mentions}
        onChange={debounce(logic.onReplyInputChange, 450)}
        onMention={logic.onMention}
        body={body}
      />
    </InputEditorWrapper>
  </div>
)

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

const ReplyToBar = ({ comment }) => {
  if (!comment) return <div />
  return (
    <ReplyBar>
      回复&nbsp;{comment.author.nickname}:
      <ReplyToBody>{comment.body}</ReplyToBody>
      <ReplyToFloor>#{comment.floor}</ReplyToFloor>
    </ReplyBar>
  )
}

class CommentReplyEditor extends React.Component {
  /* eslint-disable */
  handleClickOutside() {
    console.log('点外面哈哈')
    logic.closeReplyBox()
    logic.onCommentInputBlur()
  }
  /* eslint-enable */

  render() {
    const {
      referUsers,
      show,
      showReplyPreview,
      restProps: { countCurrent, replyContent, replyToComment, replying },
    } = this.props

    return (
      <Container>
        <Header
          countCurrent={countCurrent}
          referUsers={referUsers}
          showPreview={showReplyPreview}
        />
        <ReplyToBar comment={replyToComment} />
        {show ? (
          <InputEditor
            mentions={mentions}
            body={replyContent}
            restProps={{ ...this.props }}
          />
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
      </Container>
    )
  }
}

export default withClickOutside(CommentReplyEditor)
