/*
 *
 * UsersThread
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import dynamic from 'next/dynamic'

import { makeDebugger, storePlug } from 'utils'
import MapLoading from './MapLoading'

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
