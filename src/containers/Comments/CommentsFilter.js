import React from 'react'

import { ICON_CMD } from '@/config'
import { TYPE } from '@/constant'

import Tooltip from '@/components/Tooltip'
import {
  FilterWraper,
  MenuWrapper,
  MenuItem,
  FilterIcon,
  Header,
  RecentlyIcon,
} from './styles/comments_filter'

import { onFilterChange } from './logic'

const filterDict = {
  DESC_INSERTED: '最新创建',
  ASC_INSERTED: '综合排序',
  MOST_LIKES: '最多顶',
  MOST_DISLIKES: '最多踩',
}

const Menus = ({ active }) => (
  <MenuWrapper>
    <MenuItem
      onClick={() => onFilterChange(TYPE.ASC_INSERTED)}
      type={TYPE.ASC_INSERTED}
      active={active}
    >
      综合排序
    </MenuItem>
    <MenuItem
      onClick={() => onFilterChange(TYPE.DESC_INSERTED)}
      type={TYPE.DESC_INSERTED}
      active={active}
    >
      最近创建
    </MenuItem>
    <MenuItem
      onClick={() => onFilterChange(TYPE.MOST_LIKES)}
      type={TYPE.MOST_LIKES}
      active={active}
    >
      最多顶
    </MenuItem>
    <MenuItem
      onClick={() => onFilterChange(TYPE.MOST_DISLIKES)}
      type={TYPE.MOST_DISLIKES}
      active={active}
    >
      最多踩
    </MenuItem>
  </MenuWrapper>
)

const renderFilterIcon = filterType => {
  switch (filterType) {
    case TYPE.DESC_INSERTED:
      return <RecentlyIcon src={`${ICON_CMD}/recent.svg`} />

    case TYPE.MOST_LIKES:
      return <FilterIcon src={`${ICON_CMD}/up.svg`} />

    case TYPE.MOST_DISLIKES:
      return <FilterIcon src={`${ICON_CMD}/up.svg`} reverse />

    default:
      return <FilterIcon src={`${ICON_CMD}/filter2.svg`} />
  }
}

const CommentsFilter = ({ filterType, show }) => (
  <FilterWraper show={show}>
    <Tooltip content={<Menus active={filterType} />}>
      <Header>
        {renderFilterIcon(filterType)}
        {filterDict[filterType]}
      </Header>
    </Tooltip>
  </FilterWraper>
)

export default React.memo(CommentsFilter)
