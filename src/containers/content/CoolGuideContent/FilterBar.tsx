import { FC, Fragment, memo } from 'react'

import { ICON_CMD } from '@/config'
import { mockNaviCatalogTags } from '@/utils/mock'

import Sticky from '@/widgets/Sticky'
import BrandTitle from '@/widgets/BrandTitle'
import NaviCatalog from '@/widgets/NaviCatalog'

import {
  Wrapper,
  Divider,
  TopFilter,
  Option,
  OptionItem,
  ClockIcon,
} from './styles/filter_bar'

import { topFilterOnChange, goHomeContent } from './logic'

type TProps = {
  topFilter: string
  menuOnSelect: (id: string, type: string) => void
}

const FilterBar: FC<TProps> = ({ topFilter, menuOnSelect }) => {
  return (
    <Wrapper testid="filter-bar">
      <TopFilter>
        <BrandTitle
          title="酷导航"
          desc="实用指南，启发灵感，找到有趣"
          onClick={() => goHomeContent()}
        />
        <Divider />
        {topFilter !== 'all' && (
          <Option onClick={() => topFilterOnChange('all')}>全部</Option>
        )}
        <Option>
          <OptionItem>我的收藏</OptionItem>
        </Option>
        <Option
          active={topFilter === 'latest'}
          onClick={() => topFilterOnChange('latest')}
        >
          <OptionItem>最近更新</OptionItem>
          <ClockIcon
            src={`${ICON_CMD}/navi/clock-solid.svg`}
            active={topFilter === 'latest'}
          />
        </Option>
      </TopFilter>
      <Divider />
      <Sticky offsetTop={100}>
        <Fragment>
          <NaviCatalog
            title="类别"
            onSelect={(id: string, type: string) => {
              menuOnSelect(id, type)
            }}
            withDivider={false}
            tags={mockNaviCatalogTags()}
          />
        </Fragment>
      </Sticky>
    </Wrapper>
  )
}

export default memo(FilterBar)
