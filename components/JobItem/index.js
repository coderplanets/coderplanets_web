/*
 *
 * JobItem
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog, C11N } from '@utils'

import ArticleItemPrefixLabel from '@components/ArticleItemPrefixLabel'

import DigestView from './DigestView'
import ListView from './ListView'

import { Wrapper } from './styles'

import { getOpacity } from './helper'

/* eslint-disable-next-line */
const log = buildLog('c:JobItem:index')

const JobItem = ({
  entry,
  active,
  onPreview,
  onAuthorSelect,
  accountInfo,
  community,
}) => {
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
        <DigestView
          entry={entry}
          onPreview={onPreview}
          onAuthorSelect={onAuthorSelect}
          community={community}
        />
      ) : (
        <ListView entry={entry} onPreview={onPreview} />
      )}
    </Wrapper>
  )
}

JobItem.propTypes = {
  active: T.object,
  entry: T.shape({
    title: T.string,
    digest: T.string,
    views: T.number,
    tags: T.arrayOf(
      T.shape({
        id: T.string,
        title: T.string,
        color: T.string,
        raw: T.string,
      })
    ),
    communities: T.arrayOf(
      T.shape({
        id: T.string,
        title: T.string,
        logo: T.string,
      })
    ),
    author: T.shape({
      nickname: T.string,
      avatar: T.string,
    }),
  }).isRequired,
  accountInfo: T.shape({
    isLogin: T.bool,
    customization: T.shape({
      contentsLayout: T.oneOf([C11N.DIGEST, C11N.LIST]),
      markViewed: T.bool,
      contentDivider: T.bool,
      contentHover: T.bool,
      displayDensity: T.oneOf(['20', '25', '30']),
    }),
  }),
  community: T.string.isRequired,
  onPreview: T.func,
  onAuthorSelect: T.func,
}

JobItem.defaultProps = {
  onPreview: log,
  onAuthorSelect: log,
  active: {},
  accountInfo: {
    isLogin: false,
    customization: T.shape({
      contentsLayout: C11N.DIGEST,
      contentDivider: false,
      contentHover: true,
      markViewed: true,
      displayDensity: '20',
    }),
  },
}

export default JobItem
