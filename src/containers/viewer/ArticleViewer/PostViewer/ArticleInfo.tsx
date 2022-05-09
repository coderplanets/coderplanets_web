import { memo, FC } from 'react'

import type { TArticle } from '@/spec'

// import { addCollection } from '@/utils/helper'
import { SpaceGrow } from '@/widgets/Common'
import Upvote from '@/widgets/Upvote'
import ArticleBaseStats from '@/widgets/ArticleBaseStats'

import {
  Wrapper,
  // CollectWrapper,
  // CollectIcon,
  // CollectText,
  BaseWrapper,
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
        <Upvote
          count={upvotesCount}
          avatarList={meta.latestUpvotedUsers}
          viewerHasUpvoted={viewerHasUpvoted}
          onAction={(viewerHasUpvoted) =>
            handleUpvote(article, viewerHasUpvoted)
          }
        />
        <SpaceGrow />
        <ArticleBaseStats article={article} container="drawer" />
        {/* <Space right={18} />
        <CollectWrapper onClick={() => addCollection()}>
          <CollectIcon />
          <CollectText>收藏</CollectText>
        </CollectWrapper> */}
      </BaseWrapper>
    </Wrapper>
  )
}

export default memo(ArticleInfo)
