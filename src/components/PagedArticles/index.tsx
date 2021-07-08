/*
 *
 * PagedArticles
 *
 */

import { Fragment, FC, memo } from 'react'

import type { TThread, TArticle } from '@/spec'
import { buildLog } from '@/utils'

import Pagi from '@/components/Pagi'
import ContentList from './ContentList'
import CommunityRecommends from './CommunityRecommends'

/* eslint-disable-next-line */
const log = buildLog('c:PagedArticles:index')

type TProps = {
  thread: TThread
  active: TArticle
  data: {
    entries: TArticle[]
    totalPages: number
    totalCount: number
    pageSize: number
    pageNumber: number
  }
  curView: string
  onPreview: (article: TArticle) => void
  onPageChange: () => void
  // TODO: remove
  emptyPrefix?: string
}

const PagedArticles: FC<TProps> = ({
  thread,
  active,
  data,
  curView,
  onPageChange,
  onPreview,
  emptyPrefix,
}) => {
  const { entries, ...pagi } = data

  return (
    <Fragment>
      <ContentList
        thread={thread}
        active={active}
        entries={entries}
        curView={curView}
        emptyPrefix={emptyPrefix}
        onPreview={onPreview}
      />

      <Pagi
        {...pagi}
        onChange={onPageChange}
        margin={{ bottom: '60px', top: '60px' }}
      >
        <CommunityRecommends />
      </Pagi>
    </Fragment>
  )
}

// PagedArticles.propTypes = {
//   curView: T.oneOf([
//     TYPE.RESULT,
//     TYPE.LOADING,
//     TYPE.NOT_FOUND,
//     TYPE.RESULT_EMPTY,
//   ]),
//   emptyPrefix: T.string,
//   // community: T.string,
// }

// PagedArticles.defaultProps = {
//   thread: THREAD.POST,
//   active: {},
//   curView: TYPE.LOADING,
//   emptyPrefix: '',
//   community: 'javascript',
//   onPageChange: log,
//   onPreview: log,
//   onUserSelect: log,
//   onAuthorSelect: log,
//   accountInfo: {
//     isLogin: false,
//     customization: T.shape({
//       markViewed: true,
//       displayDensity: '20',
//     }),
//   },
// }

export default memo(PagedArticles)
