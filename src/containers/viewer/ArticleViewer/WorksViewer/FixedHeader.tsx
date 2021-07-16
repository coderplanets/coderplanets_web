import { FC, memo } from 'react'
import type { TArticle } from '@/spec'

import Upvote from '@/components/Upvote'
import {
  Wrapper,
  ArticleWrapper,
  Cover,
  Title,
  Desc,
} from '../styles/works_viewer/fixed_header'

type TProps = {
  article: TArticle
  visible?: boolean
}

const FixedHeader: FC<TProps> = ({ article, visible }) => {
  return (
    <Wrapper visible={visible}>
      <ArticleWrapper>
        <Cover src={article.author.avatar} />
        <Title>CoderPlanets</Title>
        <Desc>可能是最性感的开发者社区，web first, pure</Desc>
      </ArticleWrapper>
      <Upvote />
    </Wrapper>
  )
}

export default memo(FixedHeader)
