import React from 'react'

import {
  Wrapper,
  MainBar,
  SubBarWrapper,
  SubBar,
} from '../styles/pagi_option_selector/main_column'

const MainColumn = ({ active }) => {
  return (
    <Wrapper>
      <MainBar active={active} />
      <SubBarWrapper>
        <SubBar active={active} marginBottom />
        <SubBar active={active} marginBottom />
        <SubBar active={active} />
        <SubBar active={active} />
      </SubBarWrapper>
    </Wrapper>
  )
}

export default React.memo(MainColumn)
