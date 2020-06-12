import React from 'react'

// import { ICON_CMD } from '@/config'
// import Tooltip from '@/components/Tooltip'

import {
  Breadcrumbs,
  Logo,
  LogoLink,
  DotDivider,
  // LogoText,
  // BetaLogo,
  // ShortAddr,
  // ShortDesc,
} from './styles'

import MainEntries from './MainEntries'

const DigestView = () => {
  return (
    <Breadcrumbs>
      <LogoLink href="/home/posts">
        <Logo />
      </LogoLink>
      <DotDivider />
      <MainEntries />
    </Breadcrumbs>
  )
}

export default React.memo(DigestView)
