/*
 *
 * Header
 *
 */

import { FC } from 'react'
import { isMobile } from 'react-device-detect'

import type { TC11N, TMetric, TCommunity, TAccount } from '@/spec'
import { ANCHOR } from '@/constant'

import DesktopView from './DesktopView'

import { Wrapper, MobileWrapper } from './styles'

export type TProps = {
  metric: TMetric
  c11n?: TC11N
  community?: TCommunity
  accountInfo: TAccount
}

const HeaderContainer: FC<TProps> = (props) => {
  return (
    <Wrapper id={ANCHOR.GLOBAL_HEADER_ID} testid="">
      {!isMobile ? <DesktopView {...props} /> : <MobileWrapper />}
    </Wrapper>
  )
}

export default HeaderContainer
