/*
*
* Route
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'
import Router, { withRouter } from 'next/router'
// import Router, { withRouter } from 'next/router'

// import Link from 'next/link'

import { makeDebugger, storeSelector } from '../../utils'
import { init, syncRoute } from './logic'

const debug = makeDebugger('C:Route')

class RouteContainer extends React.Component {
  componentWillMount() {
    debug('mount')
    init(this.props.route)
    syncRoute(this.props.router)
    Router.onRouteChangeComplete = () => {
      // Router.onRouteChangeStart = url => {
      syncRoute(this.props.router)
    }
  }

  render() {
    return <div />
  }
}

export default inject(storeSelector('route'))(
  observer(withRouter(RouteContainer))
)
