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
      <MailIcon src={`${ICON}/email_solid.svg`} />
      <CurveLineIcon src={`${ICON}/curve_line.svg`} />
      <MailBoxIcon src={`${ICON}/email_box.svg`} />
    </Wrapper>
  )
}

export default EmailHintIcon
