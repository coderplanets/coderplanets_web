import React, { FC } from 'react'

import type { TPost, TUser, TAccount } from '@/spec'
import { ICON_BASE } from '@/config'

import TheAvatar from '@/components/TheAvatar'

import Header from './Header'
import Body from './Body'

import { Avatar, Main } from '../../styles/digest_view/index'

type TProps = {
  active?: TPost | null
  entry: TPost
  cover: 'avatar' | 'source'

  onPreview?: (obj: TPost) => void
  onUserSelect?: (obj: TUser) => void
  onAuthorSelect?: (obj: TAccount) => void
}

const DigestView: FC<TProps> = ({
  entry,
  cover,
  onPreview,
  onUserSelect,
  onAuthorSelect,
}) => {
  return (
    <React.Fragment>
      {cover === 'avatar' ? (
        <TheAvatar user={entry.author} onSelect={onAuthorSelect} />
      ) : (
        <Avatar
          src={entry.linkIcon || `${ICON_BASE}/radar_source/default_radar.svg`}
        />
      )}
      <Main>
        <Header item={entry} onUserSelect={onUserSelect} />
        <Body item={entry} onPreview={onPreview} />
      </Main>
    </React.Fragment>
  )
}

export default React.memo(DigestView)
