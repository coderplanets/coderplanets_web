import React from 'react'

import {
  Wrapper,
  BarRow,
  Bar,
  Dot,
} from '../styles/pagi_option_selector/masonry_column'

const MasonryColumn = ({ active }) => {
  return (
    <Wrapper>
      <BarRow>
        <Dot active={active} />
        <Bar active={active} />
      </BarRow>
      <BarRow>
        <Bar active={active} />
        <Dot active={active} />
      </BarRow>
      <BarRow>
        <Dot active={active} />
        <Bar active={active} />
      </BarRow>
    </Wrapper>
  )
}

export default React.memo(MasonryColumn)
