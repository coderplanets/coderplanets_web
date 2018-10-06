import React from 'react'

import { ICON_CMD, LABEL_POOL } from '../../config'

import {
  ColumnWrapper,
  SelectLable,
  SelectIcon,
  SelectTitle,
  SelectItem,
} from './styles'

import { FILTER, uid } from '../../utils'

const JobSalaryFilter = ({ onSelect }) => (
  <ColumnWrapper>
    <SelectLable>
      <SelectIcon src={`${ICON_CMD}/money_frame.svg`} />
      <SelectTitle>月薪</SelectTitle>
    </SelectLable>

    {LABEL_POOL.salary.data.map(item => (
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

export default JobSalaryFilter
