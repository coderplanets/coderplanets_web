import { FC, memo } from 'react'
import { contains } from 'ramda'

import type { TCommunity, TID } from '@/spec'
import { NON_FILL_COMMUNITY } from '@/constant'
import { prettyNum, cutRest } from '@/utils/helper'

import TrendLine from '@/widgets/TrendLine'
// import { CommunityHolder } from '@/widgets/Loading'

import SubscribeBtn from './SubscribeBtn'

import {
  Wrapper,
  CommunityIcon,
  Title,
  Desc,
  ActivitySpark,
  Footer,
} from './styles/community_card'

type TProps = {
  community: TCommunity
  subscribing: boolean
  subscribingId: TID
}

const CommunityCard: FC<TProps> = ({
  community,
  subscribing,
  subscribingId,
}) => {
  return (
    <Wrapper>
      <a
        href={`/${community.raw}/posts`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <CommunityIcon
          nonFill={contains(community.raw, NON_FILL_COMMUNITY)}
          src={community.logo}
          // loading={<CommunityHolder text={community.raw} place="discovery" />}
        />
      </a>
      <Title>{community.title}</Title>
      <Desc>{cutRest(community.desc, 20)}</Desc>
      <ActivitySpark>
        <TrendLine data={community.contributesDigest} />
      </ActivitySpark>
      <Footer>
        <>
          {/* TODO: number color should be different when number grow large */}
          {prettyNum(community.subscribersCount)}{' '}
          {community.subscribersCount < 1000 ? '人加入' : '加入'}
        </>

        <SubscribeBtn
          community={community}
          subscribing={subscribing}
          subscribingId={subscribingId}
        />
      </Footer>
    </Wrapper>
  )
}

export default memo(CommunityCard)
