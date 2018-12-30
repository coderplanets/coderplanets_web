/*
 *
 * JobItem
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

// import { ICON_CMD } from '../../config'

import { Wrapper } from './styles'

import DigestView from './DigestView'
import ListView from './ListView'

import PrefixLabel from './PrefixLabel'

import { getOpacity } from './helper'
import { makeDebugger, C11N } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:JobItem:index')
/* eslint-enable no-unused-vars */

const JobItem = ({ entry, active, onTitleSelect, accountInfo }) => {
  const {
    customization: { contentsLayout, contentDivider },
  } = accountInfo

  return (
    <Wrapper
      opacity={getOpacity(entry, active, accountInfo)}
      divider={contentDivider}
      onClick={onTitleSelect}
    >
      <PrefixLabel entry={entry} accountInfo={accountInfo} />
      {contentsLayout === C11N.DIGEST ? (
        <DigestView entry={entry} />
      ) : (
        <ListView entry={entry} onTitleSelect={onTitleSelect} />
      )}
    </Wrapper>
  )
}

JobItem.propTypes = {
  active: PropTypes.object,

  entry: PropTypes.shape({
    title: PropTypes.string,
    digest: PropTypes.string,
    views: PropTypes.number,

    author: PropTypes.shape({
      nickname: PropTypes.string,
      avatar: PropTypes.string,
    }),
  }).isRequired,

  accountInfo: PropTypes.shape({
    isLogin: PropTypes.bool,
    customization: PropTypes.shape({
      contentsLayout: PropTypes.oneOf([C11N.DIGEST, C11N.LIST]),
      markViewed: PropTypes.bool,
      displayDensity: PropTypes.oneOf(['20', '25', '30']),
    }),
  }),
  onTitleSelect: PropTypes.func,
}

JobItem.defaultProps = {
  onTitleSelect: debug,
  active: {},
  accountInfo: {
    isLogin: false,
    customization: PropTypes.shape({
      contentsLayout: C11N.DIGEST,
      markViewed: true,
      displayDensity: '20',
    }),
  },
}

export default JobItem
