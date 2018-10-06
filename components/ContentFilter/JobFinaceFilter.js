import React from 'react'

import { LABEL_POOL } from '../../config'

import {
  ColumnWrapper,
  SelectLable,
  SelectIcon,
  SelectTitle,
  SelectItem,
} from './styles'

import { FILTER, uid } from '../../utils'

const JobFinaceFilter = ({ onSelect }) => (
  <ColumnWrapper>
    <SelectLable>
      <SelectIcon src={LABEL_POOL.finance.iconSrc} />
      <SelectTitle>领域</SelectTitle>
    </SelectLable>

    {LABEL_POOL.finance.data.map(item => (
      <SelectItem
        key={uid.gen()}
        active={false}
        onClick={onSelect.bind(this, { when: FILTER.TODAY })}
      >
        {item}
      </SelectItem>
    ))}
  </ColumnWrapper>
)

export default JobFinaceFilter
