/*
 *
 * RepoItem
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper, BodyDigest } from './styles'

import Header from './Header'
import Footer from './Footer'

import ArticleItemPrefixLabel from '../ArticleItemPrefixLabel'

import { getOpacity } from './helper'
import { makeDebugger, cutFrom, C11N } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:RepoItem:index')
/* eslint-enable no-unused-vars */

const RepoItem = ({ entry, active, onTitleSelect, accountInfo }) => (
  <Wrapper opacity={getOpacity(entry, active, accountInfo)}>
    <ArticleItemPrefixLabel entry={entry} accountInfo={accountInfo} />
    <Header entry={entry} onTitleSelect={onTitleSelect.bind(this, entry)} />
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
      displayDensity: PropTypes.oneOf(['20', '25', '30']),
    }),
  }),
  onTitleSelect: PropTypes.func,
}

RepoItem.defaultProps = {
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

export default RepoItem
