import React from 'react'
import Link from 'next/link'

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

const DigestView = ({ curRoute }) => (
  <Breadcrumbs>
    <Link href="/home/posts" passHref>
      <LogoLink href="/home/posts">
        <Logo />
      </LogoLink>
    </Link>
    <DotDivider />
    <MainEntries curRoute={curRoute} />
  </Breadcrumbs>
)

export default React.memo(DigestView)
