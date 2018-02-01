/*
*
* Comments
*
*/

import React from 'react'
// import PropTypes from 'prop-types'
import R from 'ramda'
import { inject, observer } from 'mobx-react'
import { Button } from 'antd'

// import Link from 'next/link'

import {
  makeDebugger,
  getSVGIconPath,
  storeSelector,
  Global,
} from '../../utils'
import * as logic from './logic'

import {
  Wrapper,
  InputWrapper,
  UserAvatar,
  ListTitle,
  ListsWrapper,
  CommentBlock,
  CommentWrapper,
  DeleteOverlay,
  CommentDivider,
  CommentUserInfo,
  CommentAvatar,
  CommentHeader,
  CommentUserName,
  TimeStamps,
  CommentContent,
  CommentBody,
  CommentFooter,
  LikeAction,
  ReplyIcon,
  ReplyAction,
  FooterExtra,
  LikeIcon,
  LeaveResponseText,
} from './styles'

const debug = makeDebugger('C:Comments')

const fakeUser = {
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/bryan_topham/128.jpg',
}

const InputBox = () => (
  <InputWrapper>
    <UserAvatar src={fakeUser.avatar} />
    <LeaveResponseText>留条评论...</LeaveResponseText>
  </InputWrapper>
)

const getSelection = () => {
  const selectText = Global.getSelection().toString()
  if (!R.isEmpty(selectText)) {
    console.log('getSelection', selectText)
    // TODO: then use window.getSelection().getRangeAt(0).getBoundingClientRect() to draw a button
  }
}

const DeleteMask = () => (
  <DeleteOverlay>
    <Button size="small" type="red" ghost>
      取消
    </Button>
    &nbsp;&nbsp;
    <Button size="small" type="red">
      确定删除
    </Button>
  </DeleteOverlay>
)

// use  window.getSelection().toString() to Quote the selection
const Comment = () => (
  <CommentBlock>
    <DeleteMask />
    <CommentWrapper>
      <CommentUserInfo>
        <CommentAvatar src={fakeUser.avatar} />
      </CommentUserInfo>

      <CommentBody onMouseUp={getSelection}>
        <CommentHeader>
          <CommentUserName>mydearxym</CommentUserName>
          <TimeStamps>3天前</TimeStamps>
        </CommentHeader>
        <CommentContent>
          他作为一个大国领导集团的“前线指挥部主任”取得的成就，是几亿中国劳动力和600万解放军共同的成就，而不是他的个人成就。我举个周恩来搞外交的例子无线电报普及之前，外交是一门
        </CommentContent>
        <CommentFooter>
          <LikeAction>
            <LikeIcon path={getSVGIconPath('like')} />
            赞
          </LikeAction>
          <ReplyAction>
            <ReplyIcon path={getSVGIconPath('comment')} />
            回复
          </ReplyAction>
          <ReplyAction>
            <ReplyIcon path={getSVGIconPath('delete')} />
            删除
          </ReplyAction>
          <FooterExtra />
        </CommentFooter>
      </CommentBody>
    </CommentWrapper>
  </CommentBlock>
)

const Lists = () => (
  <ListsWrapper>
    <Comment />
    <CommentDivider />
    <Comment />
  </ListsWrapper>
)

class CommentsContainer extends React.Component {
  componentWillMount() {
    debug('mount')
    logic.init(this.props.comments)
  }

  render() {
    return (
      <Wrapper>
        <ListTitle>评论列表:</ListTitle>
        <InputBox />
        <Lists />
      </Wrapper>
    )
  }
}

// CommentsContainer.propTypes = {
// https://www.npmjs.com/package/prop-types
// }

// CommentsContainer.defaultProps = {}

export default inject(storeSelector('comments'))(observer(CommentsContainer))
