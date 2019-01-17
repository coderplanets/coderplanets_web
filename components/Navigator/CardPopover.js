import React from 'react'

// import { ICON_CMD } from '../../config'
import CommunityStatesPad from '../CommunityStatesPad'

import {
  Wrapper,
  Body,
  CommunityInfo,
  CommunityLogo,
  Title,
  Desc,
  Divider,
  Footer,
} from './styles/card_popover'

const CardPopover = ({ community }) => (
  <Wrapper>
    <Body>
      <CommunityLogo src={community.logo} raw={community.raw} />
      <CommunityInfo>
        <Title>{community.title}</Title>
        <Desc>{community.desc}</Desc>
      </CommunityInfo>
    </Body>
    <Divider />
    <Footer>
      <CommunityStatesPad community={community} />
    </Footer>
  </Wrapper>
)

export default CardPopover
