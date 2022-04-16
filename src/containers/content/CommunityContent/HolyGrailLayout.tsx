/*
 *
 * CommunityContent
 *
 */

import { FC, memo } from 'react'

import { TCommunity, TThread } from '@/spec'

import { C11N, EVENT } from '@/constant'
import { send } from '@/utils/helper'
import { buildLog } from '@/utils/logger'

import ThreadSidebar from '@/containers/thread/ThreadSidebar'
import TabBar from '@/widgets/TabBar'
// import LavaLampLoading from '@/widgets/Loading/LavaLampLoading'

import ThreadContent from './ThreadContent'
import SubscribedList from './SubscribedList'

import {
  Wrapper,
  InnerWrapper,
  ContentWrapper,
  TabsWrapper,
} from './styles/holy_grail_layout'

/* eslint-disable-next-line */
const log = buildLog('C:CommunityContent')

type TProps = {
  thread: TThread
  community: TCommunity
  subscribedCommunities: TCommunity[]
}

const HolyGrailLayout: FC<TProps> = ({
  thread,
  community,
  subscribedCommunities,
}) => {
  return (
    <Wrapper testid="community-content">
      <InnerWrapper>
        <SubscribedList
          community={community}
          communities={subscribedCommunities}
        />
        <ContentWrapper>
          <TabsWrapper>
            <TabBar
              source={community.threads}
              onChange={(data) => send(EVENT.COMMUNITY_THREAD_CHANGE, { data })}
              active={thread}
              layout={C11N.HOLY_GRAIL}
              communityRaw={community.raw}
            />
          </TabsWrapper>
          <ThreadContent thread={thread} />
        </ContentWrapper>
        <ThreadSidebar />
      </InnerWrapper>
    </Wrapper>
  )
}

export default memo(HolyGrailLayout)
