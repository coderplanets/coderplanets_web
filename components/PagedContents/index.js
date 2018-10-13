/*
 *
 * PagedContents
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import Pagi from '../Pagi'
import ContentList from './ContentList'

import { makeDebugger, THREAD, TYPE } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:PagedContents:index')
/* eslint-enable no-unused-vars */

const PagedContents = ({
  thread,
  data: { entries, pageNumber, pageSize, totalCount },
  curView,
  onPageChange,
  emptyPrefix,
  community,
}) => (
  <React.Fragment>
    <ContentList
      thread={thread}
      entries={entries}
      curView={curView}
      emptyPrefix={emptyPrefix}
      community={community}
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
  onPageChange: PropTypes.func,
  emptyPrefix: PropTypes.string,
  community: PropTypes.string,
}

PagedContents.defaultProps = {
  thread: THREAD.POST,
  curView: TYPE.LOADING,
  onPageChange: debug,
  emptyPrefix: '',
  community: 'javascript',
}

export default PagedContents
