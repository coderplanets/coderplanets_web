import R from 'ramda'
import React from 'react'
import { Button } from 'antd'

import { ICON_ASSETS } from '../../config'
import { fakeUsers, getRandomInt, Global, prettyNum } from '../../utils'

import { AvatarsRow, SpaceGrow } from '../../components'

import {
  ListsContainer,
  ListTitle,
  TotalNum,
  FloorNum,
  CommentBlock,
  CommentWrapper,
  DeleteOverlay,
  DeleteHintText,
  DeleteBtnGroup,
  CommentDivider,
  CommentUserInfo,
  CommentAvatar,
  CommentHeader,
  CommentUserName,
  TimeStamps,
  CommentContent,
  CommentBody,
  CommentFooter,
  Actions,
  VisiableAction,
  ReplyIcon,
  ReplyAction,
  CommentHeaderFirst,
  ReplyUsers,
  ReplyTitle,
  ActionNumber,
  UpIcon,
  DownIcon,
} from './styles/comments_list'

const getSelection = () => {
  const selectText = Global.getSelection().toString()
  if (!R.isEmpty(selectText)) {
    console.log('getSelection', selectText)
    // TODO: then use window.getSelection().getRangeAt(0).getBoundingClientRect() to draw a button
  }
}

const DeleteMask = () => (
  <DeleteOverlay>
    <DeleteHintText>删除后该内容将不可恢复</DeleteHintText>
    <DeleteBtnGroup>
      <Button size="small" type="red" ghost>
        取消
      </Button>
      &nbsp;&nbsp;
      <Button size="small" type="red">
        确定删除
      </Button>
    </DeleteBtnGroup>
  </DeleteOverlay>
)

const fakeUser = {
  avatar:
    'https://coderplanets.oss-cn-beijing.aliyuncs.com/icons/fakeuser/6.jpg',
}

const Comment = () => (
  <CommentBlock>
    <DeleteMask />
    <CommentWrapper>
      <CommentUserInfo>
        <CommentAvatar src={fakeUser.avatar} />
      </CommentUserInfo>

      <CommentBody onMouseUp={getSelection}>
        <CommentHeader>
          <CommentHeaderFirst>
            <CommentUserName>
              mydearxym
              <FloorNum>#3</FloorNum>
            </CommentUserName>
            <ReplyUsers>
              <ReplyTitle>回复:</ReplyTitle>
              <AvatarsRow
                users={fakeUsers.slice(1, getRandomInt(3, fakeUsers.length))}
                total={3}
              />
            </ReplyUsers>
          </CommentHeaderFirst>
          <TimeStamps>2017-10-21</TimeStamps>
        </CommentHeader>
        <CommentContent>
          他作为一个大国领导集团的“前线指挥部主任”取得的成就，是几亿中国劳动力和600万解放军共同的成就，而不是他的个人成就。我举个周恩来搞外交的例子无线电报普及之前，外交是一门
        </CommentContent>
        <CommentFooter>
          <Actions>
            <VisiableAction>
              <UpIcon path={`${ICON_ASSETS}/cmd/up.svg`} />
              <ActionNumber>{prettyNum(198)}</ActionNumber>
            </VisiableAction>
            <VisiableAction>
              <DownIcon path={`${ICON_ASSETS}/cmd/up.svg`} />
              <ActionNumber>{prettyNum(22)}</ActionNumber>
            </VisiableAction>
            <SpaceGrow />
            <ReplyAction>
              <ReplyIcon path={`${ICON_ASSETS}/cmd/nest_comment.svg`} />
              回复
            </ReplyAction>
            <ReplyAction>
              <ReplyIcon path={`${ICON_ASSETS}/cmd/delete.svg`} />
              删除
            </ReplyAction>
          </Actions>
        </CommentFooter>
      </CommentBody>
    </CommentWrapper>
  </CommentBlock>
)

const CommentsList = () => (
  <div>
    <ListTitle>
      收到 <TotalNum>35</TotalNum> 条评论:
    </ListTitle>
    <ListsContainer>
      <Comment />
      <CommentDivider />
      <Comment />
    </ListsContainer>
  </div>
)

export default CommentsList
