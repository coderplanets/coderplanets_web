import React from 'react'

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
          <SubscribeBtn>订阅</SubscribeBtn>
          <SubscribeText>
            订阅后会不定期推送社区开发及运营动态，欢迎订阅（可随时取消）。
          </SubscribeText>
        </SubscribeWrapper>
        <SocialList />
      </InnerWrapper>
    </Wrapper>
  )
}

export default React.memo(ContactBar)
