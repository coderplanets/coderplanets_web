/*
 *
 * Route
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import { withRouter } from 'next/router'

// import Link from 'next/link'

import { makelogger, storePlug } from 'utils'
import { init, uninit } from './logic'

/* eslint-disable-next-line */
const log = makelogger('C:Route')

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

/*
import React from 'react'
import { withRouter } from 'next/router'

// import Link from 'next/link'

import { connectStore, makelogger } from '@utils'
import { useInit } from './logic'

const RouteContainer = ({ route, router }) => {
  useInit(route, router)

  return <React.Fragment />
}

export default connectStore(withRouter(RouteContainer))

*/
