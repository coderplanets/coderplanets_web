/*
 *
 * ArticlePinLabel
 *
 */

import { FC, memo } from 'react'

import { buildLog } from '@/utils/logger'
import { PinIcon } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:ArticlePinLabel:index')

export type TProps = {
  top?: number
  left?: number
  entry: {
    isPinned?: boolean
  }
}
const ArticlePinLabel: FC<TProps> = ({ entry, top = 24, left = -30 }) => {
  if (entry.isPinned) return <PinIcon top={top} left={left} />

  return null
}

export default memo(ArticlePinLabel)
