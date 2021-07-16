import { FC, memo } from 'react'
import type { TArticle } from '@/spec'

import Upvote from '@/components/Upvote'
import { Wrapper, ArticleTitle } from './styles/fixed_header'

type TProps = {
  article: TArticle
  visible?: boolean
}

const FixedHeader: FC<TProps> = ({ article, visible }) => {
  const { author, insertedAt } = article

  console.log('visible -> ', visible)

  return (
    <Wrapper visible={visible}>
      <ArticleTitle>{article.title}</ArticleTitle>
      <Upvote />
    </Wrapper>
  )
}

export default memo(FixedHeader)
