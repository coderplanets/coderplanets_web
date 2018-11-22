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
import { init, routeChange } from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:Route')
/* eslint-enable no-unused-vars */

class RouteContainer extends React.Component {
  /*
  constructor(props) {
    super(props)

    const { route, router } = props
    init(route, router)

    Router.onRouteChangeComplete = () => {
      const { route } = props
      routeChange(route)
    }
  }
  */
  componentDidMount() {
    const { route, router } = this.props
    init(route, router)

    Router.onRouteChangeComplete = () => {
      const { route } = this.props
      routeChange(route)
    }
  }

  render() {
    return <div />
  }
}

export default inject(storePlug('route'))(observer(withRouter(RouteContainer)))
