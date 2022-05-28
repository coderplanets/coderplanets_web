import { FC, memo } from 'react'

import { UPVOTE_LAYOUT } from '@/constant'
import type { TBlog } from '@/spec'

import Upvote from '@/widgets/Upvote'
import ArticleReadLabel from '@/widgets/ArticleReadLabel'
import ArticlePinLabel from '@/widgets/ArticlePinLabel'

import AuthorIntro from './AuthorIntro'
import Header from './Header'
import Body from './Body'

import { Wrapper, Main } from '../styles/desktop_view'

type TProps = {
  // active?: TBlog | null
  entry: TBlog
}

const DigestView: FC<TProps> = ({ entry }) => {
  return (
    <Wrapper>
      <ArticleReadLabel article={entry} left={-29} top={18} />
      <ArticlePinLabel article={entry} />
      <Upvote type={UPVOTE_LAYOUT.BLOG_LIST} count={entry.upvotesCount} />
      <Main>
        <Header item={entry} />
        <Body item={entry} />
      </Main>
      <AuthorIntro author={entry.author} />
    </Wrapper>
  )
}

export default memo(DigestView)
