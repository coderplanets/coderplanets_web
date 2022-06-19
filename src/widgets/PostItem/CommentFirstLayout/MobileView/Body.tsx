import { FC, memo, useCallback } from 'react'
import Router from 'next/router'

import type { TPost } from '@/spec'
import { ARTICLE_THREAD } from '@/constant'

import {
  Wrapper,
  Title,
} from '../../styles/comment_fist_layout/mobile_view/body'

type TProps = {
  article: TPost
}

const Header: FC<TProps> = ({ article }) => {
  const gotoArticle = useCallback(() => {
    Router.push(`/${ARTICLE_THREAD.POST}/${article.id}`)
  }, [article.id])

  return (
    <Wrapper>
      <Title onClick={gotoArticle}>{article.title}</Title>
    </Wrapper>
  )
}

export default memo(Header)
