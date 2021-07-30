/*
 *
 * UsersThread
 *
 */

import React from 'react'
import dynamic from 'next/dynamic'

import { buildLog } from '@/utils'

import MapLoading from './MapLoading'

import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('C:UsersThread')

export const RealMap = dynamic(() => import('./RealMap'), {
  /* eslint-disable react/display-name */
  loading: () => <MapLoading />,
  ssr: false,
})

const UsersThread = () => {
  return (
    <Wrapper>
      <RealMap />
    </Wrapper>
  )
}

export default UsersThread
