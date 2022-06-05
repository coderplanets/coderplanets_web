import { FC, Fragment, memo } from 'react'

import type { TPagedComments } from '@/spec'
import Pagi from '@/widgets/Pagi'
import { Br } from '@/widgets/Common'

import List from './List'

import type { TMode, TFoldState, TRepliesState, TAPIMode } from '../spec'
import { onPageChange } from '../logic'

import { ListsWrapper } from '../styles/list'

type TProps = {
  pagedComments: TPagedComments
  foldState: TFoldState
  mode: TMode
  apiMode: TAPIMode
  repliesState: TRepliesState
  // basicState: TCommentsState
  loading: boolean
}

const CommentsList: FC<TProps> = ({
  pagedComments,
  foldState,
  mode,
  apiMode,
  repliesState,
  loading,
}) => {
  const { entries, totalCount, pageSize, pageNumber } = pagedComments
  const { foldedIds } = foldState

  return (
    <Fragment>
      <ListsWrapper>
        <List
          mode={mode}
          apiMode={apiMode}
          entries={entries}
          repliesState={repliesState}
          foldedIds={foldedIds}
        />
      </ListsWrapper>
      <Br bottom={50} />
      {!loading && (
        <Pagi
          pageNumber={pageNumber}
          pageSize={pageSize}
          totalCount={totalCount}
          onChange={onPageChange}
          showBottomMsg
          noMoreMsg="没有更多的讨论了"
          emptyMsg="目前还没有讨论"
        />
      )}
    </Fragment>
  )
}

export default memo(CommentsList)
