import React from 'react'

import { LABEL_POOL } from '@/config'

import {
  ColumnWrapper,
  SelectLabel,
  LabelDivider,
  SelectIcon,
  SelectTitle,
  SelectItem,
} from '../styles'

// import { uid } from '@/utils'

const JobEducationFilter = ({ activeFilter, onSelect }) => (
  <ColumnWrapper>
    <SelectLabel>
      <SelectIcon src={LABEL_POOL.education.iconSrc} />
      <SelectTitle>学历</SelectTitle>
    </SelectLabel>
    <LabelDivider />

    {LABEL_POOL.education.data.map((item) => (
      <SelectItem
        key={item}
        active={activeFilter.education === item}
        onClick={() => onSelect({ education: item })}
      >
        {item}
      </SelectItem>
    ))}
  </ColumnWrapper>
)

export default React.memo(JobEducationFilter)
