import React from 'react'

import { Wrapper, BarRow, Bar } from '../styles/pagi_option_selector/two_column'

const TwoColumn = ({ active }) => {
  return (
    <Wrapper>
      <BarRow>
        <Bar active={active} />
        <Bar active={active} />
      </BarRow>
      <BarRow>
        <Bar active={active} />
        <Bar active={active} />
      </BarRow>
    </Wrapper>
  )
}

export default React.memo(TwoColumn)
