import React from 'react'

import { ICON } from '@/config'
import FollowButton from '@/components/FollowButton'

import {
  Wrapper,
  Item,
  StateItem,
  Icon,
  OnlineDot,
  Desc,
} from '../../styles/digest_view/row_view/subscribe_info'

const SubscribeInfo = () => {
  return (
    <Wrapper>
      <Item>
        <StateItem>
          <Icon src={`${ICON}/user/account-solid.svg`} />
          <Desc>2237 人关注</Desc>
        </StateItem>
        <FollowButton
          hasFollowed
          userId="todo"
          onFollow={console.log}
          onUndoFollow={console.log}
          size="tiny"
          noBorderWhenFollowed
        />
      </Item>
      <Item>
        <StateItem>
          <OnlineDot />
          <Desc>22 在线</Desc>
        </StateItem>
      </Item>
    </Wrapper>
  )
}

export default SubscribeInfo
