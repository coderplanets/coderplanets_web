import React from 'react'

import { ICON_CMD } from '@config'

import { FILTER } from '@utils'
import {
  ColumnWrapper,
  SelectLable,
  LabelDivider,
  SelectIcon,
  SelectTitle,
  SelectItem,
} from './styles'

const SortFilter = ({ activeFilter, onSelect }) => (
  <ColumnWrapper>
    <SelectLable>
      <SelectIcon src={`${ICON_CMD}/click.svg`} />
      <SelectTitle>排序</SelectTitle>
    </SelectLable>
    <LabelDivider />

    <SelectItem
      active={activeFilter.sort === FILTER.MOST_VIEWS}
      onClick={onSelect.bind(this, { sort: FILTER.MOST_VIEWS })}
    >
      最多浏览
    </SelectItem>
    <SelectItem
      active={activeFilter.sort === FILTER.MOST_STARS}
      onClick={onSelect.bind(this, { sort: FILTER.MOST_STARS })}
    >
      最多点赞
    </SelectItem>
    <SelectItem
      active={activeFilter.sort === FILTER.MOST_FAVORITES}
      onClick={onSelect.bind(this, { sort: FILTER.MOST_FAVORITES })}
    >
      最多收藏
    </SelectItem>
    <SelectItem
      active={activeFilter.sort === FILTER.MOST_COMMENTS}
      onClick={onSelect.bind(this, { sort: FILTER.MOST_COMMENTS })}
    >
      最多评论
    </SelectItem>
  </ColumnWrapper>
)

export default SortFilter
