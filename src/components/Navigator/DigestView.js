import React from 'react'
import Link from 'next/link'

// import { ICON_CMD } from '@config'
// import Popover from '@components/Popover'

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
    {/* <Popover
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
      <LogoText href="/home/posts">coderplanets</LogoText>
    </Popover> */}
    {/* <BetaLogo src={`${ICON_CMD}/beta.svg`} /> */}
    <MainEntries curRoute={curRoute} />
  </Breadcrumbs>
)

export default React.memo(DigestView)
