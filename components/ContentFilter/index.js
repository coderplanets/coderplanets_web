/*
 *
 * ContentFilter
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Button, Tag } from 'antd'
import R from 'ramda'

import { ICON_CMD } from '../../config'

import Popover from '../Popover'
import { Wrapper, InnerBtnWrapper, FilterIcon } from './styles'
import FilterPanel from './FilterPanel'

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
}

const FilterTag = ({ onSelect, active, type }) =>
  isEmptyValue(active) ? null : (
    <Tag closable onClose={onSelect.bind(this, { [type]: '' })}>
      {filterDict[active]}
    </Tag>
  )

const ContentFilter = ({ thread, activeFilter, onSelect }) => (
  <Wrapper>
    <Popover
      placement="bottomLeft"
      trigger="click"
      content={
        <FilterPanel
          thread={thread}
          onSelect={onSelect}
          activeFilter={activeFilter}
        />
      }
    >
      <Button size="small" type="primary" ghost>
        <InnerBtnWrapper>
          综合排序
          <FilterIcon src={`${ICON_CMD}/filter2.svg`} />
        </InnerBtnWrapper>
      </Button>
    </Popover>

    <FilterTag onSelect={onSelect} active={activeFilter.when} type="when" />
    <FilterTag onSelect={onSelect} active={activeFilter.sort} type="sort" />
    <FilterTag
      onSelect={onSelect}
      active={activeFilter.wordLength}
      type="wordLength"
    />
  </Wrapper>
)

ContentFilter.propTypes = {
  // https://www.npmjs.com/package/prop-types
  activeFilter: PropTypes.shape({
    when: PropTypes.string,
    sort: PropTypes.string,
    wordLength: PropTypes.string,
  }),
  onSelect: PropTypes.func.isRequired,
  thread: PropTypes.oneOf(R.values(THREAD)),
}

ContentFilter.defaultProps = {
  activeFilter: {
    when: '',
    sort: '',
    wordLength: '',
  },
  thread: THREAD.POST,
}

export default ContentFilter
