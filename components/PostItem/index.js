/*
 *
 * PostItem
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper } from './styles'

import DigestView from './DigestView'
import ListView from './ListView'

import { renderReadMark, getOpacity } from './helper'
import { makeDebugger, C11N } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:PostItem:index')
/* eslint-enable no-unused-vars */

const PostItem = ({
  entry,
  cover,
  active,
  onTitleSelect,
  onUserSelect,
  accountInfo,
}) => {
  // debug('customization --> ', customization)
  const {
    customization: { contentsLayout, contentDivider },
  } = accountInfo

  debug('entry --> ', entry)
  debug('active --> ', active)

  debug('accountInfo.isLogin --> ', accountInfo.isLogin)
  debug('accountInfo.markViewed --> ', accountInfo.customization.markViewed)
  debug('get opacity: ', getOpacity(entry, active, accountInfo))
  debug('=========================================================')

  return (
    <Wrapper
      opacity={getOpacity(entry, active, accountInfo)}
      divider={contentDivider}
    >
      {renderReadMark(entry, accountInfo)}
      {contentsLayout === C11N.DIGEST ? (
        <DigestView
          entry={entry}
          cover={cover}
          onTitleSelect={onTitleSelect}
          onUserSelect={onUserSelect}
        />
      ) : (
        <ListView entry={entry} cover={cover} onTitleSelect={onTitleSelect} />
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
      displayDensity: PropTypes.oneOf(['20', '25', '30']),
    }),
  }),
  onTitleSelect: PropTypes.func,
  onUserSelect: PropTypes.func,
}

PostItem.defaultProps = {
  onTitleSelect: debug,
  onUserSelect: debug,
  active: {},
  cover: 'avatar',
  accountInfo: {
    isLogin: false,
    customization: PropTypes.shape({
      contentsLayout: C11N.DIGEST,
      markViewed: true,
      displayDensity: '20',
    }),
  },
}

export default PostItem
