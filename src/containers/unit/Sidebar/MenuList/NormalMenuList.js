import React from 'react'

import CustomScroller from '@/components/CustomScroller'
import MenuBar from './MenuBar'

const NormalMenuList = ({ communities, pin, activeRaw, forceRerender }) => {
  return (
    <CustomScroller
      direction="vertical"
      height="calc(100vh - 140px)"
      withBorder
      autoHide
    >
      <div>
        {communities.map((item) => (
          <MenuBar
            key={item.raw}
            pin={pin}
            item={item}
            activeRaw={activeRaw}
            forceRerender={forceRerender}
          />
        ))}
        <br />
      </div>
    </CustomScroller>
  )
}

export default React.memo(NormalMenuList)
