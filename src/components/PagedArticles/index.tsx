/*
 *
 * PagedArticles
 *
 */

import { Fragment, FC, memo } from 'react'
import Pagi from '@/components/Pagi'

import type {
  TThread,
  TPagedArticles,
  TResState,
  TArticle,
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
  thread: TThread
  data: TPagedArticles
  resState: TResState
  // TODO: remove
  emptyPrefix?: string
  viewingArticle: TArticle
  c11n: TC11N
}

const PagedArticles: FC<TProps> = ({
  thread,
  data,
  resState,
  viewingArticle,
  emptyPrefix,
  c11n,
}) => {
  const { entries, ...pagi } = data

  return (
    <Fragment>
      <ArticleList
        thread={thread}
        activeId={viewingArticle.id}
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
        <div>todo</div>
        {/* <CommunityRecommends /> */}
      </Pagi>
    </Fragment>
  )
}

export default memo(PagedArticles)
