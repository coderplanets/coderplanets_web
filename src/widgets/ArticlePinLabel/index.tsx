/*
 *
 * ArticlePinLabel
 *
 */

import { FC, memo } from 'react'

import { buildLog } from '@/utils/logger'
import { PinIcon } from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:ArticlePinLabel:index')

export type TProps = {
  top?: number
  left?: number
  article: {
    isPinned?: boolean
  }
}
const ArticlePinLabel: FC<TProps> = ({ article, top = 24, left = -30 }) => {
  if (article.isPinned) return <PinIcon top={top} left={left} />

  return null
}

export default memo(ArticlePinLabel)
