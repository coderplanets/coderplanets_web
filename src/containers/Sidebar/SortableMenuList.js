import React from 'react'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'

import CustomScroller from '@/components/CustomScroller'
import MenuBar from './MenuBar'

const SortableMenuBar = SortableElement(
  ({ pin, sortOptActive, item, activeRaw, forceRerender }) => (
    <MenuBar
      pin={pin}
      sortOptActive={sortOptActive}
      item={item}
      activeRaw={activeRaw}
      forceRerender={forceRerender}
    />
  )
)

const SortableMenuList = SortableContainer(
  ({ communities, pin, sortOptActive, activeRaw, forceRerender }) => {
    return (
      <CustomScroller direction="vertical" height="84vh" withBorder autoHide>
        {communities.map((item, index) => (
          <SortableMenuBar
            index={index}
            key={item.raw}
            pin={pin}
            sortOptActive={sortOptActive}
            item={item}
            activeRaw={activeRaw}
            forceRerender={forceRerender}
          />
        ))}
      </CustomScroller>
    )
  }
)

export default React.memo(SortableMenuList)
