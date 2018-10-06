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

const JobExpFilter = ({ onSelect }) => (
  <ColumnWrapper>
    <SelectLable>
      <SelectIcon src={LABEL_POOL.exp.iconSrc} />
      <SelectTitle>工作经验</SelectTitle>
    </SelectLable>

    {LABEL_POOL.exp.data.map(item => (
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

export default JobExpFilter
