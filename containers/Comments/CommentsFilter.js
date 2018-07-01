import React from 'react'

import { TYPE } from '../../utils'
import { ICON_ASSETS } from '../../config'
import { Popover } from '../../components'

import {
  FilterWraper,
  MenuWrapper,
  MenuItem,
  FilterIcon,
  Header,
  RecentlyIcon,
} from './styles/comments_filter'

import * as logic from './logic'

const filterDict = {
  DESC_INSERTED: '最新创建',
  ASC_INSERTED: '综合排序',
  MOST_LIKES: '最多顶',
  MOST_DISLIKES: '最多踩',
}

const Menus = ({ active }) => (
  <MenuWrapper>
    <MenuItem
      onClick={logic.onFilterChange.bind(this, TYPE.ASC_INSERTED)}
      type={TYPE.ASC_INSERTED}
      active={active}
    >
      综合排序
    </MenuItem>
    <MenuItem
      onClick={logic.onFilterChange.bind(this, TYPE.DESC_INSERTED)}
      type={TYPE.DESC_INSERTED}
      active={active}
    >
      最近创建
    </MenuItem>
    <MenuItem
      onClick={logic.onFilterChange.bind(this, TYPE.MOST_LIKES)}
      type={TYPE.MOST_LIKES}
      active={active}
    >
      最多顶
    </MenuItem>
    <MenuItem
      onClick={logic.onFilterChange.bind(this, TYPE.MOST_DISLIKES)}
      type={TYPE.MOST_DISLIKES}
      active={active}
    >
      最多踩
    </MenuItem>
  </MenuWrapper>
)

const renderFilterIcon = filterType => {
  switch (filterType) {
    case TYPE.DESC_INSERTED: {
      return <RecentlyIcon src={`${ICON_ASSETS}/cmd/recent.svg`} />
    }
    case TYPE.MOST_LIKES: {
      return <FilterIcon src={`${ICON_ASSETS}/cmd/up.svg`} />
    }
    case TYPE.MOST_DISLIKES: {
      return <FilterIcon src={`${ICON_ASSETS}/cmd/up.svg`} reverse />
    }
    default: {
      return <FilterIcon src={`${ICON_ASSETS}/cmd/filter2.svg`} />
    }
  }
}

const CommentsFilter = ({ filterType, show }) => {
  return (
    <FilterWraper show={show}>
      <Popover content={<Menus active={filterType} />}>
        <Header>
          {renderFilterIcon(filterType)}
          {filterDict[filterType]}
        </Header>
      </Popover>
    </FilterWraper>
  )
}

export default CommentsFilter
