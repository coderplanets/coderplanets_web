/*
 *
 * CoolGuideContent
 *
 */

import { FC } from 'react'

import type { TMetric } from '@/spec'
import { ASSETS_ENDPOINT } from '@/config'
import { GALLERY } from '@/constant'
import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import Pagi from '@/widgets/Pagi'
// import { PagiOptionSwitcher } from '@/widgets/Switcher'
import MasonryCards from '@/widgets/MasonryCards'

import type { TStore } from './store'

import FilterBar from './FilterBar'
import DateSelector from './DateSelector'
// import ActivityCard from './ActivityCard'
import Card from './Card'

import filtersItems from './fakeFiltersItems'
// import meetups from './fakeMeetups'

import { Wrapper, InnerWrapper, ContentWrapper, CardsWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CoolGuideContent')

type TProps = {
  meetupsContent?: TStore
  testid?: string
  metric?: TMetric
}

const MeetupsContentContainer: FC<TProps> = ({
  meetupsContent: store,
  testid = 'meetups-content',
  metric,
}) => {
  useInit(store)

  const { pagedMeetupsData } = store

  console.log('## pagedMeetupsData: ', pagedMeetupsData.entries)

  return (
    <Wrapper testid={testid}>
      <InnerWrapper metric={metric}>
        <FilterBar filtersItems={filtersItems} />
        <ContentWrapper>
          <DateSelector />
          <CardsWrapper>
            <MasonryCards column={3}>
              {pagedMeetupsData.entries.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </MasonryCards>
          </CardsWrapper>

          <Pagi margin={{ top: '60px', bottom: '80px' }} />
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default pluggedIn(MeetupsContentContainer) as FC<TProps>
