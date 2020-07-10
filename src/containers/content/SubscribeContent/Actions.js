import React from 'react'

import { ICON_CMD } from '@/config'
import {
  Wrapper,
  InnerWrapper,
  SubscribeBtn,
  SubscribeIcon,
  Desc,
} from './styles/actions'

const Actions = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <SubscribeBtn>
          <SubscribeIcon src={`${ICON_CMD}/header/more_subscribe.svg`} />
          订阅内容
        </SubscribeBtn>
        <Desc>可随时取消订阅</Desc>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Actions
