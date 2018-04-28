import React from 'react'

import { Button } from 'antd'
import BodyEditor from '../TypeWriter/BodyEditor'

import { ICON_ASSETS } from '../../config'

import { fakeUsers, getRandomInt } from '../../utils'
import * as logic from './logic'

import { AvatarsRow, Space, SpaceGrow } from '../../components'

import {
  InputFooter,
  InputHelper,
  HelperIcon,
  InputSubmit,
  InputEditorWrapper,
  Container,
  InputHeaderWrapper,
  UserAvatar,
  LeaveResponseText,
  LeaveResponseUsername,
  ReplyAvatars,
  ReplyHint,
  CounterWrapper,
  CounterSpliter,
  CounterCur,
  CounterTotal,
} from './styles/comment_editor'

const fakeUser = {
  avatar: 'http://coderplanets.oss-cn-beijing.aliyuncs.com/mock/avatar20.png',
}

const WordsCounter = () => (
  <CounterWrapper>
    <CounterCur>22</CounterCur>
    <CounterSpliter>/</CounterSpliter>
    <CounterTotal>500</CounterTotal>
  </CounterWrapper>
)

const Header = ({ showInputEditor, onInput }) => {
  if (showInputEditor) {
    return (
      <InputHeaderWrapper>
        <UserAvatar src={fakeUser.avatar} />
        <LeaveResponseUsername onClick={onInput}>
          mydearxym
        </LeaveResponseUsername>
        <ReplyHint>回复:</ReplyHint>
        <ReplyAvatars>
          <AvatarsRow
            users={fakeUsers.slice(1, getRandomInt(3, fakeUsers.length))}
            total={3}
            height="20px"
          />
        </ReplyAvatars>
        <SpaceGrow />
        <WordsCounter />
      </InputHeaderWrapper>
    )
  }

  return (
    <InputHeaderWrapper>
      <UserAvatar src={fakeUser.avatar} />
      <LeaveResponseText onClick={onInput}>留条评论...</LeaveResponseText>
    </InputHeaderWrapper>
  )
}

const InputEditor = ({ showInputEditor, onBlur }) => {
  if (showInputEditor) {
    return (
      <div>
        <InputEditorWrapper showInputEditor={showInputEditor}>
          <BodyEditor
            onChange={logic.onCommentInputChange}
            body=""
            onBlur={onBlur}
          />
        </InputEditorWrapper>
        <InputFooter>
          <InputHelper>
            <HelperIcon path={`${ICON_ASSETS}/cmd/extra_code.svg`} />
            <HelperIcon path={`${ICON_ASSETS}/cmd/extra_quote.svg`} />
            <HelperIcon path={`${ICON_ASSETS}/cmd/extra_image.svg`} />
          </InputHelper>

          <InputSubmit>
            <Button type="primary" ghost size="small">
              预<Space right="5px" />览
            </Button>
            <Space right="10px" />
            <Button type="primary" size="small">
              提<Space right="5px" />交
            </Button>
          </InputSubmit>
        </InputFooter>
      </div>
    )
  }

  return <div />
}

const CommentEditor = ({ onInput, showInputEditor }) => (
  <Container showInputEditor={showInputEditor}>
    <Header showInputEditor={showInputEditor} onInput={onInput} />
    <InputEditor
      showInputEditor={showInputEditor}
      onBlur={logic.onCommentInputBlur}
    />
  </Container>
)

export default CommentEditor
