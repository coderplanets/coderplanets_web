import { memo, FC } from 'react'

import type { TArticle } from '@/spec'

import { addCollection } from '@/utils/helper'
import DotDivider from '@/widgets/DotDivider'
import Upvote from '@/widgets/Upvote'
import ArticleBaseStats from '@/widgets/ArticleBaseStats'

import {
  Wrapper,
  CollectWrapper,
  CollectIcon,
  CollectText,
  BaseWrapper,
  UpvoteWrapper,
} from '../styles/post_viewer/article_info'
import { handleUpvote } from '../logic'

type TProps = {
  article: TArticle
}

const ArticleInfo: FC<TProps> = ({ article }) => {
  const { upvotesCount, viewerHasUpvoted, meta } = article

  return (
    <Wrapper>
      <BaseWrapper>
        <ArticleBaseStats article={article} container="drawer" />
        <DotDivider space={10} />
        <CollectWrapper onClick={() => addCollection()}>
          <CollectIcon />
          <CollectText>收藏</CollectText>
        </CollectWrapper>
      </BaseWrapper>
      <UpvoteWrapper>
        <Upvote
          count={upvotesCount}
          avatarList={meta.latestUpvotedUsers}
          viewerHasUpvoted={viewerHasUpvoted}
          onAction={(viewerHasUpvoted) =>
            handleUpvote(article, viewerHasUpvoted)
          }
        />
      </UpvoteWrapper>
    </Wrapper>
  )
}

export default memo(ArticleInfo)
