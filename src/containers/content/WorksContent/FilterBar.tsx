import { FC, memo } from 'react'

import { mockNaviCatalogMenu } from '@/utils/mock'

// import FiltersMenu from '@/components/FiltersMenu'
import NaviCatalog from '@/components/NaviCatalog'

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
          items={mockNaviCatalogMenu()}
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
