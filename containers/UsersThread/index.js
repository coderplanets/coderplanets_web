/*
 *
 * UsersThread
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import dynamic from 'next/dynamic'

import { makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:UsersThread')
/* eslint-enable no-unused-vars */

let LocationMapSSR = null

class UsersThreadContainer extends React.Component {
  componentDidMount() {
    LocationMapSSR = dynamic(import('./LocationMap'), { ssr: false })
  }

  componentWillMount() {
    const { usersThread } = this.props
    logic.init(usersThread)
  }

  render() {
    return <div>{LocationMapSSR ? <LocationMapSSR /> : null}</div>
  }
}

export default inject(storePlug('usersThread'))(observer(UsersThreadContainer))
