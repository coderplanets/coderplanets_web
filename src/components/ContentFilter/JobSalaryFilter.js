import React from 'react'

import { ICON_CMD, LABEL_POOL } from '@/config'

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

const JobSalaryFilter = ({ activeFilter, onSelect }) => (
  <ColumnWrapper>
    <SelectLabel>
      <SelectIcon src={`${ICON_CMD}/money_frame.svg`} />
      <SelectTitle>月薪</SelectTitle>
    </SelectLabel>
    <LabelDivider />

    <LeftAlignWrapper>
      {LABEL_POOL.salary.data.map((item) => (
        <SelectItem
          key={item}
          active={activeFilter.salary === item}
          onClick={() => onSelect({ salary: item })}
        >
          {item}
        </SelectItem>
      ))}
    </LeftAlignWrapper>
  </ColumnWrapper>
)

export default React.memo(JobSalaryFilter)
