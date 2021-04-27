import React, { FC } from 'react'

import {
  Wrapper,
  SlashSign,
  DividerLine,
  Text,
} from '../styles/list/toggler_button'

type TProps = {
  text: string
}

const TogglerButton: FC<TProps> = ({ text }) => (
  <Wrapper>
    <SlashSign>&#47;&#47;</SlashSign>
    <DividerLine />
    <Text>{text}</Text>
  </Wrapper>
)

export default React.memo(TogglerButton)
