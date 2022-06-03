import { FC, memo } from 'react'
import type { TArticle } from '@/spec'

import Upvote from '@/widgets/Upvote'
import ArticleCatState from '@/widgets/ArticleCatState'
import ArticleBaseStats from '@/widgets/ArticleBaseStats'

import {
  Wrapper,
  LeftPart,
  UpvoteWrapper,
  ArticleTitle,
  ArticleStateBadgeWrapper,
} from '../styles/post_viewer/fixed_header'

type TProps = {
  article: TArticle
  visible?: boolean
  footerVisible: boolean
}

const FixedHeader: FC<TProps> = ({ article, visible, footerVisible }) => {
  const { upvotesCount, viewerHasUpvoted } = article

  return (
    <Wrapper visible={visible}>
      <LeftPart>
        <UpvoteWrapper show={!footerVisible}>
          <Upvote
            count={upvotesCount}
            viewerHasUpvoted={viewerHasUpvoted}
            type="fixed-header"
          />
        </UpvoteWrapper>

        <ArticleTitle>{article.title}</ArticleTitle>
        <ArticleStateBadgeWrapper>
          {article.id === '239' && <ArticleCatState cat="FEATURE" />}
          {article.id === '231' && <ArticleCatState cat="BUG" />}
          {article.id === '227' && <ArticleCatState cat="BUG" state="TODO" />}
          {article.id === '228' && (
            <ArticleCatState cat="FEATURE" state="WIP" />
          )}
          {article.id === '226' && (
            <ArticleCatState cat="QUESTION" state="RESOLVE" />
          )}
          {article.id === '225' && <ArticleCatState cat="LOCK" state="LOCK" />}
        </ArticleStateBadgeWrapper>
      </LeftPart>
      <ArticleBaseStats article={article} container="drawer" />
    </Wrapper>
  )
}

export default memo(FixedHeader)
