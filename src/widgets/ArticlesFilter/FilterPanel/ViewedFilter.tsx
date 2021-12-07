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

const ViewedFilter: FC<TProps> = ({ activeFilter, onSelect }) => (
  <ColumnWrapper>
    <SelectLabel>
      <SelectTitle>阅读</SelectTitle>
    </SelectLabel>
    <LabelDivider />
    <SelectItem
      active={activeFilter.read === FILTER.READ}
      onClick={() => onSelect({ read: FILTER.READ })}
    >
      已读
    </SelectItem>
    {/*
      <SelectItem
        active={activeFilter.read === FILTER.ALL}
        onClick={() => onSelect({ read: FILTER.ALL })}
        >
        全部
      </SelectItem>
      */}
    {/*
        <SelectItem
        active={activeFilter.read === FILTER.UNREAD}
        onClick={() => onSelect({ read: FILTER.UNREAD })}
        >
        未读
        </SelectItem>
      */}
  </ColumnWrapper>
)

export default memo(ViewedFilter)
