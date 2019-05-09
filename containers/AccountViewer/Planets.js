import React from 'react'
import ReactTooltip from 'react-tooltip'
import R from 'ramda'

import { sortByIndex } from '@utils'
import {
  Wrapper,
  HeaderWrapper,
  Title,
  HelpText,
  IconList,
  PlanetsIcon,
} from './styles/planets'

const tooltipOffset = JSON.stringify({ top: 10, left: 5 })
const Planets = ({ subscribedCommunities, viewingType }) => {
  if (!subscribedCommunities) return null

  const { entries, totalCount } = subscribedCommunities
  const subedCommunities = R.reject(R.propEq('raw', 'home'), entries)
  const sortedCommunities = sortByIndex(subedCommunities)

  return (
    <Wrapper>
      <HeaderWrapper>
        <Title>
          {viewingType === 'account' ? (
            <span>我的关注</span>
          ) : (
            <span>Ta的关注</span>
          )}
        </Title>
        <HelpText>
          共&nbsp;
          {totalCount - 1}
          &nbsp;个
        </HelpText>
      </HeaderWrapper>
      <IconList>
        {sortedCommunities.map(community => (
          <div
            key={community.raw}
            data-tip={community.title}
            data-for="planet_icon"
            data-offset={tooltipOffset}
          >
            <PlanetsIcon src={community.logo} />
          </div>
        ))}
      </IconList>
      <ReactTooltip effect="solid" place="bottom" id="planet_icon" />
    </Wrapper>
  )
}

export default Planets
