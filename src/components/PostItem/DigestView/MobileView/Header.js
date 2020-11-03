import React from 'react'
import TimeAgo from 'timeago-react'

import { ICON_BASE } from '@/config'

import InlineTags from '@/components/InlineTags'
import DotDivider from '@/components/DotDivider'
import AvatarFallback from '@/components/AvatarFallback'

import {
  Wrapper,
  AvatarWrapper,
  Avatar,
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
                <AvatarFallback user={item.author} width={16} right="6px" />
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
