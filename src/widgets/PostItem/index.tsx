/*
 *
 * PostItem
 *
 */

import { FC, memo, Fragment } from 'react'

import type { TCommunity, TPost, TUser, TAccount, TC11N } from '@/spec'
import { buildLog } from '@/utils/logger'

import CommentFirstLayout from './CommentFirstLayout'
import UpvoteFirstLayout from './UpvoteFirstLayout'
// import ListView from './ListView'

/* eslint-disable-next-line */
const log = buildLog('c:PostItem:index')

type TProps = {
  curCommunity: TCommunity | null
  article: TPost
  c11n: TC11N
  layout?: string

  onUserSelect?: (obj: TUser) => void
  onAuthorSelect?: (obj: TAccount) => void
}

const PostItem: FC<TProps> = ({
  curCommunity,
  article,
  onUserSelect = log,
  onAuthorSelect = log,
  layout = 'upvote-first',
  c11n,
}) => {
  return (
    <Fragment>
      {layout === 'upvote2-first' ? (
        <UpvoteFirstLayout
          c11n={c11n}
          article={article}
          curCommunity={curCommunity}
          onAuthorSelect={onAuthorSelect}
        />
      ) : (
        <CommentFirstLayout
          c11n={c11n}
          article={article}
          curCommunity={curCommunity}
          onAuthorSelect={onAuthorSelect}
        />
      )}
    </Fragment>
  )
}

export default memo(PostItem)
