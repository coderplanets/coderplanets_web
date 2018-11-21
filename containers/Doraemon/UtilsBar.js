import React from 'react'

import { Wrapper, Info, Title, Number, Desc } from './styles/utils_bar'

const UtilsBar = () => (
  <Wrapper>
    <Info>
      <Title>
        共找到结果 <Number>7</Number> 条
      </Title>
      <Desc>查看全部</Desc>
    </Info>
  </Wrapper>
)

export default UtilsBar
