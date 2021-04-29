/*
 *
 * PagedContents
 *
 */

import React from 'react'
import T from 'prop-types'

import { TYPE, THREAD, C11N } from '@/constant'
import { buildLog } from '@/utils'

import Pagi from '@/components/Pagi'
import ContentList from './ContentList'
import CommunityRecommends from './CommunityRecommends'

/* eslint-disable-next-line */
const log = buildLog('c:PagedContents:index')

const PagedContents = ({
  thread,
  active,
  data: { entries, pageNumber, pageSize, totalCount },
  curView,
  onPageChange,
  onPreview,
  onUserSelect,
  onAuthorSelect,
  emptyPrefix,
  community,
  accountInfo,
}) => {
  const pagiInfo = {
    pageNumber,
    pageSize,
    totalCount,
  }

  return (
    <>
      <ContentList
        thread={thread}
        active={active}
        entries={entries}
        curView={curView}
        emptyPrefix={emptyPrefix}
        community={community}
        onPreview={onPreview}
        onUserSelect={onUserSelect}
        onAuthorSelect={onAuthorSelect}
        accountInfo={accountInfo}
      />

      <Pagi
        {...pagiInfo}
        onChange={onPageChange}
        margin={{ bottom: '60px', top: '60px' }}
      >
        <CommunityRecommends />
      </Pagi>
    </>
  )
}

PagedContents.propTypes = {
  thread: T.oneOf([THREAD.POST, THREAD.JOB, THREAD.REPO]),
  active: T.object,
  data: T.shape({
    entries: T.array.isRequired,
    totalPages: T.number.isRequired,
    totalCount: T.number.isRequired,
    pageSize: T.number.isRequired,
    pageNumber: T.number.isRequired,
  }).isRequired,
  curView: T.oneOf([
    TYPE.RESULT,
    TYPE.LOADING,
    TYPE.NOT_FOUND,
    TYPE.RESULT_EMPTY,
  ]),
  emptyPrefix: T.string,
  community: T.string,
  onPageChange: T.func,
  onPreview: T.func,
  onUserSelect: T.func,
  onAuthorSelect: T.func,
  accountInfo: T.shape({
    isLogin: T.bool,
    customization: T.shape({
      contentsLayout: T.oneOf([C11N.DIGEST, C11N.LIST]),
      markViewed: T.bool,
      displayDensity: T.oneOf(['20', '25', '30']),
    }),
  }),
}

PagedContents.defaultProps = {
  thread: THREAD.POST,
  active: {},
  curView: TYPE.LOADING,
  emptyPrefix: '',
  community: 'javascript',
  onPageChange: log,
  onPreview: log,
  onUserSelect: log,
  onAuthorSelect: log,
  accountInfo: {
    isLogin: false,
    customization: T.shape({
      contentsLayout: C11N.DIGEST,
      markViewed: true,
      displayDensity: '20',
    }),
  },
}

export default React.memo(PagedContents)
