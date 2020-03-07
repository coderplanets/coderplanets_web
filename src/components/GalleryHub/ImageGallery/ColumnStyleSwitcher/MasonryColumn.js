import React, { useCallback } from 'react'

import {
  Wrapper,
  BarRow,
  Bar,
  Dot,
} from '../../styles/column_style_switcher/masonry_column'

const OneColumn = ({ active, onSelect }) => {
  const handleSelect = useCallback(() => {
    onSelect(4)
  }, [onSelect])

  return (
    <Wrapper onClick={handleSelect}>
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

export default React.memo(OneColumn)
