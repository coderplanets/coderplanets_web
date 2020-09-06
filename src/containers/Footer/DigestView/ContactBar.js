import React from 'react'

import { useMedia } from '@/hooks'
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

const ContactBar = ({ layout }) => {
  const { mobile } = useMedia()

  return (
    <Wrapper>
      <InnerWrapper layout={layout} mobile={mobile}>
        <SocialList />
        {!mobile && (
          <SubscribeWrapper>
            <SubscribeText>
              订阅后会不定期推送社区开发及运营动态，欢迎订阅（可随时
              <SubscribeCancel>取消</SubscribeCancel>）。
            </SubscribeText>
            <SubscribeInput />
            <SubscribeBtnWrapper>
              <SubscribeBtn>订阅</SubscribeBtn>
            </SubscribeBtnWrapper>
          </SubscribeWrapper>
        )}
      </InnerWrapper>
    </Wrapper>
  )
}

export default React.memo(ContactBar)
