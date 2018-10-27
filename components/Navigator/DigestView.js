import React from 'react'

import { ICON_CMD } from '../../config'
import Popover from '../Popover'

import {
  Breadcrumbs,
  Logo,
  LogoText,
  BetaLogo,
  SiteMapWrapper,
  ShortAddr,
  ShortDesc,
  DotDivider,
  SiteLink,
} from './styles'

const DigestView = () => (
  <Breadcrumbs>
    <Logo src={`${ICON_CMD}/keyboard_logo.svg`} />
    <Popover
      placement="bottom"
      trigger="hover"
      content={
        <ShortAddr>
          <ShortDesc>暗号: https://</ShortDesc>
          cps.fun
          <ShortDesc> (备案中)</ShortDesc>
        </ShortAddr>
      }
    >
      <LogoText>Coderplanets</LogoText>
    </Popover>
    <BetaLogo src={`${ICON_CMD}/beta.svg`} />
    <SiteMapWrapper>
      <SiteLink>首页</SiteLink>
      <DotDivider />
      <SiteLink>社区</SiteLink>
    </SiteMapWrapper>
  </Breadcrumbs>
)

export default DigestView
