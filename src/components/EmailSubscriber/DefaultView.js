import React from 'react'

import EmailHintIcon from './EmailHintIcon'

import { Wrapper, HintHolder } from './styles/default_view'

const DefaultView = ({ onOpen }) => {
  return (
    <Wrapper onClick={onOpen}>
      <HintHolder>邮件订阅</HintHolder>
      <EmailHintIcon />
    </Wrapper>
  )
}

export default DefaultView
