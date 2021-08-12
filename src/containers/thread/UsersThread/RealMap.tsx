/*
 *
 * UsersThread
 *
 */

import { FC, Fragment } from 'react'
import { useTheme } from 'styled-components'

import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'
import { useScript } from '@/hooks'

import NumDashboard from './NumDashboard'
import MapLoading from './MapLoading'
import GeoMap from './GeoMap'

import type { TStore } from './store'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:UsersThread')

type TProps = {
  usersThread?: TStore
}

const UsersThreadContainer: FC<TProps> = ({ usersThread: store }) => {
  /* load g2 from CDN, it's too big for dynamic import, and i am poor ..' */
  const [g2ScriptLoaded] = useScript(
    'https://a.alipayobjects.com/g/datavis/g2/2.3.13/index.js',
  )

  useInit(store)
  const theme = useTheme()

  const { geoInfosData, geoDataLoading, curCommunity, curTheme } = store
  const ready = g2ScriptLoaded && !geoDataLoading

  return (
    <Fragment>
      {ready && (
        <NumDashboard
          total={curCommunity.subscribersCount}
          geoData={geoInfosData}
        />
      )}
      {ready ? (
        <GeoMap markers={geoInfosData} curTheme={curTheme} theme={theme} />
      ) : (
        <MapLoading />
      )}
    </Fragment>
  )
}

export default pluggedIn(UsersThreadContainer) as FC<TProps>
