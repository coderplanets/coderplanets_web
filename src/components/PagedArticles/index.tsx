/*
 *
 * PagedArticles
 *
 */

import { Fragment, FC, memo } from 'react'

import type { TThread, TPagedArticles, TResState, TArticle } from '@/spec'
import { EVENT } from '@/constant'
import { buildLog, send } from '@/utils'

import Pagi from '@/components/Pagi'
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
}

const PagedArticles: FC<TProps> = ({
  thread,
  data,
  resState,
  viewingArticle,
  emptyPrefix,
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
