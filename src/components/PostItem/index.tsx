/*
 *
 * PostItem
 *
 */

import { FC, memo } from 'react'

import type { TPost, TID, TUser, TAccount } from '@/spec'
import { buildLog } from '@/utils'
import { useAccount } from '@/hooks'

import ArticleItemPrefixLabel from '@/components/ArticleItemPrefixLabel'

import DigestView from './DigestView/index'
// import ListView from './ListView'

import { Wrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:PostItem:index')

type TProps = {
  activeArticleId?: TID | null
  entry: TPost

  onPreview?: (obj: TPost) => void
  onUserSelect?: (obj: TUser) => void
  onAuthorSelect?: (obj: TAccount) => void
}

const PostItem: FC<TProps> = ({
  entry,
  onPreview = log,
  onUserSelect = log,
  onAuthorSelect = log,
  activeArticleId = null,
}) => {
  const { c11n } = useAccount()

  return (
    <Wrapper entry={entry} activeArticleId={activeArticleId} c11n={c11n}>
      <ArticleItemPrefixLabel entry={entry} />
      <DigestView
        entry={entry}
        onPreview={onPreview}
        onUserSelect={onUserSelect}
        onAuthorSelect={onAuthorSelect}
      />
    </Wrapper>
  )
}

export default memo(PostItem)
