import React from 'react'

// import { ICON_CMD } from '../../config'
// import { Wrapper } from './styles'
import { TrendLine } from '../../components'
import SubscribeBtn from './SubscribeBtn'

import {
  Wrapper,
  CardsWrapper,
  Card,
  CommunityIcon,
  CardTitle,
  CardDesc,
  ActivitySpark,
  Divider,
  CardFooter,
} from './styles/community_cards'

import { prettyNum } from '../../utils'

const CommunityCard = ({ community, restProps }) => (
  <Card>
    <CommunityIcon src={community.logo} />
    <CardTitle>{community.title}</CardTitle>
    <CardDesc>{community.desc}</CardDesc>
    <ActivitySpark>
      <TrendLine data={community.contributesDigest} />
    </ActivitySpark>
    <Divider />
    <CardFooter>
      <React.Fragment>
        {/* TODO: number color should be different when number grow large */}
        {prettyNum(community.subscribersCount)}{' '}
        {community.subscribersCount < 1000 ? '人关注' : '关注'}
      </React.Fragment>

      <SubscribeBtn community={community} restProps={restProps} />
    </CardFooter>
  </Card>
)

const CommnityCards = ({ entries, restProps }) => (
  <Wrapper>
    <CardsWrapper>
      {entries.map(community => (
        <CommunityCard
          key={community.raw}
          community={community}
          restProps={restProps}
        />
      ))}
    </CardsWrapper>
  </Wrapper>
)

export default CommnityCards
