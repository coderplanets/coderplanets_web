import React from 'react'

import { ICON } from '@/config'

import CommunityInfo from './CommunityInfo'

import {
  MenuWrapper,
  CommunityWrapper,
  AccountWrapper,
  MenuLogo,
  ArrowShape,
  ArrowShapeLeft,
} from '../styles/bottom_bar/arrow_block'
import { openMobileNaviMenu } from '../logic'

export const MenuBlock = () => {
  const bgColor = '#071f27'

  return (
    <MenuWrapper bgColor={bgColor} onClick={openMobileNaviMenu}>
      <MenuLogo src={`${ICON}/shape/more-3.svg`} />
      <ArrowShape bgColor={bgColor} />
    </MenuWrapper>
  )
}

export const CommunityBlock = () => {
  const bgColor = '#194d5f'

  return (
    <CommunityWrapper bgColor={bgColor}>
      <CommunityInfo />
      <ArrowShape bgColor={bgColor} />
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
