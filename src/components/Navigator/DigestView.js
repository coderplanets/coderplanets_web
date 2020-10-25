import React from 'react'

import { Breadcrumbs, Logo, LogoLink, LineDivider, LogoText } from './styles'

import MainEntries from './MainEntries/index'

const DigestView = ({ showLogoText }) => {
  return (
    <Breadcrumbs>
      <LogoLink href="/home/posts">
        <Logo />
        {showLogoText && <LogoText>coderplanes</LogoText>}
      </LogoLink>
      <LineDivider />
      <MainEntries />
    </Breadcrumbs>
  )
}

export default React.memo(DigestView)
