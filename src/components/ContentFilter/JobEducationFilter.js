import React from 'react'

import LABEL_POOL from '@config/label_pool'

import {
  ColumnWrapper,
  SelectLable,
  LabelDivider,
  SelectIcon,
  SelectTitle,
  SelectItem,
} from './styles'

// import { uid } from '@utils'

const JobEducationFilter = ({ activeFilter, onSelect }) => (
  <ColumnWrapper>
    <SelectLable>
      <SelectIcon src={LABEL_POOL.education.iconSrc} />
      <SelectTitle>学历</SelectTitle>
    </SelectLable>
    <LabelDivider />

    {LABEL_POOL.education.data.map(item => (
      <SelectItem
        key={item}
        active={activeFilter.education === item}
        onClick={onSelect.bind(this, { education: item })}
      >
        {item}
      </SelectItem>
    ))}
  </ColumnWrapper>
)

export default JobEducationFilter
