import React from 'react'
import { ICON } from '@/config'

import {
  Wrapper,
  MailIcon,
  CurveLineIcon,
  MailBoxIcon,
} from './styles/email_hint_icon'

const EmailHintIcon = () => {
  return (
    <Wrapper>
      <MailIcon src={`${ICON}/subscribe/email-solid.svg`} />
      <CurveLineIcon src={`${ICON}/shape/curly-arrow.svg`} />
      <MailBoxIcon src={`${ICON}/subscribe/email-box.svg`} />
    </Wrapper>
  )
}

export default EmailHintIcon
