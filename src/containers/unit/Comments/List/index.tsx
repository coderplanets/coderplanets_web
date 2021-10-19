import { FC, Fragment, memo } from 'react'

import type { TID, TPagedComments } from '@/spec'
import Pagi from '@/components/Pagi'
import { Br } from '@/components/Common'

import Header from './Header'
import List from './List'

import type { TMode, TFoldState } from '../spec'
import { pageChange } from '../logic'

import { ListsWrapper, CommentBlock } from '../styles/list'

type TProps = {
  totalCommentsCount: number
  pagedComments: TPagedComments
  foldState: TFoldState
  mode: TMode
  restProps: {
    loading: boolean
    tobeDeleteId: string
  }
}

const CommentsList: FC<TProps> = ({
  totalCommentsCount,
  pagedComments,
  foldState,
  mode,
  restProps: { loading, tobeDeleteId },
}) => {
  const { entries, totalCount, pageSize, pageNumber } = pagedComments
  const { foldedIds, isAllFolded } = foldState

  return (
    <Fragment>
      <Header
        totalCount={totalCommentsCount}
        isAllFolded={isAllFolded}
        mode={mode}
        loading={loading}
      />
      <ListsWrapper>
        <List
          mode={mode}
          entries={entries}
          foldedIds={foldedIds}
          tobeDeleteId={tobeDeleteId}
        />
      </ListsWrapper>
      <Br bottom={50} />
      {!loading && (
        <Pagi
          pageNumber={pageNumber}
          pageSize={pageSize}
          totalCount={totalCount}
          onChange={pageChange}
          showBottomMsg
          noMoreMsg="没有更多的讨论了"
          emptyMsg="目前还没有讨论"
        />
      )}
    </Fragment>
  )
}

export default memo(CommentsList)
