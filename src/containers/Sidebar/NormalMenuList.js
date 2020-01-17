import React from 'react'
import { Waypoint } from 'react-waypoint'

import MenuBar from './MenuBar'
import { anchorTop, anchorOffTop, anchorBottom, anchorOffBottom } from './logic'
import { ScrollWrapper } from './styles/menu_list'

const NormalMenuList = ({ communities, pin, activeRaw, forceRerender }) => (
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
)

export default NormalMenuList
