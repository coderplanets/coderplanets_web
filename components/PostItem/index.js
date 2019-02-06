/*
 *
 * PostItem
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { makeDebugger, C11N } from 'utils'
import ArticleItemPrefixLabel from 'components/ArticleItemPrefixLabel'

import DigestView from './DigestView'
import ListView from './ListView'
import { getOpacity } from './helper'

import { Wrapper } from './styles'

/* eslint-disable-next-line */
const debug = makeDebugger('c:PostItem:index')

const PostItem = ({
  entry,
  cover,
  active,
  onPreview,
  onUserSelect,
  onAuthorSelect,
  accountInfo,
}) => {
  // debug('customization --> ', customization)
  const {
    customization: { contentsLayout, contentDivider, contentHover },
  } = accountInfo

  return (
    <Wrapper
      opacity={getOpacity(entry, active, accountInfo)}
      hover={contentHover}
      divider={contentDivider}
    >
      <ArticleItemPrefixLabel entry={entry} accountInfo={accountInfo} />
      {contentsLayout === C11N.DIGEST ? (
        <DigestView
          entry={entry}
          cover={cover}
          onPreview={onPreview}
          onUserSelect={onUserSelect}
          onAuthorSelect={onAuthorSelect}
        />
      ) : (
        <ListView
          entry={entry}
          cover={cover}
          onPreview={onPreview}
          onAuthorSelect={onAuthorSelect}
        />
      )}
    </Wrapper>
  )
}

PostItem.propTypes = {
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
  cover: PropTypes.oneOf(['avatar', 'source']),

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
  onPreview: PropTypes.func,
  onUserSelect: PropTypes.func,
  onAuthorSelect: PropTypes.func,
}

PostItem.defaultProps = {
  onPreview: debug,
  onUserSelect: debug,
  onAuthorSelect: debug,
  active: {},
  cover: 'avatar',
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

export default PostItem
