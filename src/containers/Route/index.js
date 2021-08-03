/*
 *
 * Route
 *
 */

import React from 'react'
import { useRouter } from 'next/router'

import { pluggedIn } from '@/utils/mobx'
import { useInit } from './logic'

const RouteContainer = ({ route }) => {
  const router = useRouter()
  useInit(route, router)

  return <div />
}

export default pluggedIn(RouteContainer)
