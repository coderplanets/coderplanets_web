import { FC, memo, useCallback } from 'react'
import Router from 'next/router'

import type { TPost } from '@/spec'
import { parseDomain } from '@/utils/route'
import { ARTICLE_THREAD } from '@/constant'

import {
  Wrapper,
  TitleLink,
  LinkIcon,
  Title,
} from '../../styles/comment_fist_layout/mobile_view/body'

type TProps = {
  article: TPost
}

const Body: FC<TProps> = ({ article }) => {
  const gotoArticle = useCallback(() => {
    Router.push(`/${ARTICLE_THREAD.POST}/${article.id}`)
  }, [article.id])

  return (
    <Wrapper>
      <Title onClick={gotoArticle}>{article.title}</Title>
      {article.linkAddr && (
        <TitleLink>
          <LinkIcon />
          <span style={{ marginLeft: 9 }}>{parseDomain(article.linkAddr)}</span>
        </TitleLink>
      )}
    </Wrapper>
  )
}

export default memo(Body)
