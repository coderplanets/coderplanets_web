import React from 'react'

import { ICON_CMD } from '../../config'

import {
  ColumnWrapper,
  SelectLable,
  SelectIcon,
  SelectTitle,
  SelectItem,
} from './styles'

import { FILTER } from '../../utils'

const SortFilter = ({ activeFilter, onSelect }) => (
  <ColumnWrapper>
    <SelectLable>
      <SelectIcon src={`${ICON_CMD}/click.svg`} />
      <SelectTitle>排序</SelectTitle>
    </SelectLable>
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
  </ColumnWrapper>
)

export default SortFilter
