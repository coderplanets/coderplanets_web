import React from 'react'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'

import { VerticalScroller } from '@components/CustomScroller'

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
      <VerticalScroller height="84vh" withBorder>
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
      </VerticalScroller>
    )
  }
)

export default React.memo(SortableMenuList)
