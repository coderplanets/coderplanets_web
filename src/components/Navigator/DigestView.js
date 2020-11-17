import React from 'react'

import {
  Breadcrumbs,
  Logo,
  LogoLink,
  LogoMargin,
  LineDivider,
  LogoText,
  OfflineWrapper,
} from './styles'

import MainEntries from './MainEntries/index'

const DigestView = ({ showLogoText, isOnline }) => {
  return (
    <Breadcrumbs>
      <LogoLink href="/home/posts">
        <Logo />
        {showLogoText && <LogoText>CoderPlanets</LogoText>}
      </LogoLink>

      {showLogoText ? <LogoMargin /> : <LineDivider />}

      {isOnline ? (
        <MainEntries />
      ) : (
        <OfflineWrapper>您已离线，请检查网络设置</OfflineWrapper>
      )}
    </Breadcrumbs>
  )
}

export default React.memo(DigestView)
