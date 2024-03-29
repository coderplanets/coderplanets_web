import React from 'react'

import { ICON_CMD } from '@/config'
import { Trans } from '@/utils/i18n'
import { cutRest } from '@/utils/helper'
import { Wrapper, WarningIcon, Info, Title, Desc } from './styles/alert_bar'

const AlertBar = ({ value, searchThread }) => (
  <Wrapper>
    <WarningIcon src={`${ICON_CMD}/shell_warning.svg`} />
    <Info>
      <Title>
        未找到您需要的
        {Trans(searchThread)} &quot;
        {cutRest(value, 20)}
        &quot;
      </Title>
      <Desc>请尝试其他关键字或查看帮助文档</Desc>
    </Info>
  </Wrapper>
)

export default AlertBar
