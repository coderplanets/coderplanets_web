/*
 *
 * CoolGuideContent
 *
 */

import { FC } from 'react'

import type { TMetric } from '@/spec'
import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import Pagi from '@/widgets/Pagi'
// import { PagiOptionSwitcher } from '@/widgets/Switcher'
import MasonryCards from '@/widgets/MasonryCards'

import type { TStore } from './store'

import FilterBar from './FilterBar'
import DateSelector from './DateSelector'
import Card from './Card'
import About from './About'

import filtersItems from './fakeFiltersItems'

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
          <About />

          <Pagi margin={{ top: '60px', bottom: '80px' }} />
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default bond(MeetupsContentContainer, 'meetupContent') as FC<TProps>
