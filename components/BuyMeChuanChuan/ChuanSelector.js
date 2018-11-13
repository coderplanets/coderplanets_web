import React from 'react'

import { ICON_CMD } from '../../config'
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
      <Circle active={active === 1} onClick={onSelect.bind(this, 1)}>
        1
      </Circle>
      <Circle active={active === 2} onClick={onSelect.bind(this, 2)}>
        2
      </Circle>
      <Circle active={active === 3} onClick={onSelect.bind(this, 3)}>
        3
      </Circle>
      <Circle active={active === 5} onClick={onSelect.bind(this, 5)}>
        5
      </Circle>
      <Circle active={active === 10} onClick={onSelect.bind(this, 10)}>
        10
      </Circle>
    </Selectors>
  </SelectBox>
)

export default ChuanSelector
