import React from 'react'

import { VerticalScroller } from '@components/CustomScroller'
import MenuBar from './MenuBar'

const NormalMenuList = ({ communities, pin, activeRaw, forceRerender }) => {
  return (
    <VerticalScroller height="84vh" withBorder>
      {communities.map(item => (
        <MenuBar
          key={item.raw}
          pin={pin}
          item={item}
          activeRaw={activeRaw}
          forceRerender={forceRerender}
        />
      ))}
    </VerticalScroller>
  )
}

export default React.memo(NormalMenuList)
