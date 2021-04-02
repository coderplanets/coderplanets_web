import React from 'react'

import type { TAccount, TComment, TPagedComments, TUser } from '@/spec'
import Pagi from '@/components/Pagi'
import { CommentLoading } from '@/components/LoadingEffects'
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

type TListsProps = {
  entries: TComment[]
  tobeDeleteId: string
  accountInfo: TAccount
}

const Lists: React.FC<TListsProps> = ({
  entries,
  tobeDeleteId,
  accountInfo,
}) => (
  <>
    {entries.map((c) => (
      <Comment
        key={c.id}
        data={c}
        tobeDeleteId={tobeDeleteId}
        accountInfo={accountInfo}
      />
    ))}
  </>
)

type TTotalCountTextProps = {
  count: number
}

const TotalCountText: React.FC<TTotalCountTextProps> = ({ count }) => (
  <TotalCountWrapper>
    {count > 0 && (
      <ListTitle id="lists-info">
        共收到 <TotalNum>{count}</TotalNum> 条评论:
      </ListTitle>
    )}
  </TotalCountWrapper>
)

type TProps = {
  accountInfo: TUser
  pagedComments: TPagedComments
  restProps: {
    loading: boolean
    loadingFresh: boolean
    tobeDeleteId: string
    filterType: string
  }
}

const CommentsList: React.FC<TProps> = ({
  accountInfo,
  pagedComments: { entries, totalCount, pageSize, pageNumber },
  restProps: { loading, loadingFresh, tobeDeleteId, filterType },
}) => (
  <>
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
          tobeDeleteId={tobeDeleteId}
        />
      )}
    </ListsContainer>
    <Pagi
      pageNumber={pageNumber}
      pageSize={pageSize}
      totalCount={totalCount}
      onChange={pageChange}
      showBottomMsg
      noMoreMsg="没有更多的评论了"
      emptyMsg="目前还没有评论"
    />
  </>
)

export default React.memo(CommentsList)
