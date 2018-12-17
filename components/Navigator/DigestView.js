import React from 'react'

import { ICON_CMD } from '../../config'
import Popover from '../Popover'

import {
  Breadcrumbs,
  Logo,
  LogoText,
  BetaLogo,
  ShortAddr,
  ShortDesc,
} from './styles'

import MainEntries from './MainEntries'

const DigestView = () => (
  <Breadcrumbs>
    <Logo src={`${ICON_CMD}/keyboard_logo.png`} />
    <Popover
      placement="bottom"
      trigger="hover"
      content={
        <ShortAddr>
          <ShortDesc>暗号: </ShortDesc>
          cps.fun
          <ShortDesc> (正在备案中)</ShortDesc>
        </ShortAddr>
      }
    >
      <LogoText>coderplanets-</LogoText>
    </Popover>
    <BetaLogo src={`${ICON_CMD}/beta.svg`} />
    <MainEntries />
  </Breadcrumbs>
)

export default DigestView
