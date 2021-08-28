import { FC, Fragment, memo } from 'react'

import type { TBlog, TUser, TAccount } from '@/spec'

import AuthorIntro from './AuthorIntro'

import Header from './Header'
import Body from './Body'

import { Main } from '../styles/desktop_view'

type TProps = {
  active?: TBlog | null
  entry: TBlog

  onUserSelect?: (obj: TUser) => void
  onAuthorSelect?: (obj: TAccount) => void
}

const DigestView: FC<TProps> = ({ entry }) => {
  return (
    <Fragment>
      <Main>
        <Header item={entry} />
        <Body item={entry} />
      </Main>
      <AuthorIntro author={entry.author} />
    </Fragment>
  )
}

export default memo(DigestView)
