import React from 'react'

import { LABEL_POOL } from '@/config'

import {
  ColumnWrapper,
  SelectLabel,
  LabelDivider,
  SelectIcon,
  SelectTitle,
  LeftAlignWrapper,
  SelectItem,
} from './styles'

// import { uid } from '@/utils'

const JobFinanceFilter = ({ activeFilter, onSelect }) => (
  <ColumnWrapper>
    <SelectLabel>
      <SelectIcon src={LABEL_POOL.finance.iconSrc} />
      <SelectTitle>融资</SelectTitle>
    </SelectLabel>
    <LabelDivider />

    <LeftAlignWrapper>
      {LABEL_POOL.finance.data.map(item => (
        <SelectItem
          key={item}
          active={activeFilter.finance === item}
          onClick={onSelect.bind(this, { finance: item })}
        >
          {item}
        </SelectItem>
      ))}
    </LeftAlignWrapper>
  </ColumnWrapper>
)

export default React.memo(JobFinanceFilter)
