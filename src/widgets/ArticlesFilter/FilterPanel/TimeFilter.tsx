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

const TimeFilter: FC<TProps> = ({ activeFilter, onSelect }) => (
  <ColumnWrapper>
    <SelectLabel>
      <SelectTitle>时间</SelectTitle>
    </SelectLabel>
    <LabelDivider />
    <SelectItem
      active={activeFilter.when === FILTER.TODAY}
      onClick={() => onSelect({ when: FILTER.TODAY })}
    >
      今天
    </SelectItem>
    <SelectItem
      active={activeFilter.when === FILTER.THIS_WEEK}
      onClick={() => onSelect({ when: FILTER.THIS_WEEK })}
    >
      本周
    </SelectItem>
    <SelectItem
      active={activeFilter.when === FILTER.THIS_MONTH}
      onClick={() => onSelect({ when: FILTER.THIS_MONTH })}
    >
      本月
    </SelectItem>
    <SelectItem
      active={activeFilter.when === FILTER.THIS_YEAR}
      onClick={() => onSelect({ when: FILTER.THIS_YEAR })}
    >
      今年
    </SelectItem>
  </ColumnWrapper>
)

export default memo(TimeFilter)
