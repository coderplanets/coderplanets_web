import { FC } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

import type { TPost } from '@/spec'
import { ARTICLE_THREAD } from '@/constant'
import { parseDomain } from '@/utils/route'

import AvatarsRow from '@/widgets/AvatarsRow'
// import TagsList from '@/widgets/TagsList'

import {
  Wrapper,
  TitleLink,
  LinkIcon,
  Brief,
  Title,
  TagListWrapper,
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
  return (
    <Wrapper>
      <Brief>
        <Link href={`/${ARTICLE_THREAD.POST}/${item.id}`} passHref>
          <Title>{item.title}</Title>
        </Link>
        {item.linkAddr && (
          <TitleLink>
            <LinkIcon />
            <span style={{ marginLeft: 9 }}>{parseDomain(item.linkAddr)}</span>
          </TitleLink>
        )}

        <TagListWrapper>
          <TagsList items={item.articleTags} />
        </TagListWrapper>
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
