/*
 *
 * ContentFilter
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'

import { Wrapper, MainFilterWrapper } from './styles'

import FilterButton from './FilterButton'
import SelectedTags from './SelectedTags'
import FilterResult from './FilterResult'

import { makeDebugger, THREAD } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:ContentFilter:index')
/* eslint-enable no-unused-vars */

const ContentFilter = ({
  thread,
  activeFilter,
  onSelect,
  isLogin,
  totalCount,
}) => (
  <Wrapper>
    <MainFilterWrapper>
      <FilterButton
        thread={thread}
        onSelect={onSelect}
        isLogin={isLogin}
        activeFilter={activeFilter}
      />

      <SelectedTags onSelect={onSelect} activeFilter={activeFilter} />
    </MainFilterWrapper>
    <FilterResult totalCount={totalCount} />
  </Wrapper>
)

ContentFilter.propTypes = {
  // https://www.npmjs.com/package/prop-types
  activeFilter: PropTypes.shape({
    when: PropTypes.string,
    sort: PropTypes.string,
    wordLength: PropTypes.string,
    readState: PropTypes.string,
    // job
    jobSalary: PropTypes.string,
    jobExp: PropTypes.string,
    jobEducation: PropTypes.string,
    jobField: PropTypes.string,
    jobFinace: PropTypes.string,
    jobScale: PropTypes.string,
    // video
    videoSource: PropTypes.string,
  }),
  onSelect: PropTypes.func.isRequired,
  thread: PropTypes.oneOf(R.values(THREAD)),
  isLogin: PropTypes.bool,
  totalCount: PropTypes.number,
}

ContentFilter.defaultProps = {
  activeFilter: {
    // general,
    when: '',
    sort: '',
    wordLength: '',
    readState: '',

    // job
    jobSalary: '',
    jobExp: '',
    jobEducation: '',
    jobField: '',
    jobFinace: '',
    jobScale: '',
    // video
    videoSource: '',
  },
  thread: THREAD.POST,
  isLogin: false,
  totalCount: 0,
}

export default ContentFilter
