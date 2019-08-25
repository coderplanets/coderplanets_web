import React from 'react'
import R from 'ramda'
import { Waypoint } from 'react-waypoint'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'

import MenuBar from './MenuBar'
import { anchorTop, anchorOffTop, anchorBottom, anchorOffBottom } from './logic'
import { Wrapper, ScrollWrapper } from './styles/menu_list'

const SortableMenuBar = SortableElement(
  ({ pin, item, activeRaw, forceRerender }) => (
    <MenuBar
      pin={pin}
      item={item}
      activeRaw={activeRaw}
      forceRerender={forceRerender}
    />
  )
)

const MenuList = SortableContainer(
  ({ items, pin, activeRaw, forceRerender, showHeaderShadow }) => {
    const homeCommunities = R.filter(R.propEq('raw', 'home'), items)
    const sortableCommunities = R.reject(R.propEq('raw', 'home'), items)

    return (
      <Wrapper>
        {homeCommunities.map(item => (
          <MenuBar
            key={item.raw}
            pin={pin}
            item={item}
            activeRaw={activeRaw}
            dropShadow={showHeaderShadow}
          />
        ))}
        <OverlayScrollbarsComponent
          options={{ scrollbars: { autoHide: 'scroll', autoHideDelay: 200 } }}
          className="os-theme-light"
        >
          <ScrollWrapper>
            <React.Fragment>
              <Waypoint onEnter={anchorTop} onLeave={anchorOffTop} />
              {sortableCommunities.map((item, index) => (
                <SortableMenuBar
                  index={index}
                  key={item.raw}
                  pin={pin}
                  item={item}
                  activeRaw={activeRaw}
                  forceRerender={forceRerender}
                />
              ))}
              <Waypoint onEnter={anchorBottom} onLeave={anchorOffBottom} />
            </React.Fragment>
          </ScrollWrapper>
        </OverlayScrollbarsComponent>
      </Wrapper>
    )
  }
)

export default MenuList
