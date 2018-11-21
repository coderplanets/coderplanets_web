import React from 'react'

import { ICON_CMD } from '../../config'
import { Wrapper, WarningIcon, Info, Title, Desc } from './styles/alert_bar'

const AlertBar = () => (
  <Wrapper>
    <WarningIcon src={`${ICON_CMD}/shell_warning.svg`} />
    <Info>
      <Title>未找到您需要的 xx</Title>
      <Desc>请尝试其他关键字或查看帮助文档</Desc>
    </Info>
  </Wrapper>
)

export default AlertBar
