import React from 'react'

import CustomScroller from '@/components/CustomScroller'
import MenuBar from './MenuBar'

const NormalMenuList = ({ communities, pin, activeRaw, forceRerender }) => {
  return (
    <CustomScroller direction="vertical" height="84vh" withBorder autoHide>
      {communities.map((item) => (
        <MenuBar
          key={item.raw}
          pin={pin}
          item={item}
          activeRaw={activeRaw}
          forceRerender={forceRerender}
        />
      ))}
    </CustomScroller>
  )
}

export default React.memo(NormalMenuList)
