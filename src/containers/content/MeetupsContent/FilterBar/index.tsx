import { FC } from 'react'

import type { TFiltersMenuItems } from '@/spec'

import { mockMeetupsFilterTags } from '@/utils/mock'

import BrandTitle from '@/widgets/BrandTitle'
import Sticky from '@/widgets/Sticky'
import Button from '@/widgets/Buttons/Button'
import FiltersMenu from '@/widgets/FiltersMenu'
import DotDivider from '@/widgets/DotDivider'

import {
  Wrapper,
  FilterWrapper,
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
      <BrandTitle
        title="Meetups"
        fontSize={23}
        mBottom={25}
        desc="来和志同道合的伙伴们一起聊聊吧 !"
      />
      <Sticky offsetTop={26}>
        <FilterWrapper>
          <FiltersMenu tags={mockMeetupsFilterTags()} revert />
        </FilterWrapper>
        <NaviFooter>
          <Button type="primary" size="small" ghost>
            + 发起小聚
          </Button>

          <Terms>
            <TermItem>关于</TermItem> <DotDivider space={6} radius={3} />{' '}
            <TermItem>建议</TermItem> <DotDivider space={6} radius={3} />{' '}
            <TermItem>举报</TermItem>
          </Terms>
        </NaviFooter>
      </Sticky>
    </Wrapper>
  )
}

export default FilterBar
