import { FC, Fragment, memo } from 'react'

import type { TPost, TUser, TAccount } from '@/spec'

import TheAvatar from '@/components/TheAvatar'

import Header from './Header'
import Body from './Body'

import { Main } from '../styles/desktop_view/index'

type TProps = {
  active?: TPost | null
  entry: TPost

  onUserSelect?: (obj: TUser) => void
  onAuthorSelect?: (obj: TAccount) => void
}

const DigestView: FC<TProps> = ({ entry }) => {
  return (
    <Fragment>
      <TheAvatar user={entry.author} />
      <Main>
        <Header item={entry} />
        <Body item={entry} />
      </Main>
    </Fragment>
  )
}

export default memo(DigestView)
