/*
 *
 * ContentFilter
 *
 */

import React from 'react'
import T from 'prop-types'
import R from 'ramda'

import { THREAD } from '@/constant'
import { buildLog } from '@/utils'

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
  accountInfo: { isLogin },
  totalCount,
  onFaqChange,
  faqActive,
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
      totalCount={totalCount}
      onFaqChange={onFaqChange}
      faqActive={faqActive}
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
  }),
  totalCount: T.number,
  onFaqChange: T.func,
  faqActive: T.bool,
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
  },
  totalCount: 0,
  onFaqChange: log,
  faqActive: false,
}

export default React.memo(ContentFilter)
