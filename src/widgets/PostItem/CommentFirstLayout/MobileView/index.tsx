import { FC, memo } from 'react'

import type { TPost, TAccount } from '@/spec'
import { UPVOTE_LAYOUT } from '@/constant'
import Upvote from '@/widgets/Upvote'

import Header from './Header'
import Body from './Body'
import Footer from './Footer'

import {
  Wrapper,
  Main,
  AvatarWrapper,
  Avatar,
  UpvoteWrapper,
} from '../../styles/comment_fist_layout/mobile_view'

type TProps = {
  article: TPost
  onAuthorSelect?: (obj: TAccount) => void
}

const MobileView: FC<TProps> = ({ article, onAuthorSelect }) => {
  return (
    <Wrapper>
      <AvatarWrapper>
        <Avatar src={article.author.avatar} />
        <UpvoteWrapper>
          <Upvote
            type={UPVOTE_LAYOUT.POST_LIST}
            count={article.upvotesCount}
            viewerHasUpvoted={article.viewerHasUpvoted}
            // onAction={(viewerHasUpvoted) =>
            //   upvoteOnArticleList(article, viewerHasUpvoted)
            // }
          />
        </UpvoteWrapper>
      </AvatarWrapper>

      <Main>
        <Header article={article} onAuthorSelect={onAuthorSelect} />
        <Body article={article} />
        <Footer article={article} />
      </Main>
    </Wrapper>
  )
}

export default memo(MobileView)
