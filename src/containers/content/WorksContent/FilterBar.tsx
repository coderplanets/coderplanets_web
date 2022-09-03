import { FC, memo } from 'react'

import { mockWorksNaviCatalogTags } from '@/utils/mock'

import NoticeBar from '@/widgets/NoticeBar'
import NaviCatalog from '@/widgets/NaviCatalog'

// import { VIEW } from './constant'

// import fakeFilterItems from './fakeFilterItems'
import { Wrapper, FilterWrapper } from './styles/filter_bar'

// import { changeView } from './logic'

type TProps = {
  // activeView?: string
}

const FilterBar: FC<TProps> = () => {
  return (
    <Wrapper>
      <NoticeBar
        type="notice"
        content="因作品数量有限，当前分类仅做参考展示。"
        bottom={15}
        left={-25}
        noBg
      />
      <FilterWrapper>
        <NaviCatalog
          title="类别筛选"
          withDivider={false}
          tags={mockWorksNaviCatalogTags()}
        />
      </FilterWrapper>
      {/* <Br bottom={40} /> */}
      {/* <FilterWrapper>
        <FiltersMenu
          title="高级搜索"
          items={fakeFilterItems}
          withDivider
          revert
        />
      </FilterWrapper> */}
    </Wrapper>
  )
}

export default memo(FilterBar)
