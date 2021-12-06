/*
 *
 * Header
 *
 */

import { FC } from 'react'
import { ANCHOR } from '@/constant'
import usePlatform from '@/hooks/usePlatform'

import type { TC11N, TMetric, TCommunity, TAccount } from '@/spec'
import DesktopView from './DesktopView'

import { Wrapper, MobileWrapper } from './styles'

export type TProps = {
  metric: TMetric
  c11n?: TC11N
  community?: TCommunity
  accountInfo: TAccount
}

const HeaderContainer: FC<TProps> = (props) => {
  const { isMobile } = usePlatform()
  return (
    <Wrapper id={ANCHOR.GLOBAL_HEADER_ID} testid="">
      {!isMobile ? <DesktopView {...props} /> : <MobileWrapper />}
    </Wrapper>
  )
}

export default HeaderContainer
