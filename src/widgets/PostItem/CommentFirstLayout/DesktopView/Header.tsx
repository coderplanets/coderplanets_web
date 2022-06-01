import { FC } from 'react'
import dynamic from 'next/dynamic'

import type { TPost } from '@/spec'

import { EVENT } from '@/constant'
import { send } from '@/utils/helper'

import Facepile from '@/widgets/Facepile'
// import TagsList from '@/widgets/TagsList'

import {
  Wrapper,
  Brief,
  Title,
  AvatarsWrapper,
} from '../../styles/comment_fist_layout/desktop_view/header'

const TagsList = dynamic(() => import('@/widgets/TagsList'), {
  ssr: false,
})

type TProps = {
  article: TPost
}

const Header: FC<TProps> = ({ article }) => {
  // const gotoArticle = useCallback(() => {
  //   Router.push(`/${ARTICLE_THREAD.POST}/${article.id}`)
  // }, [article.id])

  return (
    <Wrapper>
      <Brief>
        <Title onClick={() => send(EVENT.PREVIEW_ARTICLE, { article })}>
          {article.title}
        </Title>
        {/*  @ts-ignore */}
        <TagsList items={article.articleTags} left={12} />
      </Brief>
      <AvatarsWrapper>
        <Facepile
          users={article.commentsParticipants}
          total={article.commentsCount}
        />
      </AvatarsWrapper>
    </Wrapper>
  )
}

export default Header
