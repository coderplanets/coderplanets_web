import React from 'react'

import SocialList from '../SocialList'
import {
  Wrapper,
  InnerWrapper,
  SubscribeWrapper,
  SubscribeInput,
  SubscribeBtnWrapper,
  SubscribeBtn,
  SubscribeText,
  SubscribeCancel,
} from '../styles/digest_view/contact_bar'

const ContactBar = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <SubscribeWrapper>
          <SubscribeInput />
          <SubscribeBtnWrapper>
            <SubscribeBtn>订阅</SubscribeBtn>
          </SubscribeBtnWrapper>
          <SubscribeText>
            订阅后会不定期推送社区开发及运营动态，欢迎订阅（可随时
            <SubscribeCancel>取消</SubscribeCancel>）。
          </SubscribeText>
        </SubscribeWrapper>
        <SocialList />
      </InnerWrapper>
    </Wrapper>
  )
}

export default React.memo(ContactBar)
