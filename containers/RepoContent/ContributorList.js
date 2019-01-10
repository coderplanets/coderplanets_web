import React from 'react'

// import { ICON_CMD } from '../../config'
import { Popover } from '../../components'

import {
  Wrapper,
  Builder,
  Avatar,
  PopoverInfo,
  PopAvatar,
  PopLink,
} from './styles/contributor_list'

const ContributorList = ({ items }) => (
  <Wrapper>
    {items.map(user => (
      <Popover
        placement="bottom"
        trigger="hover"
        key={user.htmlUrl}
        content={
          <PopoverInfo>
            <PopAvatar src={user.avatar} />
            <PopLink
              href={user.htmlUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              @{user.nickname}
            </PopLink>
          </PopoverInfo>
        }
      >
        <Builder>
          <Avatar src={user.avatar} />
        </Builder>
      </Popover>
    ))}
  </Wrapper>
)

export default ContributorList
