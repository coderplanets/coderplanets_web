import React from 'react'

import { ICON_CMD } from '@/config'
import { FILTER } from '@/constant'

import {
  ColumnWrapper,
  SelectLabel,
  LabelDivider,
  SelectIcon,
  SelectTitle,
  SelectItem,
} from './styles'

const ViewedFilter = ({ activeFilter, onSelect }) => (
  <ColumnWrapper>
    <SelectLabel>
      <SelectIcon src={`${ICON_CMD}/user_been_views.svg`} />
      <SelectTitle>阅读</SelectTitle>
    </SelectLabel>
    <LabelDivider />
    <SelectItem
      active={activeFilter.read === FILTER.READ}
      onClick={onSelect.bind(this, { read: FILTER.READ })}
    >
      已读
    </SelectItem>
    {/*
      <SelectItem
        active={activeFilter.read === FILTER.ALL}
        onClick={onSelect.bind(this, { read: FILTER.ALL })}
        >
        全部
      </SelectItem>
      */}
    {/*
        <SelectItem
        active={activeFilter.read === FILTER.UNREAD}
        onClick={onSelect.bind(this, { read: FILTER.UNREAD })}
        >
        未读
        </SelectItem>
      */}
  </ColumnWrapper>
)

export default React.memo(ViewedFilter)
