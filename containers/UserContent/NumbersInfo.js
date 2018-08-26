import React from 'react'

import NumSection from './NumSection'
import { Wrapper, Divider } from './styles/numbers_info'

const NumbersInfo = () => (
  <Wrapper>
    <NumSection title="声望" num={568} />
    <Divider />
    <NumSection title="关注者" num={230} />
    <Divider />
    <NumSection title="关注中" num={100} />
  </Wrapper>
)

export default NumbersInfo
