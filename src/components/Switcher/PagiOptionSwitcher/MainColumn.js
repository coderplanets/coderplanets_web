import React from 'react'

import {
  Wrapper,
  MainBar,
  SubbarWrapper,
  SubBar,
} from '../styles/pagi_option_selector/main_column'

const MainColumn = ({ active }) => {
  return (
    <Wrapper>
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
