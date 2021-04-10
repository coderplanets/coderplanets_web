import React from 'react'

import { Wrapper, SlashSign, DateText } from '../styles/list/date_divider'

type TProps = {
  text: string
}

const DateDivider: React.FC<TProps> = ({ text }) => (
  <Wrapper>
    <SlashSign>&#47;&#47;</SlashSign> <DateText>{text}</DateText>
  </Wrapper>
)

export default React.memo(DateDivider)
