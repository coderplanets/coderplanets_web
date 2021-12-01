/*
 *
 * PagedArticles
 *
 */

import { Fragment, FC, memo } from 'react'
import Pagi from '@/widgets/Pagi'

import type {
  TCommunity,
  TThread,
  TPagedArticles,
  TResState,
  TC11N,
} from '@/spec'
import { EVENT } from '@/constant'
import { send } from '@/utils/helper'
import { buildLog } from '@/utils/logger'

import ArticleList from './ArticleList'
// import CommunityRecommends from './CommunityRecommends'

/* eslint-disable-next-line */
const log = buildLog('c:PagedArticles:index')

type TProps = {
  curCommunity?: TCommunity | null
  thread: TThread
  data: TPagedArticles
  resState: TResState
  // TODO: remove
  emptyPrefix?: string
  c11n: TC11N
}

const PagedArticles: FC<TProps> = ({
  curCommunity = null,
  thread,
  data,
  resState,
  emptyPrefix,
  c11n,
}) => {
  const { entries, ...pagi } = data

  return (
    <Fragment>
      <ArticleList
        curCommunity={curCommunity}
        thread={thread}
        entries={entries}
        resState={resState}
        emptyPrefix={emptyPrefix}
        c11n={c11n}
      />

      <Pagi
        {...pagi}
        onChange={(page) => send(EVENT.REFRESH_ARTICLES, { page })}
        margin={{ bottom: '60px', top: '60px' }}
      >
        {/* <CommunityRecommends /> */}
      </Pagi>
    </Fragment>
  )
}

export default memo(PagedArticles)
