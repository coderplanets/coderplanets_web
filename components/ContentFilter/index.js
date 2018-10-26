/*
 *
 * ContentFilter
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Tag } from 'antd'
import R from 'ramda'

import { Wrapper, MainFilterWrapper, ActiveTagsWrapper } from './styles'
import FilterButton from './FilterButton'
import FilterResult from './FilterResult'

import { makeDebugger, isEmptyValue, THREAD } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:ContentFilter:index')
/* eslint-enable no-unused-vars */

const filterDict = {
  TODAY: '今天',
  THIS_WEEK: '本周',
  THIS_MONTH: '本月',
  THIS_YEAR: '今年',
  MOST_FAVORITES: '最多收藏',
  MOST_STARS: '最多点赞',
  MOST_VIEWS: '最多浏览',
  MOST_COMMENTS: '最多评论',
  MOST_WORDS: '字数最多',
  LEAST_WORDS: '字数最少',
  //
  READED: '只显已读',
  UNREAD: '只显未读',
}

const FilterTag = ({ onSelect, active, type }) =>
  isEmptyValue(active) ? null : (
    <Tag closable onClose={onSelect.bind(this, { [type]: '' })}>
      {filterDict[active]}
    </Tag>
  )

const ContentFilter = ({
  thread,
  activeFilter,
  onSelect,
  isLogin,
  totalCount,
}) => {
  console.log('activeFilter: ', activeFilter)

  return (
    <Wrapper>
      <MainFilterWrapper>
        <FilterButton
          thread={thread}
          onSelect={onSelect}
          isLogin={isLogin}
          activeFilter={activeFilter}
        />

        <ActiveTagsWrapper>
          <FilterTag
            onSelect={onSelect}
            active={activeFilter.when}
            type="when"
          />
          <FilterTag
            onSelect={onSelect}
            active={activeFilter.sort}
            type="sort"
          />
          <FilterTag
            onSelect={onSelect}
            active={activeFilter.wordLength}
            type="wordLength"
          />
          <FilterTag
            onSelect={onSelect}
            active={activeFilter.readState}
            type="readState"
          />
        </ActiveTagsWrapper>
      </MainFilterWrapper>
      <FilterResult totalCount={totalCount} />
    </Wrapper>
  )
}

ContentFilter.propTypes = {
  // https://www.npmjs.com/package/prop-types
  activeFilter: PropTypes.shape({
    when: PropTypes.string,
    sort: PropTypes.string,
    wordLength: PropTypes.string,
  }),
  onSelect: PropTypes.func.isRequired,
  thread: PropTypes.oneOf(R.values(THREAD)),
  isLogin: PropTypes.bool,
  totalCount: PropTypes.number,
}

ContentFilter.defaultProps = {
  activeFilter: {
    when: '',
    sort: '',
    wordLength: '',
  },
  thread: THREAD.POST,
  isLogin: false,
  totalCount: 0,
}

export default ContentFilter
