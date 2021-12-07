import React from 'react'

import { ICON, ICON_BASE } from '@/config'

import CommunityInfo from './CommunityInfo'

import {
  MenuWrapper,
  CommunityWrapper,
  ExploreWrapper,
  AccountWrapper,
  SiteLogo,
  UserLogo,
  ExploreLogo,
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

export const CommunityBlock = ({ isExpand }) => {
  const bgColor = '#194d5f'
  const activeBgColor = '#196f70'
  const isSubscribed = false

  return (
    <CommunityWrapper bgColor={isSubscribed ? activeBgColor : bgColor}>
      <CommunityInfo isSubscribed={isSubscribed} isExpand={isExpand} />
      <ArrowShape bgColor={isSubscribed ? activeBgColor : bgColor} />
    </CommunityWrapper>
  )
}

export const ExploreBlock = () => {
  const bgColor = '#071f27'

  return (
    <ExploreWrapper bgColor={bgColor}>
      <ArrowShapeLeft bgColor={bgColor} />
      <ExploreLogo src={`${ICON}/discover.svg`} />
    </ExploreWrapper>
  )
}

export const AccountBlock = () => {
  const bgColor = '#013B49'

  return (
    <AccountWrapper bgColor={bgColor}>
      <ArrowShapeLeft bgColor={bgColor} />
      <UserLogo />
    </AccountWrapper>
  )
}
