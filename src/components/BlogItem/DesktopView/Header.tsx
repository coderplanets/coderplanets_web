import { FC } from 'react'
import Link from 'next/link'

import type { TBlog } from '@/spec'
import { ROUTE } from '@/constant'
import { ICON_CMD } from '@/config'
import { parseDomain } from '@/utils/route'

import AvatarsRow from '@/components/AvatarsRow'
import InlineTags from '@/components/InlineTags'

import {
  Wrapper,
  TitleLink,
  LinkIcon,
  Brief,
  Title,
  TagListWrapper,
  Participants,
} from '../styles/desktop_view/header'

type TProps = {
  item: TBlog
}

const Header: FC<TProps> = ({ item }) => {
  return (
    <Wrapper>
      <Brief>
        <Link href={`/${ROUTE.POST}/${item.id}`} passHref>
          <Title>{item.title}</Title>
        </Link>
        {item.linkAddr && (
          <TitleLink>
            <LinkIcon src={`${ICON_CMD}/link.svg`} />
            <span style={{ marginLeft: 9 }}>{parseDomain(item.linkAddr)}</span>
          </TitleLink>
        )}
        <TagListWrapper>
          <InlineTags items={item.articleTags} />
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
