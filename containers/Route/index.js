/*
 *
 * Route
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import { withRouter } from 'next/router'

// import Link from 'next/link'

import { makeDebugger, storePlug } from 'utils'
import { init, uninit } from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:Route')

class RouteContainer extends React.Component {
  componentDidMount() {
    const { route, router } = this.props
    init(route, router)
  }

  componentWillUnmount() {
    uninit()
  }

  render() {
    return <React.Fragment />
  }
}

export default inject(storePlug('route'))(observer(withRouter(RouteContainer)))
// export default inject(storePlug('route'))(observer(RouteContainer))
