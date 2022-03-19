import { memo, FC } from 'react'

import type { TArticle } from '@/spec'

import { addCollection } from '@/utils/helper'
import DotDivider from '@/widgets/DotDivider'
import Upvote from '@/widgets/Upvote'
import ArticleBaseStats from '@/widgets/ArticleBaseStats'
import GTDBadge from '@/widgets/GTDBadge'

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
        {article.id === '239' && <GTDBadge type="FEATURE" right={12} />}
        {article.id === '231' && <GTDBadge type="BUG" right={12} />}
        {article.id === '227' && (
          <GTDBadge type="BUG" state="TODO" right={12} />
        )}
        {article.id === '228' && (
          <GTDBadge type="FEATURE" state="WIP" right={12} />
        )}
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
