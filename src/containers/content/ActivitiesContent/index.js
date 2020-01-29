/*
 *
 * CoolNaviContent
 *
 */

import React from 'react'

import { connectStore, buildLog } from '@utils'

import NaviMenu from '@components/NaviMenu'

import DateSelector from './DateSelector'
import ActivityCard from './ActivityCard'

import { Wrapper, InnerWrapper, ContentWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CoolNaviContent')

const items = [
  {
    id: 1,
    date: '10 / 27',
    week: '周二',
    title: '技术沙龙：数据库异构升迁',
    company: '腾讯',
  },
  {
    id: 2,
    date: '10 / 27',
    week: '周二',
    title: '技术沙龙：数据库异构升迁',
    company: '腾讯',
  },
  {
    id: 3,
    date: '10 / 27',
    week: '周二',
    title: '技术沙龙：数据库异构升迁',
    company: '腾讯',
  },
  {
    id: 4,
    date: '10 / 27',
    week: '周二',
    title: '技术沙龙：数据库异构升迁',
    company: '腾讯',
  },
  {
    id: 5,
    date: '10 / 27',
    week: '周二',
    title: '技术沙龙：数据库异构升迁',
    company: '腾讯',
  },
]

const ActivitiesContentContainer = ({ activitiesContent }) => {
  useInit(activitiesContent)

  return (
    <Wrapper>
      <InnerWrapper>
        <NaviMenu />
        <ContentWrapper>
          <DateSelector />
          {items.map(item => (
            <ActivityCard key={item.id} item={item} />
          ))}
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default connectStore(ActivitiesContentContainer)
