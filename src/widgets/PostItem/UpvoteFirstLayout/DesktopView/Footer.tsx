import { memo, FC } from 'react'

import { UPVOTE_LAYOUT } from '@/constant'

import type { TPost } from '@/spec'

import Upvote from '@/widgets/Upvote'
import { Space } from '@/widgets/Common'

import ArticleStateBadge from '@/widgets/ArticleStateBadge'
import ViewsCount from '../../ViewsCount'

import { Wrapper } from '../../styles/upvote_fist_layout/desktop_view/footer'

type TProps = {
  article: TPost
}

const Footer: FC<TProps> = ({ article }) => {
  const { upvotesCount, meta, viewerHasUpvoted } = article

  return (
    <Wrapper>
      <Upvote
        count={upvotesCount}
        avatarList={meta.latestUpvotedUsers}
        viewerHasUpvoted={viewerHasUpvoted}
        type={UPVOTE_LAYOUT.KANBAN}
        left={-2}
      />

      {article.id === '239' && <ArticleStateBadge type="FEATURE" left={14} />}
      {article.id === '231' && <ArticleStateBadge type="BUG" left={14} />}
      {article.id === '227' && (
        <ArticleStateBadge type="BUG" state="TODO" left={14} />
      )}
      {article.id === '228' && (
        <ArticleStateBadge type="FEATURE" state="WIP" left={14} />
      )}
      {article.id === '226' && (
        <ArticleStateBadge type="QUESTION" state="RESOLVE" left={14} />
      )}
      {article.id === '225' && (
        <ArticleStateBadge type="LOCK" state="LOCK" left={14} />
      )}

      <Space right={15} />
      <ViewsCount count={article.views} />
    </Wrapper>
  )
}

export default memo(Footer)
