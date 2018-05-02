import R from 'ramda'
import React from 'react'
import { Button } from 'antd'
import TimeAgo from 'timeago-react'
import shortid from 'shortid'

import { ICON_ASSETS } from '../../config'
/* import { fakeUsers, getRandomInt, Global, prettyNum } from '../../utils' */
import { Global, prettyNum } from '../../utils'

import { AvatarsRow, SpaceGrow, Pagi, CommentLoading } from '../../components'

import * as logic from './logic'

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

const Comment = ({ data, floorNum, referUserList }) => (
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
              <FloorNum>#{floorNum}</FloorNum>
            </CommentUserName>
            <ReplyUsers>
              <ReplyTitle>回复:</ReplyTitle>
              <AvatarsRow users={referUserList} total={3} />
            </ReplyUsers>
          </CommentHeaderFirst>
          <TimeStamps>
            <TimeAgo datetime={data.insertedAt} locale="zh_CN" />
          </TimeStamps>
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
              <ActionNumber>{prettyNum(data.dislikesCount)}</ActionNumber>
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

// TODO: movit to utils
const getFloorNum = (index, pageNumber, pageSize) =>
  index + 1 + (pageNumber - 1) * pageSize

const Lists = ({ entries, pageNumber, pageSize, referUserList }) => (
  <div>
    {entries.map((c, index) => (
      <div key={shortid.generate()}>
        <Comment
          data={c}
          referUserList={referUserList}
          floorNum={getFloorNum(index, pageNumber, pageSize)}
        />
      </div>
    ))}
  </div>
)

const CommentsList = ({
  entries,
  restProps: {
    totalCount,
    pageSize,
    pageNumber,
    loading,
    loadingFresh,
    referUserList,
  },
}) => (
  <div>
    {totalCount > 0 ? (
      <ListTitle id="lists-info">
        收到 <TotalNum>{totalCount}</TotalNum> 条评论:
      </ListTitle>
    ) : (
      <div />
    )}
    {loadingFresh ? (
      <CommentBlock>
        <CommentLoading />
      </CommentBlock>
    ) : (
      <div />
    )}
    <ListsContainer>
      {loading ? (
        <CommentBlock>
          <CommentLoading />
        </CommentBlock>
      ) : (
        <Lists
          entries={entries}
          referUserList={referUserList}
          pageSize={pageSize}
          pageNumber={pageNumber}
        />
      )}
    </ListsContainer>

    <Pagi
      left="-10px"
      pageNumber={pageNumber}
      pageSize={pageSize}
      totalCount={totalCount}
      onChange={logic.pageChange}
    />
  </div>
)

export default CommentsList
