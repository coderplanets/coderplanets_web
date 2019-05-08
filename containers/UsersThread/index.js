/*
 *
 * UsersThread
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import dynamic from 'next/dynamic'

import { makeDebugger, storePlug } from '@utils'

import NumDashboard from './NumDashboard'
import MapLoading from './MapLoading'

import { Wrapper } from './styles'
import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:UsersThread')

let GeoMapSSR = null

class UsersThreadContainer extends React.Component {
  /*
  constructor(props) {
    super(props)

    const { usersThread } = props
    logic.init(usersThread)

    GeoMapSSR = dynamic({
      loader: () => import('./GeoMap.js'),
      loading: () => <MapLoading />,
      ssr: false,
    })
  }
  */

  componentDidMount() {
    const { usersThread } = this.props

    logic.init(usersThread)

    GeoMapSSR = dynamic({
      loader: () => import('./GeoMap.js'),
      loading: () => <MapLoading />,
      ssr: false,
    })
  }

  componentWillUnmount() {
    logic.uninit()
  }

  render() {
    const { usersThread } = this.props
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
}

export default inject(storePlug('usersThread'))(observer(UsersThreadContainer))
