/*
 *
 * Header
 *
 */

import { FC } from 'react'
import { ANCHOR } from '@/constant'
import usePlatform from '@/hooks/usePlatform'

import type { TC11N, TMetric, TCommunity } from '@/spec'
import DesktopView from './DesktopView'

import { Wrapper, MobileWrapper } from './styles'

export type TProps = {
  metric: TMetric
  c11n?: TC11N
  community?: TCommunity
}

const HeaderContainer: FC<TProps> = ({ metric }) => {
  const { isMobile } = usePlatform()
  return (
    <Wrapper id={ANCHOR.GLOBAL_HEADER_ID} testid="">
      {!isMobile ? <DesktopView metric={metric} /> : <MobileWrapper />}
    </Wrapper>
  )
}

export default HeaderContainer
