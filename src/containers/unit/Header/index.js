/*
 *
 * Header
 *
 */

import React from 'react'
import { useMedia } from '@/hooks'

import { ANCHOR } from '@/constant'
import DesktopView from './DesktopView/index'

import { Wrapper, MobileWrapper } from './styles'

const HeaderContainer = ({ metric }) => {
  const { mobile } = useMedia()

  return (
    <Wrapper id={ANCHOR.GLOBAL_HEADER_ID}>
      {!mobile ? <DesktopView metric={metric} /> : <MobileWrapper />}
    </Wrapper>
  )
}

export default HeaderContainer
