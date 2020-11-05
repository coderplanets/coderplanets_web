import React from 'react'

import CustomScroller from '@/components/CustomScroller'
import MenuBar from './MenuBar'

const NormalMenuList = ({ communities, pin, activeRaw, forceRerender }) => {
  const scrollHeight = !pin ? 'calc(100vh - 70px)' : 'calc(100vh - 140px)'
  return (
    <CustomScroller
      direction="vertical"
      height={scrollHeight}
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
