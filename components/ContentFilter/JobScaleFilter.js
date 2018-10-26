import React from 'react'

import { LABEL_POOL } from '../../config'

import {
  ColumnWrapper,
  SelectLable,
  LabelDivider,
  SelectIcon,
  SelectTitle,
  LeftAlignWrapper,
  SelectItem,
} from './styles'

import { uid } from '../../utils'

const JobScaleFilter = ({ activeFilter, onSelect }) => (
  <ColumnWrapper>
    <SelectLable>
      <SelectIcon src={LABEL_POOL.scale.iconSrc} />
      <SelectTitle>规模</SelectTitle>
    </SelectLable>
    <LabelDivider />

    <LeftAlignWrapper>
      {LABEL_POOL.scale.data.map(item => (
        <SelectItem
          key={uid.gen()}
          active={activeFilter.jobScale === item}
          onClick={onSelect.bind(this, { jobScale: item })}
        >
          {item}
        </SelectItem>
      ))}
    </LeftAlignWrapper>
  </ColumnWrapper>
)

export default JobScaleFilter
