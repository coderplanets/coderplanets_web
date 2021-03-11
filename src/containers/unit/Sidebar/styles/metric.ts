export const SIDEBAR_WIDTH = '56px'
export const SIDEBAR_EXPAND_WIDTH = '260px'

export const getMainWidth = (pin: boolean): string => {
  // 58px is 2px more than SIDEBAR_WIDTH
  // otherwise the sidebar will have horizontal scroller
  // fix later
  // 这里要比常规的 Sidebar 宽度多两个 px，否则会出现横向滚动条，神奇。。
  return pin ? SIDEBAR_EXPAND_WIDTH : '58px' // SIDEBAR_WIDTH
}

export const getShadow = (pin: boolean): string => {
  return pin ? '3px 0 20px rgba(0, 0, 0, 0.2)' : ''
}
