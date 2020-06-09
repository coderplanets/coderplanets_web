import React from 'react'

import TrendLine from '@/components/TrendLine'
import { CommunityHolder } from '@/components/LoadingEffects'

import { prettyNum } from '@/utils'
import {
  Wrapper,
  CommunityIcon,
  CardTitle,
  CardDesc,
  ActivitySpark,
  Divider,
  CardFooter,
} from './styles/city_card'

import { onCommunitySelect } from './logic'

const CityCard = ({ community }) => {
  return (
    <Wrapper onClick={() => onCommunitySelect(community)}>
      <CommunityIcon
        src={community.logo}
        loading={<CommunityHolder text={community.raw} place="communities" />}
      />
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
      </CardFooter>
    </Wrapper>
  )
}

export default React.memo(CityCard)
