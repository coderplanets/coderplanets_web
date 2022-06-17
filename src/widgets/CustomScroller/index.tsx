import { FC, ReactNode, memo } from 'react'

import type { TSizeSML } from '@/spec'
import type { TDirection, TScrollDirection } from './spec'

import HorizontalScroller from './HorizontalScroller'
import VerticalScroller from './VerticalScroller'

export type TProps = {
  direction: TDirection
  children: ReactNode
  height?: string
  innerHeight?: string
  width?: string
  showShadow?: boolean
  shadowSize?: TSizeSML
  barSize?: TSizeSML
  // hack for custom scrollbar
  autoHide?: boolean
  showOnHover?: boolean
  withBorder?: boolean
  onTopEnter?: () => void
  onTopLeave?: () => void
  onBottomEnter?: () => void
  onBottomLeave?: () => void

  instanceKey?: string | null
  // scroll direction
  onScrollDirectionChange?: (dir: TScrollDirection) => void
}

const CustomScroller: FC<TProps> = ({
  children,
  direction = 'vertical',
  ...restProps
}) => {
  return direction === 'vertical' ? (
    <VerticalScroller {...restProps}>{children}</VerticalScroller>
  ) : (
    <HorizontalScroller {...restProps}>{children}</HorizontalScroller>
  )
}

export default memo(CustomScroller)
