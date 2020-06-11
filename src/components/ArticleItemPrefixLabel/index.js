/*
 *
 * ArticleItemPrefixLabel
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@/utils'
import { PinIcon } from './styles'
import ReadLabel from './ReadLabel'

/* eslint-disable-next-line */
const log = buildLog('c:ArticleItemPrefixLabel:index')

const ArticleItemPrefixLabel = ({ entry, accountInfo, topOffset }) => {
  if (entry.pin) return <PinIcon top={topOffset} />

  return (
    <ReadLabel entry={entry} accountInfo={accountInfo} topOffset={topOffset} />
  )
}

ArticleItemPrefixLabel.propTypes = {
  accountInfo: T.shape({
    isLogin: T.bool,
    customization: T.shape({
      markViewed: T.bool,
    }),
  }).isRequired,
  entry: T.shape({
    viewerHasViewed: T.bool,
    pin: T.bool,
  }).isRequired,
  topOffset: T.string,
}

ArticleItemPrefixLabel.defaultProps = {
  topOffset: '14px',
}

export default React.memo(ArticleItemPrefixLabel)
