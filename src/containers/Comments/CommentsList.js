import React from 'react'

import Pagi from '@components/Pagi'

import { CommentLoading } from '@components/LoadingEffects'
import CommentsFilter from './CommentsFilter'
import Comment from './Comment'

import { pageChange } from './logic'

import {
  ListsContainer,
  ListTitle,
  TotalHeader,
  TotalCountWrapper,
  TotalNum,
  CommentBlock,
} from './styles/comments_list'

const Lists = ({ entries, tobeDeleteId, accountInfo }) => (
  <React.Fragment>
    {entries.map(c => (
      <Comment
        key={c.id}
        data={c}
        tobeDeleteId={tobeDeleteId}
        accountInfo={accountInfo}
      />
    ))}
  </React.Fragment>
)

const TotalCountText = ({ count }) => (
  <TotalCountWrapper>
    {count > 0 && (
      <ListTitle id="lists-info">
        共收到 <TotalNum>{count}</TotalNum> 条评论:
      </ListTitle>
    )}
  </TotalCountWrapper>
)

const CommentsList = ({
  accountInfo,
  pagedComments: { entries, totalCount, pageSize, pageNumber },
  restProps: { loading, loadingFresh, tobeDeleteId, filterType },
}) => (
  <React.Fragment>
    <TotalHeader>
      <TotalCountText count={totalCount} />
      <CommentsFilter filterType={filterType} show={totalCount >= 2} />
    </TotalHeader>
    {loadingFresh && (
      <CommentBlock>
        <CommentLoading />
      </CommentBlock>
    )}
    <ListsContainer>
      {loading ? (
        <CommentBlock>
          <CommentLoading />
        </CommentBlock>
      ) : (
        <Lists
          entries={entries}
          accountInfo={accountInfo}
          pageSize={pageSize}
          pageNumber={pageNumber}
          tobeDeleteId={tobeDeleteId}
        />
      )}
    </ListsContainer>
    <Pagi
      left="-10px"
      pageNumber={pageNumber}
      pageSize={pageSize}
      totalCount={totalCount}
      onChange={pageChange}
      showBottomMsg
      noMoreMsg="没有更多的评论了"
      emptyMsg="目前还没有评论"
    />
  </React.Fragment>
)

export default CommentsList
