import { FC } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import TimeAgo from 'timeago-react'

import type { TPost } from '@/spec'
import { callWallpaperEditor } from '@/utils/helper'

import Tooltip from '@/widgets/Tooltip'
import { SpaceGrow } from '@/widgets/Common'

import {
  Wrapper,
  Topping,
  Main,
  Dot,
  Title,
  PublishTime,
  CommentWrapper,
  CommentIcon,
  CommentCount,
  AuthorName,
} from '../../styles/upvote_fist_layout/desktop_view/header'

const UserCard = dynamic(() => import('@/widgets/Cards/UserCard'), {
  ssr: false,
})

const TagsList = dynamic(() => import('@/widgets/TagsList'), {
  ssr: false,
})

type TProps = {
  item: TPost
}

const Header: FC<TProps> = ({ item }) => {
  const { author, commentsCount } = item

  return (
    <Wrapper>
      <Topping>
        <Tooltip
          //  @ts-ignore
          content={<UserCard item={author} />}
          placement="right"
          delay={500}
        >
          <Link href={`/u/${author.login}`} passHref>
            <AuthorName>{author.nickname}</AuthorName>
          </Link>
        </Tooltip>
        <Dot radius={3} space={15} />
        <PublishTime>
          <TimeAgo datetime={item.insertedAt} locale="zh_CN" />
        </PublishTime>
      </Topping>
      <Main>
        {/* <Title onClick={() => send(EVENT.PREVIEW_ARTICLE, { article: item })}> */}
        <Title onClick={() => callWallpaperEditor()}>{item.title}</Title>
        {/*  @ts-ignore */}
        <TagsList items={item.articleTags} left={12} />
        <SpaceGrow />
        {commentsCount !== 0 && (
          <CommentWrapper>
            <CommentIcon />
            <CommentCount>{commentsCount}</CommentCount>
          </CommentWrapper>
        )}
      </Main>
    </Wrapper>
  )
}

export default Header
