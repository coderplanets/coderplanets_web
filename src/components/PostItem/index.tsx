/*
 *
 * PostItem
 *
 */

import React, { FC } from 'react'

import type { TPost, TUser, TAccount } from '@/spec'
import { HCN, C11N } from '@/constant'
import { buildLog } from '@/utils'

import ArticleItemPrefixLabel from '@/components/ArticleItemPrefixLabel'

import DigestView from './DigestView/index'
import ListView from './ListView'

import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:PostItem:index')

type TProps = {
  active?: TPost | null
  entry: TPost
  cover: 'avatar' | 'source'
  community: string
  accountInfo: TAccount

  onPreview?: (obj: TPost) => void
  onUserSelect?: (obj: TUser) => void
  onAuthorSelect?: (obj: TAccount) => void
}

const PostItem: FC<TProps> = ({
  entry,
  onPreview = log,
  onUserSelect = log,
  onAuthorSelect = log,
  active = null,
  cover = 'avatar',
  community = HCN,
  accountInfo = {
    isLogin: false,
    customization: {
      contentsLayout: C11N.DIGEST,
      contentDivider: false,
      markViewed: true,
      displayDensity: '20',
    },
  },
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
        <ListView entry={entry} onPreview={onPreview} />
      )}
    </Wrapper>
  )
}

export default React.memo(PostItem)
