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
// import ActivityCard from './ActivityCard'
import Card from './Card'

import filtersItems from './fakeFiltersItems'
import meetups from './fakeMeetups'

import { Wrapper, InnerWrapper, ContentWrapper, CardsWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CoolGuideContent')

// const GALLERY_TYPES = [
//   {
//     icon: GALLERY.MAIN_COLUMN,
//     key: '0',
//   },
//   {
//     icon: GALLERY.MASONRY_COLUMN,
//     key: '1',
//   },
// ]

const MeetupsContentContainer = ({ meetupsContent: store }) => {
  useInit(store)

  return (
    <Wrapper>
      <InnerWrapper>
        <FilterBar filtersItems={filtersItems} />
        <ContentWrapper>
          <DateSelector />
          <CardsWrapper>
            {meetups.map(item => (
              <Card key={item.id} item={item} />
              // <ActivityCard key={item.id} item={item} />
            ))}
          </CardsWrapper>

          <Pagi margin={{ top: '60px', bottom: '80px' }}>
            {/* <PagiOptionSwitcher
              activeKey={activeGalleryType}
              title="显示模式"
              items={GALLERY_TYPES}
              onChange={item => console.log(item.key)}
            /> */}
          </Pagi>
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default connectStore(MeetupsContentContainer)
