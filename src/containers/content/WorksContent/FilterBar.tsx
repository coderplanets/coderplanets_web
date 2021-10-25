import { FC, memo } from 'react'

import { mockNaviCatalogTags } from '@/utils/mock'

// import FiltersMenu from '@/widgets/FiltersMenu'
import NaviCatalog from '@/widgets/NaviCatalog'

// import { VIEW } from './constant'

// import fakeFilterItems from './fakeFilterItems'
import { Wrapper, FilterWrapper } from './styles/filter_bar'

// import { changeView } from './logic'

type TProps = {
  activeView?: string
}

const FilterBar: FC<TProps> = ({ activeView }) => {
  return (
    <Wrapper>
      <FilterWrapper>
        <NaviCatalog
          title="类别筛选"
          withDivider={false}
          tags={mockNaviCatalogTags()}
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
