import React, { useCallback } from 'react'

import {
  Wrapper,
  BarRow,
  Bar,
} from '../../styles/column_style_switcher/two_column'

const OneColumn = ({ active, onSelect }) => {
  const handleSelect = useCallback(() => {
    onSelect(2)
  }, [onSelect])

  return (
    <Wrapper onClick={handleSelect}>
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

export default React.memo(OneColumn)
