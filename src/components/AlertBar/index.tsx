/*
 *
 * AlertBar
 *
 */

import React from 'react'

import { buildLog } from '@/utils'

import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:AlertBar:index')

type TProps = {
  children: React.ReactNode
}

const AlertBar: React.FC<TProps> = ({ children }) => {
  return <Wrapper testid="alertBar">{children}</Wrapper>
}

export default React.memo(AlertBar)