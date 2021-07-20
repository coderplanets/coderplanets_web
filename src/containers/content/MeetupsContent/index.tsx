/*
 *
 * CoolGuideContent
 *
 */

import { FC } from 'react'

import type { TMetric } from '@/spec'
import { ASSETS_ENDPOINT } from '@/config'
import { GALLERY } from '@/constant'
import { pluggedIn, buildLog } from '@/utils'

import Pagi from '@/components/Pagi'
import { PagiOptionSwitcher } from '@/components/Switcher'

import type { TStore } from './store'

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
    desc: '文字模式',
  },
  {
    iconSrc: `${ASSETS_ENDPOINT}/text_with_image.svg`,
    key: GALLERY.TEXT_WITH_IMAGE,
    desc: '图文模式',
  },
]

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

  const { activeGalleryType } = store

  return (
    <Wrapper testid={testid}>
      <InnerWrapper metric={metric}>
        <FilterBar filtersItems={filtersItems} />
        <ContentWrapper>
          <DateSelector />
          <CardsWrapper>
            {meetups.map((item) => (
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

export default pluggedIn(MeetupsContentContainer) as FC<TProps>
