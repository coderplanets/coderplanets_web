import React from 'react'

import { ICON_BASE } from '@/config'

import ImgFallback from '@/components/ImgFallback'

import Header from './Header'
import Body from './Body'

import { AvatarWrapper, Avatar, Main } from '../../styles/digest_view/index'

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
        <AvatarWrapper onClick={() => onAuthorSelect(entry.author)}>
          <Avatar
            src={entry.author.avatar}
            fallback={<ImgFallback user={entry.author} size={38} top={2} />}
          />
        </AvatarWrapper>
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
