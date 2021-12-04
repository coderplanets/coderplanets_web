import { FC, memo } from 'react'

import type { TCategory } from '@/spec'

import Sticky from '@/widgets/Sticky'
import { Br } from '@/widgets/Common'
import NaviCatalog from '@/widgets/NaviCatalog'

import type { TSearchState } from './spec'
import { Wrapper, Holder, SearchTitle, SearchHint } from './styles/sidebar'
import { categoryOnChange } from './logic'

type TProps = {
  showSearchNote: boolean
  searchStatus: TSearchState
  items: TCategory[]
}

const Sidebar: FC<TProps> = ({ showSearchNote, searchStatus, items }) => {
  const categories = items.map((c) => ({ ...c, id: c.raw, extra: [c.title] }))
  const { searchValue, searchResultCount } = searchStatus

  return (
    <Wrapper>
      <Sticky offsetTop={60}>
        <Br bottom={8} />
        {showSearchNote ? (
          <SearchHint>
            <SearchTitle>搜索结果: </SearchTitle>
            共找到 &apos;{searchValue} &apos; 相关社区 {searchResultCount} 个
          </SearchHint>
        ) : (
          <NaviCatalog
            tags={categories}
            onSelect={(raw) => categoryOnChange(raw)}
            headerUtils={false}
            withDivider
          />
        )}
      </Sticky>
      {/* without Holder the Sticky will not work because the
      Sticky  Content's Height is too long */}
      <Holder />
    </Wrapper>
  )
}

export default memo(Sidebar)
