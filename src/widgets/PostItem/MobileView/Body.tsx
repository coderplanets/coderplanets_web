import { FC, memo, useCallback } from 'react'
import Router from 'next/router'

import type { TPost } from '@/spec'
import { parseDomain } from '@/utils/route'
import { ARTICLE_THREAD } from '@/constant'

import { Wrapper, TitleLink, LinkIcon, Title } from '../styles/mobile_view/body'

type TProps = {
  item: TPost
}

const Body: FC<TProps> = ({ item }) => {
  const gotoArticle = useCallback(() => {
    Router.push(`/${ARTICLE_THREAD.POST}/${item.id}`)
  }, [item.id])

  return (
    <Wrapper>
      <Title onClick={gotoArticle}>{item.title}</Title>
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
