import { FC, memo } from 'react'

import { UPVOTE_LAYOUT } from '@/constant'
import type { TBlog, TUser, TAccount } from '@/spec'

import Upvote from '@/components/Upvote'
import { ArticleReadLabel, ArticlePinLabel } from '@/components/dynamic'

import AuthorIntro from './AuthorIntro'
import Header from './Header'
import Body from './Body'

import { Wrapper, Main } from '../styles/desktop_view'

type TProps = {
  active?: TBlog | null
  entry: TBlog

  onUserSelect?: (obj: TUser) => void
  onAuthorSelect?: (obj: TAccount) => void
}

const DigestView: FC<TProps> = ({ entry }) => {
  return (
    <Wrapper>
      <ArticleReadLabel entry={entry} left={-29} top={18} />
      <ArticlePinLabel entry={entry} />
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
