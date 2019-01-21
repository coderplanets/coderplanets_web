/*
 *
 * ContentFilter
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'

import { makeDebugger, THREAD, C11N } from 'utils'
import { Wrapper, MainFilterWrapper } from './styles'

import FilterButton from './FilterButton'
import SelectedTags from './SelectedTags'
import FilterResult from './FilterResult'

/* eslint-disable-next-line */
const debug = makeDebugger('c:ContentFilter:index')

const ContentFilter = ({
  thread,
  activeFilter,
  onSelect,
  accountInfo: { isLogin, customization },
  totalCount,
  onC11NChange,
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
    <FilterResult
      thread={thread}
      totalCount={totalCount}
      customization={customization}
      onC11NChange={onC11NChange}
    />
  </Wrapper>
)

ContentFilter.propTypes = {
  // https://www.npmjs.com/package/prop-types
  activeFilter: PropTypes.shape({
    when: PropTypes.string,
    sort: PropTypes.string,
    length: PropTypes.string,
    read: PropTypes.string,
    // job
    salary: PropTypes.string,
    exp: PropTypes.string,
    education: PropTypes.string,
    field: PropTypes.string,
    finance: PropTypes.string,
    scale: PropTypes.string,
    // video
    source: PropTypes.string,
  }),
  onSelect: PropTypes.func.isRequired,
  thread: PropTypes.oneOf(R.values(THREAD)),
  accountInfo: PropTypes.shape({
    isLogin: PropTypes.bool,
    customization: PropTypes.shape({
      contentsLayout: PropTypes.oneOf([C11N.DIGEST, C11N.LIST]),
      markViewed: PropTypes.bool,
      displayDensity: PropTypes.oneOf(['20', '25', '30']),
    }),
  }),
  totalCount: PropTypes.number,
  onC11NChange: PropTypes.func,
}

ContentFilter.defaultProps = {
  activeFilter: {
    // general,
    when: '',
    sort: '',
    length: '',
    read: '',

    // job
    salary: '',
    exp: '',
    education: '',
    field: '',
    finance: '',
    scale: '',
    // video
    source: '',
  },
  thread: THREAD.POST,
  accountInfo: {
    isLogin: false,
    customization: PropTypes.shape({
      contentsLayout: C11N.DIGEST,
      markViewed: true,
      displayDensity: '20',
    }),
  },
  totalCount: 0,
  onC11NChange: debug,
}

export default ContentFilter
