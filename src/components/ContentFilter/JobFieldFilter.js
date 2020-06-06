import React from 'react'

import { LABEL_POOL } from '@/config'

import {
  ColumnWrapper,
  SelectLable,
  LabelDivider,
  SelectIcon,
  SelectTitle,
  LeftAlignWrapper,
  SelectItem,
} from './styles'

// import { uid } from '@/utils'

const JobFieldFilter = ({ activeFilter, onSelect }) => (
  <ColumnWrapper>
    <SelectLable>
      <SelectIcon src={LABEL_POOL.field.iconSrc} />
      <SelectTitle>领域</SelectTitle>
    </SelectLable>
    <LabelDivider />
    <LeftAlignWrapper>
      {LABEL_POOL.field.data.map(item => (
        <SelectItem
          key={item}
          active={activeFilter.field === item}
          onClick={onSelect.bind(this, { field: item })}
        >
          {item}
        </SelectItem>
      ))}
    </LeftAlignWrapper>
  </ColumnWrapper>
)

export default React.memo(JobFieldFilter)
