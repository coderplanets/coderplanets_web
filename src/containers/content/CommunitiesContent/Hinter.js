import React from 'react'

// import { ICON_CMD } from 'config'
import { Wrapper, Title, Desc } from './styles/hinter'

const Hinter = ({ title, desc }) => (
  <Wrapper>
    <Title>【{title}】</Title>
    <Desc>{desc}</Desc>
  </Wrapper>
)

export default Hinter
