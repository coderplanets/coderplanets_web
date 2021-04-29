import React, { FC } from 'react'

import type { TPost, TUser, TAccount } from '@/spec'

import TheAvatar from '@/components/TheAvatar'

import Header from './Header'
import Body from './Body'

import { Main } from '../../styles/digest_view/index'

type TProps = {
  active?: TPost | null
  entry: TPost

  onPreview?: (obj: TPost) => void
  onUserSelect?: (obj: TUser) => void
  onAuthorSelect?: (obj: TAccount) => void
}

const DigestView: FC<TProps> = ({
  entry,
  onPreview,
  onUserSelect,
  onAuthorSelect,
}) => {
  return (
    <React.Fragment>
      <TheAvatar user={entry.author} onSelect={onAuthorSelect} />
      <Main>
        <Header item={entry} onUserSelect={onUserSelect} />
        <Body item={entry} onPreview={onPreview} />
      </Main>
    </React.Fragment>
  )
}

export default React.memo(DigestView)
