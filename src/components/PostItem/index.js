/*
 *
 * PostItem
 *
 */

import React from 'react'
import T from 'prop-types'

import { HCN, C11N } from '@/constant'
import { buildLog } from '@/utils'

import ArticleItemPrefixLabel from '@/components/ArticleItemPrefixLabel'
import DigestView from './DigestView/index'
import ListView from './ListView'

import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:PostItem:index')

const PostItem = ({
  entry,
  cover,
  community,
  active,
  onPreview,
  onUserSelect,
  onAuthorSelect,
  accountInfo,
}) => {
  // log('customization --> ', customization)
  const {
    customization: { contentsLayout, contentDivider },
  } = accountInfo

  return (
    <Wrapper
      entry={entry}
      active={active}
      accountInfo={accountInfo}
      divider={contentDivider}
    >
      <ArticleItemPrefixLabel entry={entry} accountInfo={accountInfo} />
      {contentsLayout === C11N.DIGEST ? (
        <DigestView
          entry={entry}
          cover={cover}
          community={community}
          onPreview={onPreview}
          onUserSelect={onUserSelect}
          onAuthorSelect={onAuthorSelect}
        />
      ) : (
        <ListView
          entry={entry}
          community={community}
          cover={cover}
          onPreview={onPreview}
          onAuthorSelect={onAuthorSelect}
        />
      )}
    </Wrapper>
  )
}

PostItem.propTypes = {
  active: T.object,
  entry: T.shape({
    title: T.string,
    digest: T.string,
    views: T.number,

    author: T.shape({
      nickname: T.string,
      avatar: T.string,
    }),
  }).isRequired,
  cover: T.oneOf(['avatar', 'source']),
  community: T.string,

  accountInfo: T.shape({
    isLogin: T.bool,
    customization: T.shape({
      contentsLayout: T.oneOf([C11N.DIGEST, C11N.LIST]),
      markViewed: T.bool,
      contentDivider: T.bool,
      displayDensity: T.oneOf(['20', '25', '30']),
    }),
  }),
  onPreview: T.func,
  onUserSelect: T.func,
  onAuthorSelect: T.func,
}

PostItem.defaultProps = {
  onPreview: log,
  onUserSelect: log,
  onAuthorSelect: log,
  active: {},
  cover: 'avatar',
  community: HCN,
  accountInfo: {
    isLogin: false,
    customization: T.shape({
      contentsLayout: C11N.DIGEST,
      contentDivider: false,
      markViewed: true,
      displayDensity: '20',
    }),
  },
}

export default React.memo(PostItem)
