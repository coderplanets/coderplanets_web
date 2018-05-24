import React from 'react'
import ReactTooltip from 'react-tooltip'

import {
  Wrapper,
  HeaderWrapper,
  Title,
  HelpText,
  IconList,
  PlanetsIcon,
} from './styles/planets'

const tooltipOffset = JSON.stringify({ top: 10, left: 5 })
const Planets = ({ subscribedCommunities }) => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Title>我/Ta的关注</Title>
        <HelpText>共&nbsp;{subscribedCommunities.totalCount}&nbsp;个</HelpText>
      </HeaderWrapper>
      <IconList>
        {subscribedCommunities.entries.map(community => (
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
