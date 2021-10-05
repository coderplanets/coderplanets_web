import { ReactNode } from 'react'
// c# like
export type Nullable<T> = T | null

export type TID = string

export type TTestable = {
  testid?: string
}

export type TActive = {
  active?: boolean
  $active?: boolean
  show?: boolean
  visible?: boolean
  $visible?: boolean
}

export type TSpace = {
  top?: number | string
  bottom?: number | string
  left?: number | string
  right?: number | string
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

export type TTabItem = {
  id?: string
  title?: string
  raw: string
  alias?: string
  icon?: string | ReactNode
  localIcon?: string
}

export type TResState = 'LOADING' | 'DONE' | 'EMPTY'

export type TPaymentUsage = 'SENIOR' | 'GirlsCodeTooPlan' | 'DONATE' | 'SPONSOR'
export type TPaymentMethod = 'ALIPAY' | 'WECHAT'

export type TFlexRule =
  | 'align-both'
  | 'align-center'
  | 'align-start'
  | 'align-end'
  | 'align-baseline'
  | 'justify-center'
  | 'justify-start'
  | 'justify-end'
  | 'justify-between'
  | 'justify-around'
  | 'justify-evenly'
  | ''

export type TGQError = {
  message?: string
  key?: string
  path?: string
  code?: number
}
