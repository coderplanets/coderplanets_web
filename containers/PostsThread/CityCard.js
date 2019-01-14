import React from 'react'

import { TrendLine, CommunityHolder } from '../../components'
// import { ICON_CMD } from '../../config'
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
import { prettyNum } from '../../utils'

const CityCard = ({ community }) => (
  <Wrapper onClick={onCommunitySelect.bind(this, community)}>
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

export default CityCard
