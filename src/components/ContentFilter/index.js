/*
 *
 * ContentFilter
 *
 */

import React from 'react'
import T from 'prop-types'
import R from 'ramda'

import { THREAD, C11N } from '@constant'
import { buildLog } from '@utils'

import FilterButton from './FilterButton'
import SelectedTags from './SelectedTags'
import FilterResult from './FilterResult'

import { Wrapper, MainFilterWrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:ContentFilter:index')

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
  activeFilter: T.shape({
    when: T.string,
    sort: T.string,
    length: T.string,
    read: T.string,
    // job
    salary: T.string,
    exp: T.string,
    education: T.string,
    field: T.string,
    finance: T.string,
    scale: T.string,
    // video
    source: T.string,
  }),
  onSelect: T.func.isRequired,
  thread: T.oneOf(R.values(THREAD)),
  accountInfo: T.shape({
    isLogin: T.bool,
    customization: T.shape({
      contentsLayout: T.oneOf([C11N.DIGEST, C11N.LIST]),
      markViewed: T.bool,
      displayDensity: T.oneOf(['20', '25', '30']),
    }),
  }),
  totalCount: T.number,
  onC11NChange: T.func,
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
    customization: T.shape({
      contentsLayout: C11N.DIGEST,
      markViewed: true,
      displayDensity: '20',
    }),
  },
  totalCount: 0,
  onC11NChange: log,
}

export default ContentFilter
