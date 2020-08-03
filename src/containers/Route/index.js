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

  return <div />
}

export default connectStore(RouteContainer)
