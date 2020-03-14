/*
 *
 * CoolGuideContent
 *
 */

import React from 'react'
import { Button } from 'antd'

import { connectStore, buildLog } from '@utils'

import PagiFooter from '@components/PagiFooter'
import DotDivider from '@components/DotDivider'
import FiltersMenu from '@components/FiltersMenu'

import CalendarCard from './CalendarCard'
import DateSelector from './DateSelector'
import ActivityCard from './ActivityCard'

import filtersItems from './fakeFiltersItems'
import meetups from './fakeMeetups'

import {
  Wrapper,
  InnerWrapper,
  SidebarWrapper,
  ContentWrapper,
  CardsWrapper,
  NaviFooter,
  Terms,
  TermItem,
} from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CoolGuideContent')

const MeetupsContentContainer = ({ meetupsContent }) => {
  useInit(meetupsContent)

  // TODO:  只要一 scroll, 就把打开的 filter 都关掉
  return (
    <Wrapper>
      <InnerWrapper>
        <SidebarWrapper>
          <CalendarCard />
          <FiltersMenu items={filtersItems} />
          <NaviFooter>
            <Button type="primary" size="small" ghost>
              + 发起活动
            </Button>

            <Terms>
              <TermItem>关于</TermItem> <DotDivider radius="3px" />{' '}
              <TermItem>建议</TermItem> <DotDivider radius="3px" />{' '}
              <TermItem>举报</TermItem>
            </Terms>
          </NaviFooter>
        </SidebarWrapper>
        <ContentWrapper>
          <DateSelector />
          <CardsWrapper>
            {meetups.map(item => (
              <ActivityCard key={item.id} item={item} />
            ))}
          </CardsWrapper>
          <PagiFooter margin={{ top: '40px', bottom: '60px' }} />
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default connectStore(MeetupsContentContainer)
