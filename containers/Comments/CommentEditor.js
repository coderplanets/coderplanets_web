import React from 'react'
import withClickOutside from 'react-click-outside'
import dynamic from 'next/dynamic'

import { ICON_CMD, WORD_LIMIT } from '../../config'

import { debounce } from '../../utils'
import * as logic from './logic'

import { AvatarsRow, SpaceGrow, MarkDownRender } from '../../components'

import {
  InputEditorWrapper,
  Container,
  InputHeaderWrapper,
  UserAvatar,
  LeaveResponseText,
  LeaveResponseUsername,
  ReplyAvatars,
  ReferToIcon,
  CounterWrapper,
  CounterSpliter,
  CounterCur,
  CounterTotal,
  PreviewerWrapper,
} from './styles/comment_editor'

import EditorFooter from './EditorFooter'

const DynamicBodyEditor = dynamic({
  loader: () => import('../TypeWriter/BodyEditor'),
  /* eslint-disable */
  loading: () => <div>loading</div>,
  /* eslint-enable */
})

const WordsCounter = ({ countCurrent }) => (
  <CounterWrapper>
    <CounterCur num={countCurrent}>{countCurrent}</CounterCur>
    <CounterSpliter>/</CounterSpliter>
    <CounterTotal>{WORD_LIMIT.COMMENT}</CounterTotal>
  </CounterWrapper>
)

const Header = ({
  accountInfo,
  showInputEditor,
  showInputPreview,
  countCurrent,
  referUsers,
}) => {
  if (showInputEditor) {
    return (
      <InputHeaderWrapper>
        <UserAvatar src={accountInfo.avatar} />
        <LeaveResponseUsername>{accountInfo.nickname}</LeaveResponseUsername>
        {referUsers.length > 0 ? (
          <div style={{ display: 'flex' }}>
            <ReferToIcon src={`${ICON_CMD}/refer.svg`} />
            <ReplyAvatars>
              <AvatarsRow
                users={referUsers}
                total={referUsers.length}
                height="20px"
              />
            </ReplyAvatars>
          </div>
        ) : null}
        <SpaceGrow />
        <WordsCounter countCurrent={countCurrent} />
      </InputHeaderWrapper>
    )
  }
  if (showInputPreview) {
    return (
      <InputHeaderWrapper>
        <UserAvatar src={accountInfo.avatar} />
        <LeaveResponseUsername>{accountInfo.nickname}</LeaveResponseUsername>
      </InputHeaderWrapper>
    )
  }
  return (
    <InputHeaderWrapper>
      <UserAvatar src={accountInfo.avatar} />
      <LeaveResponseText onClick={logic.openInputBox}>
        留条评论...
      </LeaveResponseText>
    </InputHeaderWrapper>
  )
}

// onChange={debounce(logic.onCommentInputChange, 450)}
// onChange={logic.onCommentInputChange}

const InputEditor = ({
  showInputEditor,
  showInputPreview,
  body,
  mentions,
  restProps: { creating },
}) => (
  <div className="comment-editor">
    <InputEditorWrapper showInputEditor={showInputEditor}>
      <DynamicBodyEditor
        mentions={mentions}
        onChange={debounce(logic.onCommentInputChange, 200)}
        onMention={logic.onMention}
        body={body}
      />
    </InputEditorWrapper>

    <EditorFooter
      loading={creating}
      showPreview={showInputPreview}
      onCreate={logic.createComment}
      onBackEdit={logic.backToEditor}
      onPreview={logic.createCommentPreview}
    />
    {/* <Footer loading={creating} showPreview={showInputPreview} /> */}
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

class CommentEditor extends React.Component {
  /* eslint-disable */
  handleClickOutside() {
    logic.onCommentInputBlur()
  }
  /* eslint-enable */

  render() {
    const {
      referUsers,
      accountInfo,
      restProps: {
        countCurrent,
        showInputBox,
        showInputEditor,
        showInputPreview,
        editContent,
        creating,
      },
    } = this.props

    return (
      <Container show={showInputBox}>
        <Header
          accountInfo={accountInfo}
          showInputEditor={showInputEditor}
          showInputPreview={showInputPreview}
          countCurrent={countCurrent}
          referUsers={referUsers}
        />
        {showInputEditor ? (
          <InputEditor
            mentions={mentions}
            showInputPreview={showInputPreview}
            showInputEditor={showInputEditor}
            body={editContent}
            restProps={{ ...this.props }}
          />
        ) : null}
        {showInputPreview ? (
          <div>
            <PreviewerWrapper>
              <MarkDownRender body={editContent} />
            </PreviewerWrapper>
            <EditorFooter
              loading={creating}
              showPreview={showInputPreview}
              onCreate={logic.createComment}
              onBackEdit={logic.backToEditor}
              onPreview={logic.createCommentPreview}
            />
          </div>
        ) : null}
      </Container>
    )
  }
}

export default withClickOutside(CommentEditor)
