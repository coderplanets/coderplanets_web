import { FC, memo } from 'react'

import type { TArticleFilter } from '@/spec'
import { FILTER } from '@/constant'

import { CatColumnWrapper, SelectItem } from '../styles'

type TProps = {
  activeFilter: TArticleFilter
  onSelect: (filter: TArticleFilter) => void
}

const CatFilter: FC<TProps> = ({ activeFilter, onSelect }) => (
  <CatColumnWrapper>
    <SelectItem
      active={activeFilter.length === FILTER.MOST_WORDS}
      onClick={() => onSelect({ length: FILTER.MOST_WORDS })}
    >
      全部
    </SelectItem>
    <SelectItem
      active={activeFilter.length === FILTER.LEAST_WORDS}
      onClick={() => onSelect({ length: FILTER.LEAST_WORDS })}
    >
      功能/需求
    </SelectItem>
    <SelectItem
      active={activeFilter.length === FILTER.LEAST_WORDS}
      onClick={() => onSelect({ length: FILTER.LEAST_WORDS })}
    >
      Bug 缺陷
    </SelectItem>
    <SelectItem
      active={activeFilter.length === FILTER.LEAST_WORDS}
      onClick={() => onSelect({ length: FILTER.LEAST_WORDS })}
    >
      讨论/问题
    </SelectItem>
  </CatColumnWrapper>
)

export default memo(CatFilter)
