import React from 'react'

import { Wrapper, SlashSign, DateText } from '../styles/list/toggler_button'

type TProps = {
  text: string
}

const TogglerButton: React.FC<TProps> = ({ text }) => (
  <Wrapper>
    <SlashSign>&#47;&#47;</SlashSign> <DateText>{text}</DateText>
  </Wrapper>
)

export default React.memo(TogglerButton)
