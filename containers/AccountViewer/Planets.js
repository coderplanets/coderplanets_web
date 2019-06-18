import React from 'react'
import R from 'ramda'

import { sortByIndex } from '@utils'
import Tooltip from '@components/Tooltip'

import {
  Wrapper,
  HeaderWrapper,
  Title,
  HelpText,
  IconList,
  PlanetsIcon,
} from './styles/planets'

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
          <Tooltip
            key={community.raw}
            content={community.title}
            placement="top"
          >
            <div>
              <PlanetsIcon src={community.logo} />
            </div>
          </Tooltip>
        ))}
      </IconList>
    </Wrapper>
  )
}

export default Planets
