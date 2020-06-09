import React from 'react'
import TimeAgo from 'timeago-react'

import { ICON_CMD, ICON_BASE } from '@/config'

import { cutFrom, parseDomain } from '@/utils'
import AvatarsRow from '@/components/AvatarsRow'
import InlineTags from '@/components/InlineTags'

import {
  AvatarWrapper,
  Avatar,
  AvatarFallback,
  TitleLink,
  LinkIcon,
  Main,
  TopHalf,
  Brief,
  Title,
  SecondHalf,
  CommentsDiget,
  BodyDigest,
  PublishLable,
  Extra,
  TagListWrapper,
} from './styles'

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
            <TagListWrapper>
              <InlineTags data={entry.tags} />
            </TagListWrapper>
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
            {entry.author.nickname}
            {entry.copyRight === 'original' ? (
              <PublishLable>&nbsp;发布于:</PublishLable>
            ) : (
              <PublishLable>&nbsp;搬运于:</PublishLable>
            )}
            <TimeAgo datetime={entry.insertedAt} locale="zh_CN" /> ⁝ 浏览:{' '}
            {entry.views}
            <CommentsDiget>⁝ 评论: {entry.commentsCount}</CommentsDiget>
          </Extra>
          <BodyDigest>{cutFrom(entry.digest, 90)}</BodyDigest>
        </SecondHalf>
      </Main>
    </React.Fragment>
  )
}

export default React.memo(DigestView)
