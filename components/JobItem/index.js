/*
 *
 * JobItem
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

// import { ICON_CMD } from 'config'

import { makeDebugger, C11N } from 'utils'
import { Wrapper } from './styles'

import DigestView from './DigestView'
import ListView from './ListView'

import ArticleItemPrefixLabel from '../ArticleItemPrefixLabel'

import { getOpacity } from './helper'

/* eslint-disable-next-line */
const debug = makeDebugger('c:JobItem:index')

const JobItem = ({ entry, active, onPreview, accountInfo, community }) => {
  const {
    customization: { contentsLayout, contentDivider, contentHover },
  } = accountInfo

  return (
    <Wrapper
      opacity={getOpacity(entry, active, accountInfo)}
      hover={contentHover}
      divider={contentDivider}
    >
      <ArticleItemPrefixLabel
        entry={entry}
        accountInfo={accountInfo}
        topoffset="9px"
      />
      {contentsLayout === C11N.DIGEST ? (
        <DigestView entry={entry} onPreview={onPreview} community={community} />
      ) : (
        <ListView entry={entry} onPreview={onPreview} />
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
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        color: PropTypes.string,
        raw: PropTypes.string,
      })
    ),
    communities: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        logo: PropTypes.string,
      })
    ),
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
      contentDivider: PropTypes.bool,
      contentHover: PropTypes.bool,
      displayDensity: PropTypes.oneOf(['20', '25', '30']),
    }),
  }),
  community: PropTypes.string.isRequired,
  onPreview: PropTypes.func,
}

JobItem.defaultProps = {
  onPreview: debug,
  active: {},
  accountInfo: {
    isLogin: false,
    customization: PropTypes.shape({
      contentsLayout: C11N.DIGEST,
      contentDivider: false,
      contentHover: true,
      markViewed: true,
      displayDensity: '20',
    }),
  },
}

export default JobItem
