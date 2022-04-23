import { FC, useCallback } from 'react'
import Router from 'next/router'
import dynamic from 'next/dynamic'

import type { TPost } from '@/spec'
import { ARTICLE_THREAD } from '@/constant'

import AvatarsRow from '@/widgets/AvatarsRow'
// import TagsList from '@/widgets/TagsList'

import {
  Wrapper,
  Brief,
  Title,
  Participants,
} from '../styles/desktop_view/header'

// const AvatarsRow = dynamic(() => import('@/widgets/AvatarsRow'), {
//   ssr: false,
// })

const TagsList = dynamic(() => import('@/widgets/TagsList'), {
  ssr: false,
})

type TProps = {
  item: TPost
}

const Header: FC<TProps> = ({ item }) => {
  const gotoArticle = useCallback(() => {
    Router.push(`/${ARTICLE_THREAD.POST}/${item.id}`)
  }, [item.id])

  return (
    <Wrapper>
      <Brief>
        <Title onClick={gotoArticle}>{item.title}</Title>
        {/* {item.linkAddr && (
          <TitleLink>
            <LinkIcon />
            <span style={{ marginLeft: 9 }}>{parseDomain(item.linkAddr)}</span>
          </TitleLink>
        )} */}

        {/*  @ts-ignore */}
        <TagsList items={item.articleTags} mLeft={12} />
      </Brief>
      <Participants>
        <AvatarsRow
          users={item.commentsParticipants}
          total={item.commentsCount}
        />
      </Participants>
    </Wrapper>
  )
}

export default Header
