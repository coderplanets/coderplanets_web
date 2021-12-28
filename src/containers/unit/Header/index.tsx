/*
 *
 * Header
 *
 */

import { FC } from 'react'
import { ANCHOR } from '@/constant'
import { isMobile } from 'react-device-detect'

import type { TMetric } from '@/spec'
import DesktopView from './DesktopView'

import { Wrapper, MobileWrapper } from './styles'

type TProps = {
  metric: TMetric
}

const HeaderContainer: FC<TProps> = ({ metric }) => {
  return (
    <Wrapper id={ANCHOR.GLOBAL_HEADER_ID} testid="">
      {!isMobile ? <DesktopView metric={metric} /> : <MobileWrapper />}
    </Wrapper>
  )
}

export default HeaderContainer
