import React from 'react'
import { contains } from 'ramda'

import { NON_FILL_COMMUNITY } from '@/constant'
import { prettyNum, cutFrom } from '@/utils'

import TrendLine from '@/components/TrendLine'
import { CommunityHolder } from '@/components/LoadingEffects'

import SubscribeBtn from './SubscribeBtn'

import {
  Wrapper,
  CommunityIcon,
  Title,
  Desc,
  ActivitySpark,
  Footer,
} from './styles/community_card'

const CommunityCard = ({ community, restProps }) => (
  <Wrapper>
    <a
      href={`/${community.raw}/posts`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <CommunityIcon
        nonFill={contains(community.raw, NON_FILL_COMMUNITY)}
        src={community.logo}
        loading={<CommunityHolder text={community.raw} place="discovery" />}
      />
    </a>
    <Title>{community.title}</Title>
    <Desc>{cutFrom(community.desc, 20)}</Desc>
    <ActivitySpark>
      <TrendLine data={community.contributesDigest} />
    </ActivitySpark>
    <Footer>
      <>
        {/* TODO: number color should be different when number grow large */}
        {prettyNum(community.subscribersCount)}{' '}
        {community.subscribersCount < 1000 ? '人加入' : '加入'}
      </>

      <SubscribeBtn community={community} restProps={restProps} />
    </Footer>
  </Wrapper>
)

export default React.memo(CommunityCard)
