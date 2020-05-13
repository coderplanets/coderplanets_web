/*
 *
 * CoolGuideContent
 *
 */

import React from 'react'

import { connectStore, buildLog } from '@/utils'

import Pagi from '@/components/Pagi'

import FilterBar from './FilterBar'
import DateSelector from './DateSelector'
import ActivityCard from './ActivityCard'

import filtersItems from './fakeFiltersItems'
import meetups from './fakeMeetups'

import { Wrapper, InnerWrapper, ContentWrapper, CardsWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CoolGuideContent')

const MeetupsContentContainer = ({ meetupsContent }) => {
  useInit(meetupsContent)

  return (
    <Wrapper>
      <InnerWrapper>
        <FilterBar filtersItems={filtersItems} />
        <ContentWrapper>
          <DateSelector />
          <CardsWrapper>
            {meetups.map(item => (
              <ActivityCard key={item.id} item={item} />
            ))}
          </CardsWrapper>
          <Pagi margin={{ top: '40px', bottom: '60px' }} />
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default connectStore(MeetupsContentContainer)
