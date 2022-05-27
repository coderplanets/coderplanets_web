import { FC, Fragment } from 'react'
import dynamic from 'next/dynamic'
import TimeAgo from 'timeago-react'

import Link from 'next/link'

import type { TCommunity, TPost } from '@/spec'
import { EVENT } from '@/constant'
import { send, changeToCommunity } from '@/utils/helper'

import { Space, SpaceGrow } from '@/widgets/Common'
// import CommunityCard from '@/widgets/Cards/CommunityCard'
// import UserCard from '@/widgets/Cards/UserCard'
import Tooltip from '@/widgets/Tooltip'
import ArticleStateBadge from '@/widgets/ArticleStateBadge'
import ViewsCount from '../../ViewsCount'
import CommentsCount from '../../CommentsCount'

import {
  Wrapper,
  Digest,
  Footer,
  Dot,
  PublishTime,
  Extra,
  LeftPart,
  CommunityLabel,
  LabelDivider,
  AuthorName,
  ArticleStateBadgeWrapper,
} from '../../styles/comment_fist_layout/desktop_view/body'

const CommunityCard = dynamic(() => import('@/widgets/Cards/CommunityCard'), {
  ssr: false,
})

const UserCard = dynamic(() => import('@/widgets/Cards/UserCard'), {
  ssr: false,
})

const ActiveBadge = dynamic(() => import('./ActiveBadge'), {
  ssr: false,
})

type TProps = {
  curCommunity: TCommunity | null
  article: TPost
}

const Body: FC<TProps> = ({ article, curCommunity }) => {
  // console.log('# originalCommunity: ', originalCommunity)
  const { originalCommunity, author } = article
  const showOriginalCommunity =
    curCommunity === null || curCommunity.raw !== originalCommunity.raw

  return (
    <Wrapper>
      <Extra>
        <LeftPart>
          {showOriginalCommunity && (
            <Fragment>
              <Tooltip
                //  @ts-ignore
                content={<CommunityCard article={originalCommunity} />}
                placement="right"
                delay={1500}
              >
                <CommunityLabel
                  onClick={() => changeToCommunity(originalCommunity.raw)}
                >
                  {originalCommunity.title}
                </CommunityLabel>
              </Tooltip>
              <LabelDivider />
            </Fragment>
          )}

          <Tooltip
            //  @ts-ignore
            content={<UserCard user={author} />}
            placement="right"
            delay={500}
          >
            <Link href={`/u/${author.login}`} passHref>
              <AuthorName darker={showOriginalCommunity}>
                {author.nickname}
              </AuthorName>
            </Link>
          </Tooltip>

          <Dot radius={3} space={10} />
          <PublishTime>
            <TimeAgo datetime={article.insertedAt} locale="zh_CN" />
          </PublishTime>
        </LeftPart>
        <SpaceGrow />

        {/*  @ts-ignore */}
        <ActiveBadge article={article} />
      </Extra>

      <Digest onClick={() => send(EVENT.PREVIEW_ARTICLE, { article })}>
        {article.digest}
      </Digest>
      <Footer>
        <ArticleStateBadgeWrapper>
          {article.id === '239' && <ArticleStateBadge type="FEATURE" />}
          {article.id === '231' && <ArticleStateBadge type="BUG" />}
          {article.id === '227' && (
            <ArticleStateBadge type="BUG" state="TODO" />
          )}
          {article.id === '228' && (
            <ArticleStateBadge type="FEATURE" state="WIP" />
          )}
          {article.id === '226' && (
            <ArticleStateBadge type="QUESTION" state="RESOLVE" />
          )}
          {article.id === '225' && (
            <ArticleStateBadge type="LOCK" state="LOCK" />
          )}
        </ArticleStateBadgeWrapper>
        <Space right={12} />
        <ViewsCount count={article.views} />
        <Space right={16} />
        <CommentsCount count={article.commentsCount} />
      </Footer>
    </Wrapper>
  )
}

export default Body
