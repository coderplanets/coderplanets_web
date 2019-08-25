import React from 'react'
import { Waypoint } from 'react-waypoint'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'

import MenuBar from './MenuBar'
import { anchorTop, anchorOffTop, anchorBottom, anchorOffBottom } from './logic'
import { ScrollWrapper } from './styles/menu_list'

const NormalMenuList = ({ communities, pin, activeRaw, forceRerender }) => (
  <OverlayScrollbarsComponent
    options={{ scrollbars: { autoHide: 'scroll', autoHideDelay: 200 } }}
    className="os-theme-light"
  >
    <ScrollWrapper>
      <React.Fragment>
        <Waypoint onEnter={anchorTop} onLeave={anchorOffTop} />
        {communities.map(item => (
          <MenuBar
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
)

export default NormalMenuList
