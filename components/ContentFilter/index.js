/*
 *
 * ContentFilter
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Button, Row, Col, Tag } from 'antd'
import { Popover } from '../../components'

import { ICON_ASSETS } from '../../config'

import {
  Wrapper,
  InnerBtnWrapper,
  FilterIcon,
  SelectPanelWrapper,
  SelectTitle,
  SelectItem,
} from './styles'

import { makeDebugger, isEmptyValue } from '../../utils'
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

const SelectPanel = ({ onSelect, activeWhen, activeSort, activeLength }) => (
  <SelectPanelWrapper>
    <Row>
      <Col span={8}>
        <SelectTitle>时间</SelectTitle>
        <SelectItem
          item="TODAY"
          active={activeWhen}
          onClick={onSelect.bind(this, 'when', 'TODAY')}
        >
          今天
        </SelectItem>
        <SelectItem
          item="THIS_WEEK"
          active={activeWhen}
          onClick={onSelect.bind(this, 'when', 'THIS_WEEK')}
        >
          本周
        </SelectItem>
        <SelectItem
          item="THIS_MONTH"
          active={activeWhen}
          onClick={onSelect.bind(this, 'when', 'THIS_MONTH')}
        >
          本月
        </SelectItem>
        <SelectItem
          item="THIS_YEAR"
          active={activeWhen}
          onClick={onSelect.bind(this, 'when', 'THIS_YEAR')}
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

const ContentFilter = ({ onSelect, activeWhen, activeSort, activeLength }) => (
  <Wrapper>
    <Popover
      placement="bottomLeft"
      trigger="click"
      content={
        <SelectPanel
          onSelect={onSelect}
          activeWhen={activeWhen}
          activeSort={activeSort}
          activeLength={activeLength}
        />
      }
    >
      <Button size="small" type="primary" ghost>
        <InnerBtnWrapper>
          综合排序
          <FilterIcon path={`${ICON_ASSETS}/cmd/filter2.svg`} />
        </InnerBtnWrapper>
      </Button>
      &nbsp;&nbsp;&nbsp;&nbsp;
    </Popover>

    <FilterTag onSelect={onSelect} active={activeWhen} type="when" />
    <FilterTag onSelect={onSelect} active={activeSort} type="sort" />
    <FilterTag onSelect={onSelect} active={activeLength} type="wordLength" />
  </Wrapper>
)

ContentFilter.propTypes = {
  // https://www.npmjs.com/package/prop-types
  activeWhen: PropTypes.string,
  activeSort: PropTypes.string,
  activeLength: PropTypes.string,

  onSelect: PropTypes.func.isRequired,
}

ContentFilter.defaultProps = {
  activeWhen: '',
  activeSort: '',
  activeLength: '',
}

export default ContentFilter
