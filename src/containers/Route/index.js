/*
 *
 * Route
 *
 */

import React from 'react'
import { useRouter } from 'next/router'

import { connectStore } from '@/utils'
import { useInit } from './logic'

const RouteContainer = ({ route }) => {
  const router = useRouter()
  useInit(route, router)

  return <React.Fragment />
}

export default connectStore(RouteContainer)
