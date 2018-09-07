/*
 *
 * ContentFilter
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Button, Row, Col, Tag } from 'antd'
import { Popover } from '..'

import { ICON_CMD } from '../../config'

import {
  Wrapper,
  InnerBtnWrapper,
  FilterIcon,
  SelectPanelWrapper,
  SelectTitle,
  SelectItem,
} from './styles'

import { makeDebugger, isEmptyValue, FILTER } from '../../utils'
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

const SelectPanel = ({ activeFilter, onSelect }) => (
  <SelectPanelWrapper>
    <Row>
      <Col span={8}>
        <SelectTitle>时间</SelectTitle>
        <SelectItem
          item="TODAY"
          active={activeFilter.when}
          onClick={onSelect.bind(this, { when: FILTER.TODAY })}
        >
          今天
        </SelectItem>
        <SelectItem
          item="THIS_WEEK"
          active={activeFilter.when}
          onClick={onSelect.bind(this, { when: FILTER.THIS_WEEK })}
        >
          本周
        </SelectItem>
        <SelectItem
          item="THIS_MONTH"
          active={activeFilter.when}
          onClick={onSelect.bind(this, { when: FILTER.THIS_MONTH })}
        >
          本月
        </SelectItem>
        <SelectItem
          item="THIS_YEAR"
          active={activeFilter.when}
          onClick={onSelect.bind(this, { when: FILTER.THIS_YEAR })}
        >
          今年
        </SelectItem>
      </Col>
      <Col span={8}>
        <SelectTitle>排序</SelectTitle>
        <SelectItem
          item="MOST_VIEWS"
          active={activeFilter.sort}
          onClick={onSelect.bind(this, { sort: FILTER.MOST_VIEWS })}
        >
          最多浏览
        </SelectItem>
        <SelectItem
          item="MOST_STARS"
          active={activeFilter.sort}
          onClick={onSelect.bind(this, { sort: FILTER.MOST_STARS })}
        >
          最多点赞
        </SelectItem>
        <SelectItem
          item="MOST_FAVORITES"
          active={activeFilter.sort}
          onClick={onSelect.bind(this, { sort: FILTER.MOST_FAVORITES })}
        >
          最多收藏
        </SelectItem>
        <SelectItem
          item="MOST_COMMENTS"
          active={activeFilter.sort}
          onClick={onSelect.bind(this, { sort: FILTER.MOST_COMMENTS })}
        >
          最多评论
        </SelectItem>
      </Col>
      <Col span={8}>
        <SelectTitle>长度</SelectTitle>
        <SelectItem
          item="MOST_WORDS"
          active={activeFilter.wordLength}
          onClick={onSelect.bind(this, { wordLength: FILTER.MOST_WORDS })}
        >
          字数最多
        </SelectItem>
        <SelectItem
          item="LEAST_WORDS"
          active={activeFilter.wordLength}
          onClick={onSelect.bind(this, { wordLength: FILTER.LEAST_WORDS })}
        >
          字数最少
        </SelectItem>
      </Col>
    </Row>
  </SelectPanelWrapper>
)

const FilterTag = ({ onSelect, active, type }) =>
  isEmptyValue(active) ? null : (
    <Tag closable onClose={onSelect.bind(this, { [type]: '' })}>
      {filterDict[active]}
    </Tag>
  )

const ContentFilter = ({ activeFilter, onSelect }) => (
  <Wrapper>
    <Popover
      placement="bottomLeft"
      trigger="click"
      content={<SelectPanel onSelect={onSelect} activeFilter={activeFilter} />}
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
}

ContentFilter.defaultProps = {
  activeFilter: {
    when: '',
    sort: '',
    wordLength: '',
  },
}

export default ContentFilter
