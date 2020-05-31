/*
 *
 * CoolGuideContent
 *
 */

import React from 'react'

import { ASSETS_ENDPOINT } from '@/config'
import { GALLERY } from '@/constant'
import { connectStore, buildLog } from '@/utils'

import Pagi from '@/components/Pagi'
import { PagiOptionSwitcher } from '@/components/Switcher'

import FilterBar from './FilterBar'
import DateSelector from './DateSelector'
// import ActivityCard from './ActivityCard'
import Card from './Card'

import filtersItems from './fakeFiltersItems'
import meetups from './fakeMeetups'

import { Wrapper, InnerWrapper, ContentWrapper, CardsWrapper } from './styles'
import { useInit, changeGalleryType } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CoolGuideContent')

const GALLERY_TYPES = [
  {
    iconSrc: `${ASSETS_ENDPOINT}/words_only.svg`,
    key: GALLERY.TEXT_ONLY,
  },
  {
    iconSrc: `${ASSETS_ENDPOINT}/text_with_image.svg`,
    key: GALLERY.TEXT_WITH_IMAGE,
  },
]

const MeetupsContentContainer = ({ meetupsContent: store }) => {
  useInit(store)

  const { activeGalleryType } = store

  return (
    <Wrapper>
      <InnerWrapper>
        <FilterBar filtersItems={filtersItems} />
        <ContentWrapper>
          <DateSelector />
          <CardsWrapper>
            {meetups.map(item => (
              <Card key={item.id} item={item} type={activeGalleryType} />
              // <ActivityCard key={item.id} item={item} />
            ))}
          </CardsWrapper>

          <Pagi margin={{ top: '60px', bottom: '80px' }}>
            <PagiOptionSwitcher
              activeKey={activeGalleryType}
              title="显示模式"
              items={GALLERY_TYPES}
              onChange={changeGalleryType}
            />
          </Pagi>
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default connectStore(MeetupsContentContainer)
