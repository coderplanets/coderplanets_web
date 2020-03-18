import React, { useCallback } from 'react'

import {
  Wrapper,
  MainBar,
  SubbarWrapper,
  SubBar,
} from '../../styles/column_style_switcher/main_column'

const MainColumn = ({ active, onSelect }) => {
  const handleSelect = useCallback(() => {
    onSelect(1)
  }, [onSelect])

  return (
    <Wrapper onClick={handleSelect}>
      <MainBar active={active} />
      <SubbarWrapper>
        <SubBar active={active} marginBottom />
        <SubBar active={active} marginBottom />
        <SubBar active={active} />
        <SubBar active={active} />
      </SubbarWrapper>
    </Wrapper>
  )
}

export default React.memo(MainColumn)
