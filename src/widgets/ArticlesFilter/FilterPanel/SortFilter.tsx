import { FC, memo } from 'react'

import type { TArticleFilter } from '@/spec'
import { FILTER } from '@/constant'

import {
  ColumnWrapper,
  SelectLabel,
  LabelDivider,
  SelectTitle,
  SelectItem,
} from '../styles'

type TProps = {
  activeFilter: TArticleFilter
  onSelect: (filter: TArticleFilter) => void
}

const SortFilter: FC<TProps> = ({ activeFilter, onSelect }) => (
  <ColumnWrapper>
    <SelectLabel>
      <SelectTitle>排序</SelectTitle>
    </SelectLabel>
    <LabelDivider />

    <SelectItem
      active={activeFilter.sort === FILTER.MOST_VIEWS}
      onClick={() => onSelect({ sort: FILTER.MOST_VIEWS })}
    >
      最多浏览
    </SelectItem>
    <SelectItem
      active={activeFilter.sort === FILTER.MOST_STARS}
      onClick={() => onSelect({ sort: FILTER.MOST_STARS })}
    >
      最多点赞
    </SelectItem>
    <SelectItem
      active={activeFilter.sort === FILTER.MOST_FAVORITES}
      onClick={() => onSelect({ sort: FILTER.MOST_FAVORITES })}
    >
      最多收藏
    </SelectItem>
    <SelectItem
      active={activeFilter.sort === FILTER.MOST_COMMENTS}
      onClick={() => onSelect({ sort: FILTER.MOST_COMMENTS })}
    >
      最多讨论
    </SelectItem>
  </ColumnWrapper>
)

export default memo(SortFilter)
