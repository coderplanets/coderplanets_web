import React from 'react'

import LABEL_POOL from '@/config/label_pool'

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

const JobFinaceFilter = ({ activeFilter, onSelect }) => (
  <ColumnWrapper>
    <SelectLable>
      <SelectIcon src={LABEL_POOL.finance.iconSrc} />
      <SelectTitle>融资</SelectTitle>
    </SelectLable>
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

export default React.memo(JobFinaceFilter)
