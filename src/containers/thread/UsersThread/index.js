/*
 *
 * UsersThread
 *
 */

import React from 'react'
import dynamic from 'next/dynamic'

import { connectStore, buildLog } from '@/utils'
import { useScript } from '@/hooks'

import NumDashboard from './NumDashboard'
import MapLoading from './MapLoading'

import { Wrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:UsersThread')

export const GeoMapSSR = dynamic(() => import('./GeoMap.js'), {
  /* eslint-disable react/display-name */
  loading: () => <MapLoading />,
  ssr: false,
})

const UsersThreadContainer = ({ usersThread }) => {
  /* load g2 from CDN, it's too big for dynamic import, and i am poor ..' */
  const [g2ScriptLoaded] = useScript(
    'https://a.alipayobjects.com/g/datavis/g2/2.3.13/index.js',
  )

  useInit(usersThread)

  const {
    geoInfosData,
    geoDataLoading,
    curCommunity,
    curTheme,
    showNums,
  } = usersThread

  const ready = g2ScriptLoaded && GeoMapSSR !== null && !geoDataLoading

  return (
    <Wrapper>
      {ready && (
        <NumDashboard
          expand={showNums}
          total={curCommunity.subscribersCount}
          geoData={geoInfosData}
        />
      )}
      {ready ? (
        <GeoMapSSR markers={geoInfosData} curTheme={curTheme} />
      ) : (
        <MapLoading />
      )}
    </Wrapper>
  )
}

export default connectStore(UsersThreadContainer)
