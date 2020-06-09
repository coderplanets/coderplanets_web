import React from 'react'

import { ICON_CMD } from '@/config'
import {
  SelectBox,
  ChuanChuanIcon,
  Selectors,
  By,
  Circle,
} from './styles/chuan_selector'

const ChuanSelector = ({ active, onSelect }) => (
  <SelectBox>
    <ChuanChuanIcon src={`${ICON_CMD}/chuanchuan.svg`} />

    <Selectors>
      <By>X</By>
      <Circle active={active === 1} onClick={() => onSelect(1)}>
        1
      </Circle>
      <Circle active={active === 5} onClick={() => onSelect(5)}>
        5
      </Circle>
      <Circle active={active === 10} onClick={() => onSelect(10)}>
        10
      </Circle>
      <Circle active={active === 50} onClick={() => onSelect(50)}>
        50
      </Circle>
      <Circle active={active === 100} onClick={() => onSelect(100)}>
        100
      </Circle>
    </Selectors>
  </SelectBox>
)

export default React.memo(ChuanSelector)
