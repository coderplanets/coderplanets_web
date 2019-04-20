/*
 *
 * PagedContents
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { makeDebugger, THREAD, TYPE, C11N } from 'utils'
import Pagi from 'components/Pagi'
import ContentList from './ContentList'

/* eslint-disable-next-line */
const debug = makeDebugger('c:PagedContents:index')

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
  thread: PropTypes.oneOf([THREAD.POST, THREAD.JOB, THREAD.VIDEO, THREAD.REPO]),
  cover: PropTypes.oneOf(['avatar', 'source']),
  active: PropTypes.object,
  data: PropTypes.shape({
    entries: PropTypes.array.isRequired,
    totalPages: PropTypes.number.isRequired,
    totalCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    pageNumber: PropTypes.number.isRequired,
  }).isRequired,
  curView: PropTypes.oneOf([
    TYPE.RESULT,
    TYPE.LOADING,
    TYPE.NOT_FOUND,
    TYPE.RESULT_EMPTY,
  ]),
  emptyPrefix: PropTypes.string,
  community: PropTypes.string,
  onPageChange: PropTypes.func,
  onPreview: PropTypes.func,
  onUserSelect: PropTypes.func,
  onAuthorSelect: PropTypes.func,
  accountInfo: PropTypes.shape({
    isLogin: PropTypes.bool,
    customization: PropTypes.shape({
      contentsLayout: PropTypes.oneOf([C11N.DIGEST, C11N.LIST]),
      markViewed: PropTypes.bool,
      displayDensity: PropTypes.oneOf(['20', '25', '30']),
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
  onPageChange: debug,
  onPreview: debug,
  onUserSelect: debug,
  onAuthorSelect: debug,
  accountInfo: {
    isLogin: false,
    customization: PropTypes.shape({
      contentsLayout: C11N.DIGEST,
      markViewed: true,
      displayDensity: '20',
    }),
  },
}

export default PagedContents
