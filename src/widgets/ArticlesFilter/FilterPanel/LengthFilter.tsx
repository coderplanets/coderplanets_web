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

const LengthFilter: FC<TProps> = ({ activeFilter, onSelect }) => (
  <ColumnWrapper>
    <SelectLabel>
      <SelectTitle>长度</SelectTitle>
    </SelectLabel>
    <LabelDivider />
    <SelectItem
      active={activeFilter.length === FILTER.MOST_WORDS}
      onClick={() => onSelect({ length: FILTER.MOST_WORDS })}
    >
      字数最多
    </SelectItem>
    <SelectItem
      active={activeFilter.length === FILTER.LEAST_WORDS}
      onClick={() => onSelect({ length: FILTER.LEAST_WORDS })}
    >
      字数最少
    </SelectItem>
  </ColumnWrapper>
)

export default memo(LengthFilter)
