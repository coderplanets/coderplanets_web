import { FC, memo } from 'react'

import Link from 'next/link'
import type { TPost } from '@/spec'
import { parseDomain } from '@/utils/route'
import { ARTICLE_THREAD } from '@/constant'

import { Wrapper, TitleLink, LinkIcon, Title } from '../styles/mobile_view/body'

type TProps = {
  item: TPost
}

const Body: FC<TProps> = ({ item }) => {
  return (
    <Wrapper>
      <Link href={`/${ARTICLE_THREAD.POST}/${item.id}`} passHref>
        <Title>{item.title}</Title>
      </Link>
      {item.linkAddr && (
        <TitleLink>
          <LinkIcon />
          <span style={{ marginLeft: 9 }}>{parseDomain(item.linkAddr)}</span>
        </TitleLink>
      )}
    </Wrapper>
  )
}

export default memo(Body)
