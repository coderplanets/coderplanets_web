/*
 *
 * PagedContents
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog, THREAD, TYPE, C11N } from '@utils'
import Pagi from '@components/Pagi'
import ContentList from './ContentList'

/* eslint-disable-next-line */
const log = buildLog('c:PagedContents:index')

const PagedContents = ({
  thread,
  cover,
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
}) => (
  <React.Fragment>
    <ContentList
      thread={thread}
      cover={cover}
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
      left="-20px"
      pageNumber={pageNumber}
      pageSize={pageSize}
      totalCount={totalCount}
      onChange={onPageChange}
    />
  </React.Fragment>
)

PagedContents.propTypes = {
  thread: T.oneOf([THREAD.POST, THREAD.JOB, THREAD.VIDEO, THREAD.REPO]),
  cover: T.oneOf(['avatar', 'source']),
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
  cover: 'avatar',
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

export default PagedContents
