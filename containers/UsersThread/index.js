/*
 *
 * UsersThread
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import dynamic from 'next/dynamic'

import MapLoading from './MapLoading'

import { makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:UsersThread')
/* eslint-enable no-unused-vars */

let GeoMapSSR = null

class UsersThreadContainer extends React.Component {
  componentDidMount() {
    GeoMapSSR = dynamic({
      loader: () => import('./GeoMap.js'),
      loading: () => <MapLoading />,
      ssr: false,
    })
  }

  componentWillMount() {
    const { usersThread } = this.props
    logic.init(usersThread)
  }

  render() {
    const { usersThread } = this.props
    const { geoInfosData, geoDataLoading, curTheme } = usersThread

    const ready = GeoMapSSR !== null && !geoDataLoading

    return (
      <React.Fragment>
        {ready ? (
          <GeoMapSSR markers={geoInfosData} curTheme={curTheme} />
        ) : (
          <MapLoading />
        )}
      </React.Fragment>
    )
  }
}

export default inject(storePlug('usersThread'))(observer(UsersThreadContainer))
