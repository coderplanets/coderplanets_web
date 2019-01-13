import React from 'react'
import TimeAgo from 'timeago-react'

import { ICON_CMD, ICON_BASE } from '../../config'

import AvatarsRow from '../AvatarsRow'
import InlineTags from '../InlineTags'

import {
  Avatar,
  TitleLink,
  LinkIcon,
  Main,
  TopHalf,
  Breif,
  Title,
  SecondHalf,
  BodyDigest,
  Extra,
  TagListWrapper,
} from './styles'

// import { Wrapper } from './styles'
import { cutFrom, getDomain } from '../../utils'

const DigestView = ({ entry, cover, onPreview, onUserSelect }) => (
  <React.Fragment>
    {cover === 'avatar' ? (
      <Avatar src={entry.author.avatar} />
    ) : (
      <Avatar
        src={entry.sourceLogo || `${ICON_BASE}/radar_source/default.svg`}
      />
    )}
    <Main>
      <TopHalf>
        <Breif onClick={onPreview.bind(this, entry)}>
          <Title>{entry.title}</Title>
          {entry.linkAddr ? (
            <TitleLink>
              <LinkIcon src={`${ICON_CMD}/link.svg`} />
              <span style={{ marginLeft: 9 }}>{getDomain(entry.linkAddr)}</span>
            </TitleLink>
          ) : null}
          <TagListWrapper>
            <InlineTags data={entry.tags} />
          </TagListWrapper>
        </Breif>
        <div>
          <AvatarsRow
            onUserSelect={onUserSelect}
            users={entry.commentsParticipators}
            total={entry.commentsCount}
          />
        </div>
      </TopHalf>

      <SecondHalf>
        <Extra>
          {entry.author.nickname} 发布于:{' '}
          <TimeAgo datetime={entry.insertedAt} locale="zh_CN" /> ⁝ 浏览:{' '}
          {entry.views}
        </Extra>
        <BodyDigest>{cutFrom(entry.digest, 90)}</BodyDigest>
      </SecondHalf>
    </Main>
  </React.Fragment>
)

export default DigestView
