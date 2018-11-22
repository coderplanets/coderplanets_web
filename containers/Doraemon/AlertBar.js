import React from 'react'

import { ICON_CMD } from '../../config'
import { Wrapper, WarningIcon, Info, Title, Desc } from './styles/alert_bar'

import { cutFrom, Trans } from '../../utils'

const AlertBar = ({ value, searchThread }) => (
  <Wrapper>
    <WarningIcon src={`${ICON_CMD}/shell_warning.svg`} />
    <Info>
      <Title>
        未找到您需要的{Trans(searchThread)} &quot;{cutFrom(value, 20)}&quot;
      </Title>
      <Desc>请尝试其他关键字或查看帮助文档</Desc>
    </Info>
  </Wrapper>
)

export default AlertBar
