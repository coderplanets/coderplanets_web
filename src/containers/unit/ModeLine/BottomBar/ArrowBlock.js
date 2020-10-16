import React from 'react'

import { ICON, ICON_BASE } from '@/config'

import CommunityInfo from './CommunityInfo'

import {
  MenuWrapper,
  CommunityWrapper,
  AccountWrapper,
  SiteLogo,
  MenuLogo,
  ArrowShape,
  MenuArrowShape,
  ArrowShapeLeft,
} from '../styles/bottom_bar/arrow_block'

export const MenuBlock = ({ active, onClick }) => {
  const bgColor = '#071f27'

  return (
    <MenuWrapper bgColor={bgColor} onClick={onClick}>
      <SiteLogo src={`${ICON_BASE}/site_logo.svg`} active={active} />
      <MenuArrowShape bgColor={bgColor} />
    </MenuWrapper>
  )
}

export const CommunityBlock = () => {
  const bgColor = '#194d5f'
  const activeBgColor = '#196f70'
  const isSubscribed = false

  return (
    <CommunityWrapper bgColor={isSubscribed ? activeBgColor : bgColor}>
      <CommunityInfo isSubscribed={isSubscribed} />
      <ArrowShape bgColor={isSubscribed ? activeBgColor : bgColor} />
    </CommunityWrapper>
  )
}

export const AccountBlock = () => {
  const bgColor = '#071f27'

  return (
    <AccountWrapper bgColor={bgColor}>
      <ArrowShapeLeft bgColor={bgColor} />
      <MenuLogo src={`${ICON}/user/account-solid.svg`} />
    </AccountWrapper>
  )
}
