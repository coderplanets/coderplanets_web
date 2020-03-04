import React, { useCallback } from 'react'

import { Wrapper, Bar } from '../../styles/column_style_switcher/one_column'

const OneColumn = ({ active, onSelect }) => {
  const handleSelect = useCallback(() => {
    onSelect(1)
  }, [onSelect])

  return (
    <Wrapper onClick={handleSelect}>
      <Bar active={active} />
      <Bar active={active} />
    </Wrapper>
  )
}

export default React.memo(OneColumn)
