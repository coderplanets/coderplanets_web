/*
 *
 * ArticleItemPrefixLabel
 *
 */

import { FC, memo } from 'react'

import { buildLog } from '@/utils/logger'
import { PinIcon } from './styles'
import ReadLabel from './ReadLabel'

/* eslint-disable-next-line */
const log = buildLog('c:ArticleItemPrefixLabel:index')

export type TProps = {
  topOffset?: string
  entry: {
    viewerHasViewed?: boolean
    pin?: boolean
  }
}
const ArticleItemPrefixLabel: FC<TProps> = ({ entry, topOffset = '22px' }) => {
  if (entry.pin) return <PinIcon top={topOffset} />

  return <ReadLabel entry={entry} topOffset={topOffset} />
}

export default memo(ArticleItemPrefixLabel)
