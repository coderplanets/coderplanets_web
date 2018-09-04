import React from 'react'

import { ICON_ASSETS } from '../../config'
import { Wrapper, Icon, Title } from './styles/error_msg'

const msgDict = {
  notifications: '没有收到关注消息',
  mentions: '还没有人提到你',
  sys_notifications: '没有收到系统消息',
}

const EmptyMsg = ({ type }) => {
  return (
    <Wrapper>
      <Icon src={`${ICON_ASSETS}/cmd/planet_v2.svg`} />
      <Title>{msgDict[type]}</Title>
    </Wrapper>
  )
}

export default EmptyMsg
