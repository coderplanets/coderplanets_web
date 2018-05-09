import React from 'react'
import { Icon } from 'antd'
import withClickOutside from 'react-click-outside'

import BodyEditor from '../TypeWriter/BodyEditor'

import { ICON_ASSETS, WORD_LIMIT } from '../../config'

import { debounce } from '../../utils'
import * as logic from './logic'

import { AvatarsRow, Space, SpaceGrow } from '../../components'
import Button from '../../components/Button'

import {
  InputFooter,
  InputHelper,
  HelperIcon,
  InputSubmit,
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
} from './styles/comment_replyer'

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

const Header = ({ countCurrent, referUserList }) => {
  return (
    <InputHeaderWrapper>
      <UserAvatar src={fakeUser.avatar} />
      <LeaveResponseUsername>mydearxym</LeaveResponseUsername>
      {referUserList.length > 0 ? (
        <div style={{ display: 'flex' }}>
          <ReferToIcon path={`${ICON_ASSETS}/cmd/refer.svg`} />
          <ReplyAvatars>
            <AvatarsRow
              users={referUserList}
              total={referUserList.length}
              height="20px"
            />
          </ReplyAvatars>
        </div>
      ) : (
        <div />
      )}
      <SpaceGrow />
      <WordsCounter countCurrent={countCurrent} />
    </InputHeaderWrapper>
  )
}

const InputEditor = ({ body, mentions, restProps: { replying } }) => (
  <div className="comment-reply-editor">
    <InputEditorWrapper>
      <BodyEditor
        mentions={mentions}
        onChange={debounce(logic.onReplyInputChange, 450)}
        onMention={logic.onMention}
        body={body}
      />
    </InputEditorWrapper>
    <InputFooter>
      <InputHelper>
        <div onClick={logic.insertCode}>
          <HelperIcon path={`${ICON_ASSETS}/cmd/extra_code.svg`} />
        </div>
        <HelperIcon path={`${ICON_ASSETS}/cmd/extra_quote.svg`} />
        <HelperIcon path={`${ICON_ASSETS}/cmd/extra_image.svg`} />
      </InputHelper>

      <InputSubmit className="fuckingyou">
        <Button type="primary" ghost size="small">
          预<Space right="5px" />览
        </Button>
        <Space right="10px" />
        {!replying ? (
          <Button
            type="primary"
            size="small"
            onClick={logic.createReplyComment}
          >
            提<Space right="5px" />交
          </Button>
        ) : (
          <Button type="primary" size="small">
            <Icon type="loading" />提<Space right="5px" />交
          </Button>
        )}
      </InputSubmit>
    </InputFooter>
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
      referUserList,
      restProps: { countCurrent, replyContent, replyToComment },
    } = this.props

    return (
      <Container>
        <Header countCurrent={countCurrent} referUserList={referUserList} />
        <ReplyToBar comment={replyToComment} />
        <InputEditor
          mentions={mentions}
          body={replyContent}
          restProps={{ ...this.props }}
        />
      </Container>
    )
  }
}

export default withClickOutside(CommentReplyEditor)
