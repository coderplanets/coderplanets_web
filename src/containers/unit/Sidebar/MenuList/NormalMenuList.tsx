import { FC, memo } from 'react'

import type { TCommunity } from '@/spec'
import CustomScroller from '@/widgets/CustomScroller'
import MenuBar from './MenuBar'

type TProps = {
  communities: TCommunity[]
  pin: boolean
  activeRaw: string
}

const NormalMenuList: FC<TProps> = ({ communities, pin, activeRaw }) => {
  const scrollHeight = !pin ? 'calc(100vh - 88px)' : 'calc(100vh - 140px)'

  return (
    <CustomScroller
      direction="vertical"
      height={scrollHeight}
      barSize="small"
      withBorder
      autoHide
    >
      <div>
        {communities.map((item) => (
          <MenuBar key={item.raw} pin={pin} item={item} activeRaw={activeRaw} />
        ))}
        <br />
      </div>
    </CustomScroller>
  )
}

export default memo(NormalMenuList)
