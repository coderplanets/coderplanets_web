import React from 'react'

import { ICON_BASE } from '@/config'

import Header from './Header'
import Body from './Body'

import {
  AvatarWrapper,
  Avatar,
  AvatarFallback,
  Main,
} from '../../styles/digest_view/index'

const DigestView = ({
  entry,
  cover,
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
            fallback={
              <AvatarFallback>{entry.author.nickname[0]}</AvatarFallback>
            }
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
          onUserSelect={onUserSelect}
          onPreview={onPreview}
        />
        <Body item={entry} />
      </Main>
    </React.Fragment>
  )
}

export default React.memo(DigestView)
