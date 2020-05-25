import React from 'react'

import { Button } from '@/components/Buttons'
import SocialList from '../SocialList'
import {
  Wrapper,
  InnerWrapper,
  SubscribeWrapper,
  SubscribeInput,
  SubscribeBtn,
  SubscribeText,
} from '../styles/digest_view/contact_bar'

const ContactBar = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <SubscribeWrapper>
          <SubscribeInput />
          <SubscribeBtn>
            <Button>订阅</Button>
          </SubscribeBtn>
          <SubscribeText>
            订阅后会不定期发送社区动态，包括开发，内容等等
          </SubscribeText>
        </SubscribeWrapper>
        <SocialList />
      </InnerWrapper>
    </Wrapper>
  )
}

export default React.memo(ContactBar)
