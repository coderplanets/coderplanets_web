import React from 'react'
import TimeAgo from 'timeago-react'

import { ICON_BASE } from '@/config'

import InlineTags from '@/components/InlineTags'
import DotDivider from '@/components/DotDivider'

import {
  Wrapper,
  AvatarWrapper,
  Avatar,
  AvatarFallback,
  AuthorInfo,
  TimeStamp,
  TagListWrapper,
} from '../../styles/mobile_view/header'

const Header = ({ cover, item, onAuthorSelect }) => {
  return (
    <Wrapper>
      <AuthorInfo>
        {cover === 'avatar' ? (
          <AvatarWrapper onClick={() => onAuthorSelect(item.author)}>
            <Avatar
              src={item.author.avatar}
              fallback={
                <AvatarFallback>{item.author.nickname[0]}</AvatarFallback>
              }
            />
          </AvatarWrapper>
        ) : (
          <Avatar
            src={item.linkIcon || `${ICON_BASE}/radar_source/default_radar.svg`}
          />
        )}
        <div>{item.author.nickname}</div>
        <DotDivider radius="3px" space="6px" />
        <TimeStamp>
          <TimeAgo datetime={item.insertedAt} locale="zh_CN" />
        </TimeStamp>
      </AuthorInfo>
      <TagListWrapper>
        <InlineTags data={item.tags} />
      </TagListWrapper>
    </Wrapper>
  )
}

export default React.memo(Header)
