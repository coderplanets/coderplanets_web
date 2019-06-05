/*
 *
 * UsersThread
 *
 */

import React from 'react'
import dynamic from 'next/dynamic'

import { connectStore, makelogger } from '@utils'

import NumDashboard from './NumDashboard'
import MapLoading from './MapLoading'

import { Wrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = makelogger('C:UsersThread')

const GeoMapSSR = dynamic({
  loader: () => import('./GeoMap.js'),
  /* eslint-disable-next-line */
  loading: () => <MapLoading />,
  ssr: false,
})

const UsersThreadContainer = ({ usersThread }) => {
  useInit(usersThread)

  const {
    geoInfosData,
    geoDataLoading,
    curCommunity,
    curTheme,
    showNums,
  } = usersThread

  const ready = GeoMapSSR !== null && !geoDataLoading

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
