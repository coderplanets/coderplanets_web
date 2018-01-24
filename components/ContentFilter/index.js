/*
 *
 * ContentFilter
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Popover, Tag } from 'antd'

import { Button } from '../../components'

import {
  Wrapper,
  InnerBtnWrapper,
  FilterIcon,
  SelectPanelWrapper,
  SelectTitle,
  SelectItem,
} from './styles'
import {
  makeDebugger,
  getSVGIconPath,
  isEmptyValue,
} from '../../utils/functions'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:ContentFilter:index')
/* eslint-enable no-unused-vars */

const filterDict = {
  today: '今天',
  this_week: '本周',
  this_month: '本月',
  this_year: '今年',
  most_favorites: '最多浏览',
  most_stars: '最多点赞',
  most_views: '最多收藏',
  most_comments: '最多评论',
  most_words: '字数最多',
  least_words: '字数最少',
}

const SelectPanel = ({ onSelect, activeTime, activeSort, activeLength }) => (
  <SelectPanelWrapper>
    <Row>
      <Col span={8}>
        <SelectTitle>时间</SelectTitle>
        <SelectItem
          item="today"
          active={activeTime}
          onClick={onSelect.bind(this, 'time', 'today')}
        >
          今天
        </SelectItem>
        <SelectItem
          item="this_week"
          active={activeTime}
          onClick={onSelect.bind(this, 'time', 'this_week')}
        >
          本周
        </SelectItem>
        <SelectItem
          item="this_month"
          active={activeTime}
          onClick={onSelect.bind(this, 'time', 'this_month')}
        >
          本月
        </SelectItem>
        <SelectItem
          item="this_year"
          active={activeTime}
          onClick={onSelect.bind(this, 'time', 'this_year')}
        >
          今年
        </SelectItem>
      </Col>
      <Col span={8}>
        <SelectTitle>排序</SelectTitle>
        <SelectItem
          item="most_views"
          active={activeSort}
          onClick={onSelect.bind(this, 'sort', 'most_views')}
        >
          最多浏览
        </SelectItem>
        <SelectItem
          item="most_stars"
          active={activeSort}
          onClick={onSelect.bind(this, 'sort', 'most_stars')}
        >
          最多点赞
        </SelectItem>
        <SelectItem
          item="most_favorites"
          active={activeSort}
          onClick={onSelect.bind(this, 'sort', 'most_favorites')}
        >
          最多收藏
        </SelectItem>
        <SelectItem
          item="most_comments"
          active={activeSort}
          onClick={onSelect.bind(this, 'sort', 'most_comments')}
        >
          最多评论
        </SelectItem>
      </Col>
      <Col span={8}>
        <SelectTitle>长度</SelectTitle>
        <SelectItem
          item="most_words"
          active={activeLength}
          onClick={onSelect.bind(this, 'wordLength', 'most_words')}
        >
          字数最多
        </SelectItem>
        <SelectItem
          item="least_words"
          active={activeLength}
          onClick={onSelect.bind(this, 'wordLength', 'least_words')}
        >
          字数最少
        </SelectItem>
      </Col>
    </Row>
  </SelectPanelWrapper>
)

const FilterTag = ({ onSelect, active, type }) =>
  isEmptyValue(active) ? (
    <span />
  ) : (
    <Tag closable onClose={onSelect.bind(this, type, '')}>
      {filterDict[active]}
    </Tag>
  )

const ContentFilter = ({ onSelect, activeTime, activeSort, activeLength }) => (
  <Wrapper>
    <Popover
      placement="bottomLeft"
      trigger="click"
      content={
        <SelectPanel
          onSelect={onSelect}
          activeTime={activeTime}
          activeSort={activeSort}
          activeLength={activeLength}
        />
      }
    >
      <Button size="small" type="primary" ghost>
        <InnerBtnWrapper>
          综合排序
          <FilterIcon path={getSVGIconPath('filter')} />
        </InnerBtnWrapper>
      </Button>
      &nbsp;&nbsp;&nbsp;&nbsp;
    </Popover>

    <FilterTag onSelect={onSelect} active={activeTime} type="time" />
    <FilterTag onSelect={onSelect} active={activeSort} type="sort" />
    <FilterTag onSelect={onSelect} active={activeLength} type="wordLength" />
  </Wrapper>
)

ContentFilter.propTypes = {
  // https://www.npmjs.com/package/prop-types
  activeTime: PropTypes.string,
  activeSort: PropTypes.string,
  activeLength: PropTypes.string,

  onSelect: PropTypes.func.isRequired,
}

ContentFilter.defaultProps = {
  activeTime: '',
  activeSort: '',
  activeLength: '',
}

export default ContentFilter
