import React from 'react'
import TimeAgo from 'timeago-react'
// import { isEmpty } from 'ramda'

import { ICON_CMD, ICON_BASE } from '@/config'

import { cutFrom, parseDomain } from '@/utils'
import AvatarsRow from '@/components/AvatarsRow'
import InlineTags from '@/components/InlineTags'
import DotDivider from '@/components/DotDivider'

import {
  AvatarWrapper,
  Avatar,
  AvatarFallback,
  TitleLink,
  LinkIcon,
  Main,
  TopHalf,
  HeaderInfo,
  AuthorInfo,
  TimeStamp,
  CommunityInfo,
  Brief,
  Title,
  SecondHalf,
  Extra,
  ExtraIcon,
  ExtraTexts,
  TagListWrapper,
  BodyDigest,
} from '../styles/mobile_view'

// import { Wrapper } from './styles'

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
        <TopHalf>
          <HeaderInfo>
            <AuthorInfo>
              {entry.author.nickname}
              <DotDivider radius="3px" space="6px" />
              <TimeStamp>
                <TimeAgo datetime={entry.insertedAt} locale="zh_CN" />
              </TimeStamp>
            </AuthorInfo>
            <TagListWrapper>
              <InlineTags data={entry.tags} />
            </TagListWrapper>
          </HeaderInfo>
          <Brief onClick={() => onPreview(entry)}>
            <Title>{entry.title}</Title>
            {entry.linkAddr && (
              <TitleLink>
                <LinkIcon src={`${ICON_CMD}/link.svg`} />
                <span style={{ marginLeft: 9 }}>
                  {parseDomain(entry.linkAddr)}
                </span>
              </TitleLink>
            )}
          </Brief>
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
            <CommunityInfo>React</CommunityInfo>
            <DotDivider radius="3px" space="6px" />
            <ExtraTexts>
              <ExtraIcon src={`${ICON_CMD}/view_solid.svg`} />
              {entry.views}
              <DotDivider radius="3px" space="6px" />
              <ExtraIcon src={`${ICON_CMD}/comment_solid.svg`} />
              {entry.commentsCount}
            </ExtraTexts>
          </Extra>
          <BodyDigest>{cutFrom(entry.digest, 22)}</BodyDigest>
        </SecondHalf>
      </Main>
    </React.Fragment>
  )
}

export default React.memo(DigestView)
