/*
 *
 * Header
 *
 */

import React from 'react'

import { ANCHOR } from '@/constant'
import { useDevice } from '@/hooks'

import DesktopView from './DesktopView/index'

import { Wrapper, MobileWrapper } from './styles'

const HeaderContainer = ({ metric }) => {
  const { isMobile } = useDevice()

  return (
    <Wrapper id={ANCHOR.GLOBAL_HEADER_ID}>
      {!isMobile ? <DesktopView metric={metric} /> : <MobileWrapper />}
    </Wrapper>
  )
}

export default HeaderContainer
