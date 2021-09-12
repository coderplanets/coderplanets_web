/*
 * ArticleReadLabel
 */

import { FC, memo } from 'react'

import { buildLog } from '@/utils/logger'
import { useAccount } from '@/hooks'

import { ReadedLabel } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:ArticleReadLabel:index')

export type TProps = {
  top?: number
  left?: number
  entry: {
    viewerHasViewed?: boolean
    pin?: boolean
  }
}
const ArticleReadLabel: FC<TProps> = ({ entry, top = 24, left = -30 }) => {
  const { c11n } = useAccount()
  const { isLogin, markViewed } = c11n

  const { viewerHasViewed } = entry

  if (entry.pin) return null
  // return <ReadedLabel top={top} left={left} />
  if (!isLogin) return null
  if (markViewed && viewerHasViewed) {
    return <ReadedLabel top={top} left={left} />
  }

  return null
}

export default memo(ArticleReadLabel)
