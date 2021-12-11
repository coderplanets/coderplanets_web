import { FC, memo } from 'react'
import type { TWorks } from '@/spec'

import Upvote from '@/widgets/Upvote'
import {
  Wrapper,
  ArticleWrapper,
  Cover,
  Title,
  Desc,
} from '../styles/works_viewer/fixed_header'

type TProps = {
  article: TWorks
  visible?: boolean
}

const FixedHeader: FC<TProps> = ({ article, visible }) => {
  const { title, desc, upvotesCount, meta } = article

  return (
    <Wrapper visible={visible}>
      <ArticleWrapper>
        <Cover src={article.author.avatar} />
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </ArticleWrapper>
      <Upvote count={upvotesCount} avatarList={meta.latestUpvotedUsers} />
    </Wrapper>
  )
}

export default memo(FixedHeader)
