import R from 'ramda'
import React from 'react'
import { Button } from 'antd'
import shortid from 'shortid'

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
  CommentBodyInfo,
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

/*
const fakeUser = {
  avatar:
    'https://coderplanets.oss-cn-beijing.aliyuncs.com/icons/fakeuser/6.jpg',
}
*/

const Comment = ({ data }) => (
  <CommentBlock>
    <DeleteMask />
    <CommentWrapper>
      <CommentUserInfo>
        <CommentAvatar src={data.author.avatar} />
      </CommentUserInfo>

      <CommentBodyInfo onMouseUp={getSelection}>
        <CommentHeader>
          <CommentHeaderFirst>
            <CommentUserName>
              {data.author.nickname}
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
        <CommentContent>{data.body}</CommentContent>
        <CommentFooter>
          <Actions>
            <VisiableAction>
              <UpIcon path={`${ICON_ASSETS}/cmd/up.svg`} />
              <ActionNumber>{prettyNum(data.likesCount)}</ActionNumber>
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
      </CommentBodyInfo>
    </CommentWrapper>
  </CommentBlock>
)

const CommentsList = ({ entries, totalCount }) => (
  <div>
    <ListTitle>
      收到 <TotalNum>{totalCount}</TotalNum> 条评论:
    </ListTitle>
    <ListsContainer>
      {entries.map(c => (
        <div key={shortid.generate()}>
          <Comment data={c} />
          <CommentDivider />
        </div>
      ))}
    </ListsContainer>
  </div>
)

export default CommentsList
