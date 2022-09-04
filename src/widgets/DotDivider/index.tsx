/*
 *
 * DotDivider
 *
 */

import { FC, memo } from 'react'

import { buildLog } from '@/utils/logger'
import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:DotDivider:index')

export type TProps = {
  className?: string
  radius?: number
  space?: number
}
const DotDivider: FC<TProps> = ({
  radius = 2,
  space = 3,
  className = 'dot-divider-class',
}) => {
  return <Wrapper radius={radius} space={space} className={className} />
}

export default memo(DotDivider)
