import { FC, Fragment, memo } from 'react'

import type { TID, TPagedComments, TUser } from '@/spec'
import Pagi from '@/components/Pagi'
import { CommentLoading } from '@/components/Loading'
import { Br } from '@/components/Common'

import Header from './Header'
import List from './List'

import { pageChange } from '../logic'

import { ListsWrapper, CommentBlock } from '../styles/list'

type TProps = {
  accountInfo: TUser
  pagedComments: TPagedComments
  foldedIds: TID[]
  hidedIds: TID[]
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
  foldedIds,
  hidedIds,
  restProps: { loading, loadingFresh, tobeDeleteId, filterType },
}) => (
  <Fragment>
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
          foldedIds={foldedIds}
          hidedIds={hidedIds}
          accountInfo={accountInfo}
          tobeDeleteId={tobeDeleteId}
        />
      )}
    </ListsWrapper>
    <Br bottom={50} />
    <Pagi
      pageNumber={pageNumber}
      pageSize={pageSize}
      totalCount={totalCount}
      onChange={pageChange}
      showBottomMsg
      noMoreMsg="没有更多的评论了"
      emptyMsg="目前还没有评论"
    />
  </Fragment>
)

export default memo(CommentsList)
