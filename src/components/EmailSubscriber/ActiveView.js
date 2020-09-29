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
} from './styles/active_view'

const ActiveView = ({ onCancel }) => {
  return (
    <Wrapper>
      <SignIcon src={`${ICON}/email_envelope.svg`} />
      <Title>作品集市动态</Title>
      <Desc>定期推送优秀产品介绍、榜单等，可随时取消，欢迎订阅。</Desc>
      <SubscribeInput placeholder="邮件地址" />
      <SubscribeBtnWrapper>
        <Cancel
          onClick={() => {
            console.log('hhhh')
            onCancel()
          }}
        >
          以后再说
        </Cancel>
        <SubscribeBtn size="tiny">订&nbsp;阅</SubscribeBtn>
      </SubscribeBtnWrapper>
    </Wrapper>
  )
}

export default ActiveView
