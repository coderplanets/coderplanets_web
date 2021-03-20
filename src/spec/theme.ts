export type TThemeName =
  | 'cyan'
  | 'solarizedDark'
  | 'purple'
  | 'yellow'
  | 'github'
  | 'Green'
  | 'ironGreen'
  | 'monokai'

// export type TTheme = ((obj: any) => unknown) | string
export type TTheme = any
// export type TTheme = string

export type TThemeMap = {
  _meta?: {
    category: string // TODO: 'dark' | 'light'
  }
  toast?: {
    successBar: string
    errorBar: string
    warnBar: string
    infoBar: string
  }
}
