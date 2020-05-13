import React from 'react'

import Sticky from '@/components/Sticky'
import { Button } from '@/components/Buttons'
import FiltersMenu from '@/components/FiltersMenu'
import DotDivider from '@/components/DotDivider'

import CalendarCard from './CalendarCard'

import { Wrapper, NaviFooter, Terms, TermItem } from '../styles/filter_bar'

const FilterBar = ({ filtersItems }) => {
  return (
    <Wrapper>
      <Sticky offsetTop={30}>
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
      </Sticky>
    </Wrapper>
  )
}

export default FilterBar
