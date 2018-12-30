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

const ArticleItemPrefixLabel = ({ entry, accountInfo }) => {
  if (entry.pin) return <PinIcon />

  return <ReadLabel entry={entry} accountInfo={accountInfo} />
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
}

ArticleItemPrefixLabel.defaultProps = {}

export default React.memo(ArticleItemPrefixLabel)
