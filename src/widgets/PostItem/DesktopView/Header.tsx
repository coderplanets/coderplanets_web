import { FC } from 'react'
import dynamic from 'next/dynamic'

import type { TPost } from '@/spec'

import { callCustomBgEditor } from '@/utils/helper'

import AvatarsGroup from '@/widgets/AvatarsGroup'
// import TagsList from '@/widgets/TagsList'

import {
  Wrapper,
  Brief,
  Title,
  AvatarsWrapper,
} from '../styles/desktop_view/header'

const TagsList = dynamic(() => import('@/widgets/TagsList'), {
  ssr: false,
})

type TProps = {
  item: TPost
}

const Header: FC<TProps> = ({ item }) => {
  // const gotoArticle = useCallback(() => {
  //   Router.push(`/${ARTICLE_THREAD.POST}/${item.id}`)
  // }, [item.id])

  return (
    <Wrapper>
      <Brief>
        {/* <Title onClick={() => send(EVENT.PREVIEW_ARTICLE, { article: item })}> */}
        <Title onClick={() => callCustomBgEditor()}>{item.title}</Title>
        {/*  @ts-ignore */}
        <TagsList items={item.articleTags} left={12} />
      </Brief>
      <AvatarsWrapper>
        <AvatarsGroup
          users={item.commentsParticipants}
          total={item.commentsCount}
        />
      </AvatarsWrapper>
    </Wrapper>
  )
}

export default Header
