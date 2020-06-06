import React from 'react'

import { LABEL_POOL } from '@/config'

import {
  ColumnWrapper,
  SelectLable,
  LabelDivider,
  SelectIcon,
  SelectTitle,
  LeftAlignWrapper,
  SelectItem,
} from './styles'

// import { uid } from '@/utils'

const JobExpFilter = ({ activeFilter, onSelect }) => (
  <ColumnWrapper>
    <SelectLable>
      <SelectIcon src={LABEL_POOL.exp.iconSrc} />
      <SelectTitle>经验</SelectTitle>
    </SelectLable>
    <LabelDivider />

    <LeftAlignWrapper>
      {LABEL_POOL.exp.data.map(item => (
        <SelectItem
          key={item}
          active={activeFilter.exp === item}
          onClick={onSelect.bind(this, { exp: item })}
        >
          {item}
        </SelectItem>
      ))}
    </LeftAlignWrapper>
  </ColumnWrapper>
)

export default React.memo(JobExpFilter)
