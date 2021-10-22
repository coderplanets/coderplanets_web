import React from 'react'

import {
  Wrapper,
  BarRow,
  Bar,
} from '../styles/pagi_option_selector/three_column'

const ThreeColumn = ({ active }) => {
  return (
    <Wrapper>
      <BarRow>
        <Bar active={active} />
        <Bar active={active} />
        <Bar active={active} />
      </BarRow>
      <BarRow>
        <Bar active={active} />
        <Bar active={active} />
        <Bar active={active} />
      </BarRow>
    </Wrapper>
  )
}

export default React.memo(ThreeColumn)
