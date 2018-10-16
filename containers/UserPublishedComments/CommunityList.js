import React from 'react'

import { Popover } from '../../components'

import { Wrapper, Logo, PopoverInfo } from './styles/community_list'
import { uid } from '../../utils'

const CommunityList = ({ items }) => (
  <Wrapper>
    {items.map(community => (
      <Popover
        key={uid.gen()}
        placement="bottom"
        trigger="hover"
        content={<PopoverInfo>{community.title}</PopoverInfo>}
      >
        <div>
          <Logo src={community.logo} />
        </div>
      </Popover>
    ))}
  </Wrapper>
)

export default CommunityList
