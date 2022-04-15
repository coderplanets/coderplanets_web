import { FC, memo } from 'react'
import { isEmpty, contains } from 'ramda'
import Link from 'next/link'

import type { TCommunity } from '@/spec'
import { NON_FILL_COMMUNITY } from '@/constant'
import { prettyNum, cutRest } from '@/utils/helper'

import { SpaceGrow } from '@/widgets/Common'
import TrendLine from '@/widgets/TrendLine'

import SubscribeBtn from './SubscribeBtn'

import {
  Wrapper,
  Left,
  Right,
  CommunityIcon,
  RawWrapper,
  Slash,
  Raw,
  ContentWrapper,
  JoinWrapper,
  JoinNum,
  Title,
  Desc,
  ActivitySpark,
  Footer,
} from './styles/community_card'

type TProps = {
  community: TCommunity
}

const CommunityCard: FC<TProps> = ({ community }) => {
  const trendData = isEmpty(community.contributesDigest)
    ? [0, 0, 0, 0, 0]
    : community.contributesDigest

  return (
    <Wrapper>
      <Left>
        <CommunityIcon
          nonFill={contains(community.raw, NON_FILL_COMMUNITY)}
          src={community.logo}
          raw={community.raw}
        />
        <RawWrapper>
          <Slash>/</Slash>
          <Raw>{community.raw}</Raw>
        </RawWrapper>
        <ActivitySpark>
          <TrendLine data={trendData} />
          {/* <TrendLine data={[3, 4, 7, 5, 4, 10, 6]} /> */}
        </ActivitySpark>
        <SpaceGrow />
        <ContentWrapper>
          内容&nbsp;{prettyNum(community.articlesCount)}
        </ContentWrapper>
      </Left>
      <Right>
        <Link href={`/${community.raw}`} passHref>
          <Title>{community.title}</Title>
        </Link>
        <Desc>{cutRest(community.desc, 20)}</Desc>
        <SpaceGrow />
        <Footer>
          <JoinWrapper>
            <JoinNum>{prettyNum(community.subscribersCount)}</JoinNum>
            人加入
          </JoinWrapper>
          <SubscribeBtn community={community} />
        </Footer>
      </Right>
    </Wrapper>
  )
}

export default memo(CommunityCard)
