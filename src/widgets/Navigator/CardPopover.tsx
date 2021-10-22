import { FC, memo } from 'react'

import type { TCommunity } from '@/spec'
import CommunityStatesPad from '@/widgets/CommunityStatesPad'

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

type TProps = {
  community: TCommunity
}

const CardPopover: FC<TProps> = ({ community }) => (
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

export default memo(CardPopover)
