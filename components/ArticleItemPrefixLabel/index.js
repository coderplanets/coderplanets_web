/*
 *
 * ArticleItemPrefixLabel
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { makeDebugger } from '@utils'
import { PinIcon } from './styles'
import ReadLabel from './ReadLabel'

/* eslint-disable-next-line */
const debug = makeDebugger('c:ArticleItemPrefixLabel:index')

const ArticleItemPrefixLabel = ({ entry, accountInfo, topoffset }) => {
  if (entry.pin) return <PinIcon topoffset={topoffset} />

  return (
    <ReadLabel entry={entry} accountInfo={accountInfo} topoffset={topoffset} />
  )
}

ArticleItemPrefixLabel.propTypes = {
  accountInfo: PropTypes.shape({
    isLogin: PropTypes.bool,
    customization: PropTypes.shape({
      markViewed: PropTypes.bool,
    }),
  }).isRequired,
  entry: PropTypes.shape({
    viewerHasViewed: PropTypes.bool,
    pin: PropTypes.bool,
  }).isRequired,
  topoffset: PropTypes.string,
}

ArticleItemPrefixLabel.defaultProps = {
  topoffset: '14px',
}

export default React.memo(ArticleItemPrefixLabel)
