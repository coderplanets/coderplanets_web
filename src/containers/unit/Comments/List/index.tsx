import React, { FC } from 'react'

import type { TPagedComments, TUser } from '@/spec'
import Pagi from '@/components/Pagi'
import { CommentLoading } from '@/components/LoadingEffects'

import Header from './Header'
import List from './List'

import { pageChange } from '../logic'

import { ListsWrapper, CommentBlock } from '../styles/list'

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

const CommentsList: FC<TProps> = ({
  accountInfo,
  pagedComments: { entries, totalCount, pageSize, pageNumber },
  restProps: { loading, loadingFresh, tobeDeleteId, filterType },
}) => (
  <React.Fragment>
    <Header totalCount={totalCount} filterType={filterType} />
    {loadingFresh && (
      <CommentBlock>
        <CommentLoading />
      </CommentBlock>
    )}
    <ListsWrapper>
      {loading ? (
        <CommentBlock>
          <CommentLoading />
        </CommentBlock>
      ) : (
        <List
          entries={entries}
          accountInfo={accountInfo}
          tobeDeleteId={tobeDeleteId}
        />
      )}
    </ListsWrapper>
    <Pagi
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

export default React.memo(CommentsList)
