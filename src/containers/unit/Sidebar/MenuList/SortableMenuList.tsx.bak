import { ComponentClass } from 'react'
import {
  SortableContainer,
  SortableElement,
  SortableElementProps,
  SortableContainerProps,
} from 'react-sortable-hoc'

import type { TCommunity } from '@/spec'
import CustomScroller from '@/widgets/CustomScroller'
import MenuBar from './MenuBar'

type TMenuBar = {
  item: TCommunity
  pin: boolean
  activeRaw: string
  sortOptActive: boolean
} & SortableElementProps

const SortableMenuBar: ComponentClass<TMenuBar> = SortableElement(
  ({ pin, sortOptActive, item, activeRaw }) => {
    return (
      <MenuBar
        pin={pin}
        sortOptActive={sortOptActive}
        item={item}
        activeRaw={activeRaw}
      />
    )
  },
)

type TProps = {
  communities: TCommunity[]
  pin: boolean
  activeRaw: string
  sortOptActive: boolean
  // see: https://github.com/clauderic/react-sortable-hoc/blob/master/types/index.d.ts
} & SortableContainerProps

const SortableMenuList: ComponentClass<TProps> = SortableContainer(
  ({ communities, pin, sortOptActive, activeRaw }) => {
    return (
      <CustomScroller direction="vertical" height="84vh" withBorder autoHide>
        <div>
          {communities.map((item: TCommunity, index: number) => (
            /* @ts-ignore */
            <SortableMenuBar
              index={index}
              key={item.raw}
              pin={pin}
              sortOptActive={sortOptActive}
              item={item}
              activeRaw={activeRaw}
            />
          ))}
          <br />
        </div>
      </CustomScroller>
    )
  },
)

export default SortableMenuList
