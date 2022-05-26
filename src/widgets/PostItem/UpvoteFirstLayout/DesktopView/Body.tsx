import { memo, FC } from 'react'
import dynamic from 'next/dynamic'

import { EVENT, UPVOTE_LAYOUT } from '@/constant'

import type { TCommunity, TPost } from '@/spec'
import { send } from '@/utils/helper'

import Upvote from '@/widgets/Upvote'
import { Space, SpaceGrow } from '@/widgets/Common'

// import ArticleStateBadge from '@/widgets/ArticleStateBadge'
import ViewsCount from './ViewsCount'

import {
  Wrapper,
  DigestWrapper,
  Dot,
  Extra,
  LeftPart,
} from '../../styles/upvote_fist_layout/desktop_view/body'

const UserCard = dynamic(() => import('@/widgets/Cards/UserCard'), {
  ssr: false,
})

const ActiveBadge = dynamic(() => import('./ActiveBadge'), {
  ssr: false,
})

type TProps = {
  item: TPost
}

const Body: FC<TProps> = ({ item }) => {
  // console.log('# originalCommunity: ', originalCommunity)
  const { upvotesCount, meta, viewerHasUpvoted } = item

  return (
    <Wrapper>
      <DigestWrapper
        onClick={() => send(EVENT.PREVIEW_ARTICLE, { article: item })}
      >
        {item.digest}
      </DigestWrapper>
      <Extra>
        <LeftPart>
          <Upvote
            count={upvotesCount}
            avatarList={meta.latestUpvotedUsers}
            viewerHasUpvoted={viewerHasUpvoted}
            type={UPVOTE_LAYOUT.KANBAN}
          />

          <Dot radius={3} space={15} />
          <Space right={5} />
          <ViewsCount count={item.views} />
        </LeftPart>
        <SpaceGrow />

        {/*  @ts-ignore */}
        {/* <ActiveBadge item={item} />
        <ArticleStateBadgeWrapper>
          {item.id === '239' && <ArticleStateBadge type="FEATURE" />}
          {item.id === '231' && <ArticleStateBadge type="BUG" />}
          {item.id === '227' && <ArticleStateBadge type="BUG" state="TODO" />}
          {item.id === '228' && (
            <ArticleStateBadge type="FEATURE" state="WIP" />
          )}
          {item.id === '226' && (
            <ArticleStateBadge type="QUESTION" state="RESOLVE" />
          )}
          {item.id === '225' && <ArticleStateBadge type="LOCK" state="LOCK" />}
        </ArticleStateBadgeWrapper> */}
      </Extra>
    </Wrapper>
  )
}

export default memo(Body)
