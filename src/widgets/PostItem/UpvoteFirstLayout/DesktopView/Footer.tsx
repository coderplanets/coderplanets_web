import { memo, FC, Fragment } from 'react'
import { includes } from 'ramda'

import { UPVOTE_LAYOUT, ARTICLE_CAT } from '@/constant'
import type { TPost } from '@/spec'

import Upvote from '@/widgets/Upvote'
import { Space } from '@/widgets/Common'

import ArticleCatState from '@/widgets/ArticleCatState'
import ViewsCount from '../../ViewsCount'

import { Wrapper } from '../../styles/upvote_fist_layout/desktop_view/footer'

type TProps = {
  article: TPost
}

const Footer: FC<TProps> = ({ article }) => {
  const { upvotesCount, meta, viewerHasUpvoted } = article

  const demoList = ['239', '231', '227', '228', '226', '225']

  return (
    <Wrapper>
      <Upvote
        count={upvotesCount}
        avatarList={meta.latestUpvotedUsers}
        viewerHasUpvoted={viewerHasUpvoted}
        type={UPVOTE_LAYOUT.KANBAN}
        left={-2}
      />

      {article.category !== ARTICLE_CAT.DEFAULT && (
        <ArticleCatState
          type={article.category}
          state={article.state}
          left={18}
        />
      )}

      {!includes(article.id, demoList) ? (
        <ArticleCatState left={18} type="QUESTION" />
      ) : (
        <Fragment>
          {article.id === '239' && <ArticleCatState type="FEATURE" left={18} />}
          {article.id === '231' && <ArticleCatState type="BUG" left={18} />}
          {article.id === '227' && (
            <ArticleCatState type="BUG" state="TODO" left={18} />
          )}
          {article.id === '228' && (
            <ArticleCatState type="FEATURE" state="WIP" left={18} />
          )}
          {article.id === '226' && (
            <ArticleCatState type="QUESTION" state="RESOLVE" left={18} />
          )}
          {article.id === '225' && (
            <ArticleCatState type="LOCK" state="LOCK" left={18} />
          )}
        </Fragment>
      )}

      <Space right={18} />
      <ViewsCount count={article.views} />
    </Wrapper>
  )
}

export default memo(Footer)
