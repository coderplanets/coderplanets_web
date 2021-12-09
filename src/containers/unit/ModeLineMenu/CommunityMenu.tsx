import { FC, memo } from 'react'

import type { TCommunity } from '@/spec'
import CommunityStatesPad from '@/widgets/CommunityStatesPad/ModelineView'

import {
  Wrapper,
  CommunityWrapper,
  Logo,
  Title,
  Desc,
} from './styles/community_menu'

type TProps = {
  community: TCommunity
}

const CommunityMenu: FC<TProps> = ({ community }) => {
  return (
    <Wrapper>
      <CommunityWrapper>
        <Logo src={community.logo} raw={community.raw} />
        <Title>{community.title}</Title>
        <Desc>{community.desc}</Desc>
      </CommunityWrapper>
      <CommunityStatesPad
        community={community}
        // realtimeVisitors={realtimeVisitors}
      />
    </Wrapper>
  )
}

export default memo(CommunityMenu)
