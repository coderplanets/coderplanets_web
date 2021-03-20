import React from 'react'

import type { TSIZE_SML } from '@/spec'
import type { TDirection, TScrollDirection } from './spec'

import HorizontalScroller from './HorizontalScroller'
import VerticalScroller from './VerticalScroller'

export type TProps = {
  direction: TDirection
  children: React.ReactNode
  height?: string
  innerHeight?: string
  width?: string
  showShadow?: boolean
  shadowSize?: TSIZE_SML
  barSize?: TSIZE_SML
  // hack for custom scrollbar
  autoHide?: boolean
  showOnHover?: boolean
  withBorder?: boolean
  onTopEnter?: () => void
  onTopLeave?: () => void
  onBottomEnter?: () => void
  onBottomLeave?: () => void

  // scroll direction
  onScrollDirectionChange?: (dir: TScrollDirection) => void
}

const CustomScroller: React.FC<TProps> = ({
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

export default React.memo(CustomScroller)
