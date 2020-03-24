import React from 'react'
import TimeAgo from 'timeago-react'

import Tooltip from '@components/Tooltip'
import DotDivider from '@components/DotDivider'

import {
  Wrapper,
  Contributors,
  Builder,
  Avatar,
  PopoverInfo,
  PopAvatar,
  PopLink,
  PublishInfo,
} from './styles/footer'

const Footer = ({ contributors, author, insertedAt }) => (
  <Wrapper>
    <Contributors>
      {contributors.map(builder => (
        <Tooltip
          placement="bottom"
          key={builder.htmlUrl}
          content={
            <PopoverInfo>
              <PopAvatar src={builder.avatar} />
              <PopLink
                href={builder.htmlUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                @{builder.nickname}
              </PopLink>
            </PopoverInfo>
          }
        >
          <Builder>
            <Avatar src={builder.avatar} />
          </Builder>
        </Tooltip>
      ))}
    </Contributors>
    <PublishInfo>
      {author.nickname}
      <DotDivider />
      <TimeAgo datetime={insertedAt} locale="zh_CN" />
    </PublishInfo>
  </Wrapper>
)

export default React.memo(Footer)
