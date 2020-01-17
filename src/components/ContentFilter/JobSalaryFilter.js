import React from 'react'

import { ICON_CMD } from '@config'
import LABEL_POOL from '@config/label_pool'

import {
  ColumnWrapper,
  SelectLable,
  LabelDivider,
  SelectIcon,
  SelectTitle,
  LeftAlignWrapper,
  SelectItem,
} from './styles'

// import { uid } from '@utils'

const JobSalaryFilter = ({ activeFilter, onSelect }) => (
  <ColumnWrapper>
    <SelectLable>
      <SelectIcon src={`${ICON_CMD}/money_frame.svg`} />
      <SelectTitle>月薪</SelectTitle>
    </SelectLable>
    <LabelDivider />

    <LeftAlignWrapper>
      {LABEL_POOL.salary.data.map(item => (
        <SelectItem
          key={item}
          active={activeFilter.salary === item}
          onClick={onSelect.bind(this, { salary: item })}
        >
          {item}
        </SelectItem>
      ))}
    </LeftAlignWrapper>
  </ColumnWrapper>
)

export default JobSalaryFilter
