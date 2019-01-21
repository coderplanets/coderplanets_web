import React from 'react'

import { ICON_CMD } from 'config'
import { Wrapper, LockIcon, Message } from './styles/locked_message'

const LockedMessage = () => (
  <Wrapper>
    <LockIcon src={`${ICON_CMD}/article_lock.svg`} />
    <Message>讨论已关闭, 不再接受新回复</Message>
  </Wrapper>
)

export default LockedMessage
