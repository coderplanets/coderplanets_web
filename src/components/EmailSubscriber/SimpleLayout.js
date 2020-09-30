import React from 'react'
import { ICON } from '@/config'

// import { Button } from '@/components/Buttons'

import {
  Wrapper,
  InnerWrapper,
  SubscribeInput,
  MailBoxIcon,
} from './styles/simple_layout'

const SimpleLayout = ({ onOpen, placeholder }) => {
  return (
    <Wrapper onClick={onOpen}>
      <InnerWrapper>
        <SubscribeInput placeholder={placeholder} />
        {/* <Button size="tiny">订&nbsp;阅</Button> */}
        <MailBoxIcon src={`${ICON}/email_solid.svg`} />
      </InnerWrapper>
    </Wrapper>
  )
}

export default SimpleLayout
