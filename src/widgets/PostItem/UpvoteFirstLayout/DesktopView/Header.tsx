import { FC } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import TimeAgo from 'timeago-react'

import type { TPost } from '@/spec'
import { callWallpaperEditor } from '@/utils/helper'
import { SIZE } from '@/constant'

import Tooltip from '@/widgets/Tooltip'
import { SpaceGrow } from '@/widgets/Common'

import CommentsCount from '../../CommentsCount'

import {
  Wrapper,
  Topping,
  Main,
  Dot,
  Title,
  PublishTime,
  AuthorName,
} from '../../styles/upvote_fist_layout/desktop_view/header'

const UserCard = dynamic(() => import('@/widgets/Cards/UserCard'), {
  ssr: false,
})

const TagsList = dynamic(() => import('@/widgets/TagsList'), {
  ssr: false,
})

type TProps = {
  article: TPost
}

const Header: FC<TProps> = ({ article }) => {
  const { author, commentsCount } = article

  return (
    <Wrapper>
      <Topping>
        <Tooltip
          //  @ts-ignore
          content={<UserCard user={author} />}
          placement="right"
          delay={500}
        >
          <Link href={`/u/${author.login}`} passHref>
            <AuthorName>{author.nickname}</AuthorName>
          </Link>
        </Tooltip>
        <Dot radius={3} space={15} />
        <PublishTime>
          <TimeAgo datetime={article.insertedAt} locale="zh_CN" />
        </PublishTime>
      </Topping>
      <Main>
        {/* <Title onClick={() => send(EVENT.PREVIEW_ARTICLE, { article: article})}> */}
        <Title onClick={() => callWallpaperEditor()}>{article.title}</Title>
        {/*  @ts-ignore */}
        <TagsList items={article.articleTags} left={12} />
        <SpaceGrow />
        {commentsCount !== 0 && (
          <CommentsCount count={commentsCount} size={SIZE.MEDIUM} />
        )}
      </Main>
    </Wrapper>
  )
}

export default Header
