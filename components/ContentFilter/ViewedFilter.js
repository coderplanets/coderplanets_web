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
      active={activeFilter.readState === FILTER.READED}
      onClick={onSelect.bind(this, { readState: FILTER.READED })}
    >
      已读内容
    </SelectItem>
    <SelectItem
      active={activeFilter.readState === FILTER.UNREAD}
      onClick={onSelect.bind(this, { readState: FILTER.UNREAD })}
    >
      未读内容
    </SelectItem>
  </ColumnWrapper>
)

export default ViewedFilter
