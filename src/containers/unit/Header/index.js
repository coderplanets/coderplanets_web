/*
 *
 * Header
 *
 */

import React from 'react'
import { useMedia } from '@/hooks'

import { ANCHOR } from '@/constant'
import DesktopView from './DesktopView'

import { Wrapper, MobileWrapper } from './styles'

const HeaderContainer = () => {
  const { mobile } = useMedia()

  return (
    <Wrapper id={ANCHOR.GLOBAL_HEADER_ID}>
      {!mobile ? <DesktopView /> : <MobileWrapper />}
    </Wrapper>
  )
}

export default HeaderContainer
