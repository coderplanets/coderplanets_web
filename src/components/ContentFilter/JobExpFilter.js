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

const JobExpFilter = ({ activeFilter, onSelect }) => (
  <ColumnWrapper>
    <SelectLabel>
      <SelectIcon src={LABEL_POOL.exp.iconSrc} />
      <SelectTitle>经验</SelectTitle>
    </SelectLabel>
    <LabelDivider />

    <LeftAlignWrapper>
      {LABEL_POOL.exp.data.map((item) => (
        <SelectItem
          key={item}
          active={activeFilter.exp === item}
          onClick={() => onSelect({ exp: item })}
        >
          {item}
        </SelectItem>
      ))}
    </LeftAlignWrapper>
  </ColumnWrapper>
)

export default React.memo(JobExpFilter)
