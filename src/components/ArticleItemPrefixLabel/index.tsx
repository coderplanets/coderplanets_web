/*
 *
 * ArticleItemPrefixLabel
 *
 */

import React, { FC } from 'react'

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
    isPinned?: boolean
  }
}
const ArticleItemPrefixLabel: FC<TProps> = ({
  entry,
  accountInfo,
  topOffset = '22px',
}) => {
  if (entry.isPinned) return <PinIcon top={topOffset} />

  return (
    <ReadLabel entry={entry} accountInfo={accountInfo} topOffset={topOffset} />
  )
}

export default React.memo(ArticleItemPrefixLabel)