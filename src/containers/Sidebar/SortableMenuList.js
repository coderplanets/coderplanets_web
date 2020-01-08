import React from 'react'
import { Waypoint } from 'react-waypoint'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'

import MenuBar from './MenuBar'
import { anchorTop, anchorOffTop, anchorBottom, anchorOffBottom } from './logic'
import { ScrollWrapper } from './styles/menu_list'

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
      <OverlayScrollbarsComponent
        options={{ scrollbars: { autoHide: 'scroll', autoHideDelay: 200 } }}
        className="os-theme-light"
      >
        <ScrollWrapper>
          <React.Fragment>
            <Waypoint onEnter={anchorTop} onLeave={anchorOffTop} />
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
            <Waypoint onEnter={anchorBottom} onLeave={anchorOffBottom} />
          </React.Fragment>
        </ScrollWrapper>
      </OverlayScrollbarsComponent>
    )
  }
)

export default SortableMenuList
