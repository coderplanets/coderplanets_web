import { FC, memo } from 'react'
import { contains } from 'ramda'

import type { TCommunity } from '@/spec'
import { NON_FILL_COMMUNITY } from '@/constant'

import CommunityStatesPad from '@/widgets/CommunityStatesPad'
import FollowButton from '@/widgets/Buttons/FollowButton'
// import SocialList from '@/widgets/SocialList'

import {
  Wrapper,
  Header,
  Logo,
  CommunityInfo,
  TitleWrapper,
  TitleText,
} from '../styles/holy_grail_layout/community_brief'
import {
  subscribeCommunity,
  unsubscribeCommunity,
  onShowEditorList,
  onShowSubscriberList,
} from '../logic'

type TProps = {
  community: TCommunity
  realtimeVisitors: number
}

const CommunityBrief: FC<TProps> = ({ community, realtimeVisitors }) => {
  return (
    <Wrapper>
      <Header>
        <Logo
          noFill={contains(community.raw, NON_FILL_COMMUNITY)}
          src={community.logo}
          raw={community.raw}
        />

        <CommunityInfo>
          <TitleWrapper>
            <TitleText>{community.title}</TitleText>
          </TitleWrapper>

          <FollowButton
            hasFollowed={community.viewerHasSubscribed}
            onFollow={() => subscribeCommunity(community.id)}
            onUndoFollow={() => unsubscribeCommunity(community.id)}
            size="tiny"
          />
        </CommunityInfo>
      </Header>
      <CommunityStatesPad
        community={community}
        onShowEditorList={onShowEditorList}
        onShowSubscriberList={onShowSubscriberList}
        realtimeVisitors={realtimeVisitors}
      />
    </Wrapper>
  )
}

export default memo(CommunityBrief)
