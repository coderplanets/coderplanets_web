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

const JobScaleFilter = ({ activeFilter, onSelect }) => (
  <ColumnWrapper>
    <SelectLabel>
      <SelectIcon src={LABEL_POOL.scale.iconSrc} />
      <SelectTitle>规模</SelectTitle>
    </SelectLabel>
    <LabelDivider />

    <LeftAlignWrapper>
      {LABEL_POOL.scale.data.map((item) => (
        <SelectItem
          key={item}
          active={activeFilter.scale === item}
          onClick={() => onSelect({ scale: item })}
        >
          {item}
        </SelectItem>
      ))}
    </LeftAlignWrapper>
  </ColumnWrapper>
)

export default React.memo(JobScaleFilter)
