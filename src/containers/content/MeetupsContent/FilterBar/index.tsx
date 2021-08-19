import { FC } from 'react'

import type { TFiltersMenuItems } from '@/spec'

import { mockFilterMenuTags } from '@/utils/mock'

import BrandTitle from '@/components/BrandTitle'
import Sticky from '@/components/Sticky'
import Button from '@/components/Buttons/Button'
import FiltersMenu from '@/components/FiltersMenu'
import DotDivider from '@/components/DotDivider'

import { Wrapper, NaviFooter, Terms, TermItem } from '../styles/filter_bar'

type TProps = {
  filtersItems: TFiltersMenuItems
}

const FilterBar: FC<TProps> = ({ filtersItems }) => {
  return (
    <Wrapper>
      <Sticky offsetTop={30}>
        <BrandTitle
          title="Meetup"
          fontSize={23}
          mBottom={30}
          desc="来和志同道合的朋友们一起聊聊?"
        />
        <FiltersMenu tags={mockFilterMenuTags()} revert />
        <NaviFooter>
          <Button type="primary" size="small" ghost>
            + 发起小聚
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
