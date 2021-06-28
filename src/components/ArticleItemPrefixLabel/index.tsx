/*
 *
 * ArticleItemPrefixLabel
 *
 */

import { FC, memo } from 'react'

import type { TAccount } from '@/spec'
import { buildLog } from '@/utils'
import { PinIcon } from './styles'
import ReadLabel from './ReadLabel'

/* eslint-disable-next-line */
const log = buildLog('c:ArticleItemPrefixLabel:index')

export type TProps = {
  accountInfo: TAccount
  topOffset?: string
  entry: {
    viewerHasViewed?: boolean
    pin?: boolean
  }
}
const ArticleItemPrefixLabel: FC<TProps> = ({
  entry,
  accountInfo,
  topOffset = '22px',
}) => {
  if (entry.pin) return <PinIcon top={topOffset} />

  return (
    <ReadLabel entry={entry} accountInfo={accountInfo} topOffset={topOffset} />
  )
}

export default memo(ArticleItemPrefixLabel)
