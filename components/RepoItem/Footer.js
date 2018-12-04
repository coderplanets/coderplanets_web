import React from 'react'
import TimeAgo from 'timeago-react'

import Popover from '../Popover'
import DotDivider from '../DotDivider'

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
        <Popover
          placement="bottom"
          trigger="hover"
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
        </Popover>
      ))}
    </Contributors>
    <PublishInfo>
      {author.nickname}
      <DotDivider />
      <TimeAgo datetime={insertedAt} locale="zh_CN" />
    </PublishInfo>
  </Wrapper>
)

export default Footer
