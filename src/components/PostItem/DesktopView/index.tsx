import { FC, Fragment, memo } from 'react'

import type { TPost } from '@/spec'
import { UPVOTE_LAYOUT } from '@/constant'

import { upvoteOnArticleList } from '@/utils/helper'
import TheAvatar from '@/components/TheAvatar'
import Upvote from '@/components/Upvote'

import { ArticleReadLabel, ArticlePinLabel } from '@/components/dynamic'

import Header from './Header'
import Body from './Body'

import { AvatarWrapper, UpvoteWrapper, Main } from '../styles/desktop_view'

type TProps = {
  entry: TPost

  // onUserSelect?: (obj: TUser) => void
  // onAuthorSelect?: (obj: TAccount) => void
}

const DigestView: FC<TProps> = ({ entry }) => {
  return (
    <Fragment>
      <ArticleReadLabel entry={entry} />
      <ArticlePinLabel entry={entry} />
      <AvatarWrapper>
        <TheAvatar user={entry.author} />
        <UpvoteWrapper>
          <Upvote
            type={UPVOTE_LAYOUT.POST_LIST}
            count={entry.upvotesCount}
            viewerHasUpvoted={entry.viewerHasUpvoted}
            onAction={(viewerHasUpvoted) =>
              upvoteOnArticleList(entry, viewerHasUpvoted)
            }
          />
        </UpvoteWrapper>
      </AvatarWrapper>
      <Main>
        <Header item={entry} />
        <Body item={entry} />
      </Main>
    </Fragment>
  )
}

export default memo(DigestView)
