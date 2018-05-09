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
} from './styles/comments_filter'

import * as logic from './logic'

const filterDict = {
  DESC_INSERTED: '最新创建',
  ASC_INSERTED: '综合排序',
  MOST_LIKE: '最多顶',
  MOST_DISLIKE: '最多踩',
}

const Menus = ({ active }) => {
  return (
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
        onClick={logic.onFilterChange.bind(this, TYPE.MOST_LIKE)}
        type={TYPE.MOST_LIKE}
        active={active}
      >
        最多顶
      </MenuItem>
      <MenuItem
        onClick={logic.onFilterChange.bind(this, TYPE.MOST_DISLIKE)}
        type={TYPE.MOST_DISLIKE}
        active={active}
      >
        最多踩
      </MenuItem>
    </MenuWrapper>
  )
}

const renderFilterIcon = filterType => {
  switch (filterType) {
    case TYPE.DESC_INSERTED: {
      return <FilterIcon path={`${ICON_ASSETS}/cmd/recent.svg`} />
    }
    case TYPE.MOST_LIKE: {
      return <FilterIcon path={`${ICON_ASSETS}/cmd/up.svg`} />
    }
    case TYPE.MOST_DISLIKE: {
      return <FilterIcon path={`${ICON_ASSETS}/cmd/up.svg`} reverse />
    }
    default: {
      return <FilterIcon path={`${ICON_ASSETS}/cmd/filter2.svg`} />
    }
  }
}

const CommentsFilter = ({ filterType }) => {
  return (
    <FilterWraper>
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
