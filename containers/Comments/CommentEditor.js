import React from 'react'
import { Button, Icon } from 'antd'
import withClickOutside from 'react-click-outside'

import BodyEditor from '../TypeWriter/BodyEditor'

import { ICON_ASSETS, WORD_LIMIT } from '../../config'

import { debounce } from '../../utils'
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
  ReferToIcon,
  CounterWrapper,
  CounterSpliter,
  CounterCur,
  CounterTotal,
} from './styles/comment_editor'

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

const Header = ({ showInputEditor, countCurrent, referUserList }) => {
  if (showInputEditor) {
    return (
      <InputHeaderWrapper>
        <UserAvatar src={fakeUser.avatar} />
        <LeaveResponseUsername>mydearxym</LeaveResponseUsername>
        {referUserList.length > 0 ? (
          <div style={{ display: 'flex' }}>
            <ReferToIcon path={`${ICON_ASSETS}/cmd/refer.svg`} />
            <ReplyAvatars>
              <AvatarsRow users={referUserList} total={3} height="20px" />
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

  return (
    <InputHeaderWrapper>
      <UserAvatar src={fakeUser.avatar} />
      <LeaveResponseText onClick={logic.openCommentEditor}>
        留条评论...
      </LeaveResponseText>
    </InputHeaderWrapper>
  )
}

const InputEditor = ({
  showInputEditor,
  body,
  mentions,
  restProps: { creating },
}) => (
  <div className="comment-editor">
    <InputEditorWrapper showInputEditor={showInputEditor}>
      <BodyEditor
        mentions={mentions}
        onChange={debounce(logic.onCommentInputChange, 450)}
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

      <InputSubmit>
        <Button type="primary" ghost size="small">
          预<Space right="5px" />览
        </Button>
        <Space right="10px" />
        {!creating ? (
          <Button type="primary" size="small" onClick={logic.createComment}>
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

class CommentEditor extends React.Component {
  /* eslint-disable */
  handleClickOutside() {
    logic.onCommentInputBlur()
  }
  /* eslint-enable */

  render() {
    const {
      referUserList,
      restProps: { countCurrent, showInputEditor, editContent },
    } = this.props

    return (
      <Container showInputEditor={showInputEditor}>
        <Header
          showInputEditor={showInputEditor}
          countCurrent={countCurrent}
          referUserList={referUserList}
        />
        {showInputEditor ? (
          <InputEditor
            mentions={mentions}
            showInputEditor={showInputEditor}
            body={editContent}
            restProps={{ ...this.props }}
          />
        ) : (
          <div />
        )}
      </Container>
    )
  }
}

export default withClickOutside(CommentEditor)
