/*
 *
 * Header
 *
 */

import { ANCHOR } from '@/constant'
import { isMobile } from 'react-device-detect'

import DesktopView from './DesktopView/index'

import { Wrapper, MobileWrapper } from './styles'

const HeaderContainer = ({ metric }) => {
  return (
    <Wrapper id={ANCHOR.GLOBAL_HEADER_ID} testid="">
      {!isMobile ? <DesktopView metric={metric} /> : <MobileWrapper />}
    </Wrapper>
  )
}

export default HeaderContainer
