/*
 *
 * Route
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import Router, { withRouter } from 'next/router'

// import Link from 'next/link'

import { makeDebugger, storePlug } from '../../utils'
import { init, syncRoute } from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:Route')
/* eslint-enable no-unused-vars */

class RouteContainer extends React.Component {
  componentWillMount() {
    const { route, router } = this.props
    init(route)
    syncRoute(router)
    /*
    Router.onRouteChangeStart = url => {
      console.log('App is changing to: ', url)
    }
    */

    Router.onRouteChangeComplete = () => {
      // Router.onRouteChangeStart = url => {
      const { router } = this.props
      syncRoute(router)
    }
  }

  render() {
    return <div />
  }
}

export default inject(storePlug('route'))(observer(withRouter(RouteContainer)))
