import React, { useCallback } from 'react'

import {
  Wrapper,
  TopBar,
  BottomBar,
} from '../../styles/column_style_switcher/one_column'

const OneColumn = ({ active, onSelect }) => {
  const handleSelect = useCallback(() => {
    onSelect(1)
  }, [onSelect])

  return (
    <Wrapper onClick={handleSelect}>
      <TopBar active={active} />
      <BottomBar active={active} />
    </Wrapper>
  )
}

export default React.memo(OneColumn)
