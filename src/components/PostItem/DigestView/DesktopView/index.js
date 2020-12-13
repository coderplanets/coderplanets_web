import React from 'react'

import { ICON_BASE } from '@/config'

import TheAvatar from '@/components/TheAvatar'

import Header from './Header'
import Body from './Body'

import { Avatar, Main } from '../../styles/digest_view/index'

const DigestView = ({
  entry,
  cover,
  community,
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
        <Header
          item={entry}
          community={community}
          onUserSelect={onUserSelect}
        />
        <Body item={entry} onPreview={onPreview} />
      </Main>
    </React.Fragment>
  )
}

export default React.memo(DigestView)
