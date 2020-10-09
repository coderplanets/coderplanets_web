import React from 'react'
import { ICON } from '@/config'

import {
  Wrapper,
  SignIcon,
  Title,
  Desc,
  SubscribeInput,
  SubscribeBtnWrapper,
  SubscribeBtn,
  Cancel,
} from '../styles/default_layout/active_view'

const ActiveView = ({ title, desc, onCancel }) => {
  return (
    <Wrapper>
      <SignIcon src={`${ICON}/subscribe/email-envelope.svg`} />
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
      <SubscribeInput placeholder="邮件地址" />
      <SubscribeBtnWrapper>
        <Cancel
          onClick={() => {
            onCancel()
          }}
        >
          以后再说
        </Cancel>
        <SubscribeBtn size="tiny" disabled>
          订&nbsp;阅
        </SubscribeBtn>
      </SubscribeBtnWrapper>
    </Wrapper>
  )
}

export default ActiveView
