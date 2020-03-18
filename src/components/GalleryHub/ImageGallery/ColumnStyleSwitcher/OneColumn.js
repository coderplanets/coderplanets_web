import React, { useCallback } from 'react'

import {
  Wrapper,
  MainBar,
  SubbarWrapper,
  SubBar,
} from '../../styles/column_style_switcher/one_column'

const OneColumn = ({ active, onSelect }) => {
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

export default React.memo(OneColumn)
