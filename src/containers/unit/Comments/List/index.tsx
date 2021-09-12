import { FC, Fragment, memo } from 'react'

import type { TID, TPagedComments } from '@/spec'
import Pagi from '@/components/Pagi'
import { CommentLoading } from '@/components/Loading'
import { Br } from '@/components/Common'

import Header from './Header'
import List from './List'

import type { TMode } from '../spec'
import { pageChange } from '../logic'

import { ListsWrapper, CommentBlock } from '../styles/list'

type TProps = {
  totalCommentsCount: number
  pagedComments: TPagedComments
  foldedIds: TID[]
  isAllFolded: boolean
  mode: TMode
  restProps: {
    loading: boolean
    loadingFresh: boolean
    tobeDeleteId: string
  }
}

const CommentsList: FC<TProps> = ({
  totalCommentsCount,
  pagedComments: { entries, totalCount, pageSize, pageNumber },
  foldedIds,
  isAllFolded,
  mode,
  restProps: { loading, loadingFresh, tobeDeleteId },
}) => (
  <Fragment>
    <Header
      totalCount={totalCommentsCount}
      isAllFolded={isAllFolded}
      mode={mode}
      loading={loading}
    />
    {loadingFresh && (
      <CommentBlock>
        <CommentLoading />
      </CommentBlock>
    )}
    <ListsWrapper>
      <List
        mode={mode}
        entries={entries}
        foldedIds={foldedIds}
        tobeDeleteId={tobeDeleteId}
      />
      {/* <CommentBlock>
          <CommentLoading />
        </CommentBlock> */}
    </ListsWrapper>
    <Br bottom={50} />
    <Pagi
      pageNumber={pageNumber}
      pageSize={pageSize}
      totalCount={totalCount}
      onChange={pageChange}
      showBottomMsg
      noMoreMsg="没有更多的讨论了"
      emptyMsg="目前还没有讨论"
    />
  </Fragment>
)

export default memo(CommentsList)
