/*
 *
 * Header
 *
 */

import React from 'react'

import { ANCHOR } from '@/constant'
import { isMobile } from '@/utils'

import DesktopView from './DesktopView/index'

import { Wrapper, MobileWrapper } from './styles'

const HeaderContainer = ({ metric }) => {
  return (
    <Wrapper id={ANCHOR.GLOBAL_HEADER_ID}>
      {!isMobile ? <DesktopView metric={metric} /> : <MobileWrapper />}
    </Wrapper>
  )
}

export default HeaderContainer
