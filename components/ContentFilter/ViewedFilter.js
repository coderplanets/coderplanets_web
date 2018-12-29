import React from 'react'

import { ICON_CMD } from '../../config'

import {
  ColumnWrapper,
  SelectLable,
  LabelDivider,
  SelectIcon,
  SelectTitle,
  SelectItem,
} from './styles'

import { FILTER } from '../../utils'

const ViewedFilter = ({ activeFilter, onSelect }) => (
  <ColumnWrapper>
    <SelectLable>
      <SelectIcon src={`${ICON_CMD}/user_been_views.svg`} />
      <SelectTitle>阅读</SelectTitle>
    </SelectLable>
    <LabelDivider />
    <SelectItem
      active={activeFilter.readState === FILTER.READ}
      onClick={onSelect.bind(this, { readState: FILTER.READ })}
    >
      已读
    </SelectItem>
    {/*
      <SelectItem
        active={activeFilter.readState === FILTER.ALL}
        onClick={onSelect.bind(this, { readState: FILTER.ALL })}
        >
        全部
      </SelectItem>
      */}
    {/*
        <SelectItem
        active={activeFilter.readState === FILTER.UNREAD}
        onClick={onSelect.bind(this, { readState: FILTER.UNREAD })}
        >
        未读
        </SelectItem>
      */}
  </ColumnWrapper>
)

export default ViewedFilter
