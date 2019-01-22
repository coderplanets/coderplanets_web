/*
 *
 * RepoItem
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { makeDebugger, cutFrom, C11N } from 'utils'
import ArticleItemPrefixLabel from 'components/ArticleItemPrefixLabel'

import Header from './Header'
import Footer from './Footer'

import { Wrapper, BodyDigest } from './styles'

import { getOpacity } from './helper'

/* eslint-disable-next-line */
const debug = makeDebugger('c:RepoItem:index')

const RepoItem = ({ entry, active, onPreview, accountInfo }) => (
  <Wrapper
    opacity={getOpacity(entry, active, accountInfo)}
    hover={accountInfo.customization.contentHover}
  >
    <ArticleItemPrefixLabel
      entry={entry}
      accountInfo={accountInfo}
      topoffset="22px"
    />
    <Header entry={entry} onPreview={onPreview.bind(this, entry)} />
    <BodyDigest>{cutFrom(entry.desc, 180)}</BodyDigest>
    <Footer
      contributors={entry.contributors}
      author={entry.author}
      insertedAt={entry.insertedAt}
    />
  </Wrapper>
)

RepoItem.propTypes = {
  active: PropTypes.object,

  entry: PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string,
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
      contentHover: PropTypes.bool,
      displayDensity: PropTypes.oneOf(['20', '25', '30']),
    }),
  }),
  onPreview: PropTypes.func,
}

RepoItem.defaultProps = {
  onPreview: debug,
  active: {},
  accountInfo: {
    isLogin: false,
    customization: PropTypes.shape({
      contentsLayout: C11N.DIGEST,
      contentHover: true,
      markViewed: true,
      displayDensity: '20',
    }),
  },
}

export default RepoItem
