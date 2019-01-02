/*
 *
 * ArticleItemPrefixLabel
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { PinIcon } from './styles'
import ReadLabel from './ReadLabel'

import { makeDebugger } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:ArticleItemPrefixLabel:index')
/* eslint-enable no-unused-vars */

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
