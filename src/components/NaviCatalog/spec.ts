export type TMenuItem = {
  id: string
  title: string
  displayType?: string
  fixedIcon?: string // string | React.ReactNode
  pinNumber?: number
  childMenu?: TMenuItem[]
}

export type TMenuMode = 'root' | 'child'
