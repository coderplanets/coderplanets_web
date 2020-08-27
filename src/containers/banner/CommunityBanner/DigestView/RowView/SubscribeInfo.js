import React from 'react'

import { ICON_CMD } from '@/config'
import {
  Wrapper,
  Item,
  Icon,
  OnlineDot,
  Desc,
} from '../../styles/digest_view/row_view/subscribe_info'

const SubscribeInfo = () => {
  return (
    <Wrapper>
      <Item>
        <Icon src={`${ICON_CMD}/account.svg`} />
        <Desc>2237 人关注</Desc>
      </Item>
      <Item>
        <OnlineDot />
        <Desc>22 在线</Desc>
      </Item>
    </Wrapper>
  )
}

export default SubscribeInfo
