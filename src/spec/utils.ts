// c# like
export type Nullable<T> = T | null

export type TTestable = {
  testid: string
}

export type TActive = {
  active?: boolean
  show?: boolean
  visible?: boolean
}

export type TSpace = {
  top?: number
  bottom?: number
  left?: number
  right?: number
}

// google analytis format
export type TGAEvent = {
  action: string
  category: string
  label: string
  value: string
}

export type TSEO = {
  url: string
  title: string
  description: string
}

export type TLink = {
  href: string
}

export type TPlatform = {
  isChrome: boolean
  isFirefox: boolean
  isSafari: boolean
  isIE: boolean
  isEdge: boolean
  isMacOS: boolean
  isMobile: boolean
}

export type TDirection = 'down' | 'up'
export type TScrollDirection = 'up' | 'down'

export type TTooltipAnimation =
  | 'shift-away'
  | 'shift-toward'
  | 'fade'
  | 'scale'
  | 'perspective'

export type TTooltipPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end'

export type TReportType = 'ARTICLE' | 'USER' | 'COMMENT' | 'COMMUNITY'

export type TAttInfo = {
  id: string
  title: string
  // ...
}
