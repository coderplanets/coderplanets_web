/*
 *
 * DotDivider
 *
 */

import React from 'react'

import { buildLog } from '@/utils'
import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:DotDivider:index')

export type TProps = {
  className?: string
  radius?: number
  space?: number
}
const DotDivider: React.FC<TProps> = ({
  radius = 3,
  space = 3,
  className = 'dot-divider-class',
}) => {
  return <Wrapper radius={radius} space={space} className={className} />
}

export default React.memo(DotDivider)
