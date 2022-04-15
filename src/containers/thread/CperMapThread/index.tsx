/*
 *
 * CperMapThread
 *
 */

import { FC } from 'react'
import dynamic from 'next/dynamic'
import { useTheme } from 'styled-components'

import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import RankingBoard from './RankingBoard'
import MapLoading from './MapLoading'

import { Wrapper } from './styles'
import type { TStore } from './store'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CperMapThread')

const GeoMap = dynamic(() => import('./GeoMap'), {
  ssr: false,
})

type TProps = {
  cperMapThread?: TStore
}

const CperMapThreadContainer: FC<TProps> = ({ cperMapThread: store }) => {
  useInit(store)
  const theme = useTheme()

  const { geoInfosData, geoDataLoading, curCommunity, curTheme } = store
  const ready = !geoDataLoading
  const markers = geoDataLoading ? [] : geoInfosData

  if (!ready) {
    return <MapLoading />
  }

  return (
    <Wrapper>
      <RankingBoard total={curCommunity.subscribersCount} geoData={markers} />
      {/* @ts-ignore */}
      <GeoMap markers={markers} curTheme={curTheme} theme={theme} />
    </Wrapper>
  )
}

export default bond(CperMapThreadContainer, 'cperMapThread') as FC<TProps>
