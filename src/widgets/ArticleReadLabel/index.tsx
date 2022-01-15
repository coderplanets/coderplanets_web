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
  const accountInfo = useAccount()

  if (!accountInfo || entry.pin) return null

  const { markViewed } = accountInfo.customization
  const { viewerHasViewed } = entry

  // return <ReadedLabel top={top} left={left} />
  if (markViewed && !viewerHasViewed) {
    return <ReadedLabel top={top} left={left} />
  }

  return null
}

export default memo(ArticleReadLabel)
