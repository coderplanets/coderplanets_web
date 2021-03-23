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
