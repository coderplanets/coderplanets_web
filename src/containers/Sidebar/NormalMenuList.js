import React, { useRef } from 'react'
import { Waypoint } from 'react-waypoint'

import { useCustomScroll } from '@hooks'

import MenuBar from './MenuBar'
import { ScrollWrapper } from './styles/menu_list'

import { anchorTop, anchorOffTop, anchorBottom, anchorOffBottom } from './logic'

const NormalMenuList = ({ communities, pin, activeRaw, forceRerender }) => {
  const ref = useRef(null)
  useCustomScroll(ref)

  return (
    <ScrollWrapper ref={ref}>
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
}

export default NormalMenuList
