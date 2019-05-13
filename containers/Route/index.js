/*
 *
 * Route
 *
 */

import React from 'react'
import { withRouter } from 'next/router'

// import Link from 'next/link'

import { connectStore, makeDebugger } from '@utils'
import { useInit } from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:Route')

const RouteContainer = ({ route, router }) => {
  useInit(route, router)

  return <React.Fragment />
}

export default connectStore(withRouter(RouteContainer))
