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
  TODAY: '今天',
  THIS_WEEK: '本周',
  THIS_MONTH: '本月',
  THIS_YEAR: '今年',
  MOST_FAVORITES: '最多浏览',
  MOST_STARS: '最多点赞',
  MOST_VIEWS: '最多收藏',
  MOST_COMMENTS: '最多评论',
  MOST_WORDS: '字数最多',
  LEAST_WORDS: '字数最少',
}

const SelectPanel = ({ onSelect, activeTime, activeSort, activeLength }) => (
  <SelectPanelWrapper>
    <Row>
      <Col span={8}>
        <SelectTitle>时间</SelectTitle>
        <SelectItem
          item="TODAY"
          active={activeTime}
          onClick={onSelect.bind(this, 'time', 'TODAY')}
        >
          今天
        </SelectItem>
        <SelectItem
          item="THIS_WEEK"
          active={activeTime}
          onClick={onSelect.bind(this, 'time', 'THIS_WEEK')}
        >
          本周
        </SelectItem>
        <SelectItem
          item="THIS_MONTH"
          active={activeTime}
          onClick={onSelect.bind(this, 'time', 'THIS_MONTH')}
        >
          本月
        </SelectItem>
        <SelectItem
          item="THIS_YEAR"
          active={activeTime}
          onClick={onSelect.bind(this, 'time', 'THIS_YEAR')}
        >
          今年
        </SelectItem>
      </Col>
      <Col span={8}>
        <SelectTitle>排序</SelectTitle>
        <SelectItem
          item="MOST_VIEWS"
          active={activeSort}
          onClick={onSelect.bind(this, 'sort', 'MOST_VIEWS')}
        >
          最多浏览
        </SelectItem>
        <SelectItem
          item="MOST_STARS"
          active={activeSort}
          onClick={onSelect.bind(this, 'sort', 'MOST_STARS')}
        >
          最多点赞
        </SelectItem>
        <SelectItem
          item="MOST_FAVORITES"
          active={activeSort}
          onClick={onSelect.bind(this, 'sort', 'MOST_FAVORITES')}
        >
          最多收藏
        </SelectItem>
        <SelectItem
          item="MOST_COMMENTS"
          active={activeSort}
          onClick={onSelect.bind(this, 'sort', 'MOST_COMMENTS')}
        >
          最多评论
        </SelectItem>
      </Col>
      <Col span={8}>
        <SelectTitle>长度</SelectTitle>
        <SelectItem
          item="MOST_WORDS"
          active={activeLength}
          onClick={onSelect.bind(this, 'wordLength', 'MOST_WORDS')}
        >
          字数最多
        </SelectItem>
        <SelectItem
          item="LEAST_WORDS"
          active={activeLength}
          onClick={onSelect.bind(this, 'wordLength', 'LEAST_WORDS')}
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
