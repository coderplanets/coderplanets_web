/*
 *
 * PagedArticles
 *
 */

import { Fragment, FC, memo } from 'react'
import dynamic from 'next/dynamic'

import type {
  TThread,
  TPagedArticles,
  TResState,
  TArticle,
  TC11N,
} from '@/spec'
import { EVENT } from '@/constant'
import { buildLog, send } from '@/utils'

import ArticleList from './ArticleList'
// import CommunityRecommends from './CommunityRecommends'

/* eslint-disable-next-line */
const log = buildLog('c:PagedArticles:index')

export const Pagi = dynamic(() => import('@/components/Pagi'), {
  ssr: false,
})

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
