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
  active,
  data: { entries, pageNumber, pageSize, totalCount },
  curView,
  onPageChange,
  onTitleSelect,
  emptyPrefix,
  community,
}) => (
  <React.Fragment>
    <ContentList
      thread={thread}
      active={active}
      entries={entries}
      curView={curView}
      emptyPrefix={emptyPrefix}
      community={community}
      onTitleSelect={onTitleSelect}
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
  onTitleSelect: PropTypes.func,
}

PagedContents.defaultProps = {
  thread: THREAD.POST,
  active: {},
  curView: TYPE.LOADING,
  emptyPrefix: '',
  community: 'javascript',
  onPageChange: debug,
  onTitleSelect: debug,
}

export default PagedContents
