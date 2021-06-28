import { FC } from 'react'

import type { TFiltersMenuItems } from '@/spec'
import { ICON_CMD } from '@/config'

import { Br } from '@/components/Common'
import Sticky from '@/components/Sticky'
import { Button } from '@/components/Buttons'
import FiltersMenu from '@/components/FiltersMenu'
import DotDivider from '@/components/DotDivider'

import {
  Wrapper,
  MeetupIcon,
  LogoDesc,
  NaviFooter,
  Terms,
  TermItem,
} from '../styles/filter_bar'

type TProps = {
  filtersItems: TFiltersMenuItems
}

const FilterBar: FC<TProps> = ({ filtersItems }) => {
  return (
    <Wrapper>
      <Sticky offsetTop={30}>
        <MeetupIcon src={`${ICON_CMD}/navi/meetup_logo.svg`} />
        <LogoDesc>来和志同道合的朋友们一起聊聊?</LogoDesc>
        <Br bottom={34} />
        <FiltersMenu items={filtersItems} revert />
        <NaviFooter>
          <Button type="primary" size="small" ghost>
            + 发起活动
          </Button>

          <Terms>
            <TermItem>关于</TermItem> <DotDivider radius={3} />{' '}
            <TermItem>建议</TermItem> <DotDivider radius={3} />{' '}
            <TermItem>举报</TermItem>
          </Terms>
        </NaviFooter>
      </Sticky>
    </Wrapper>
  )
}

export default FilterBar
