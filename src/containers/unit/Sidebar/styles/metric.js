export const SIDEBAR_WIDTH = '56px'
export const SIDEBAR_EXPAND_WIDTH = '260px'

export const getMainWidth = (pin) => {
  return pin ? SIDEBAR_EXPAND_WIDTH : SIDEBAR_WIDTH
}

export const getShadow = (pin) => {
  return pin ? '3px 0 20px rgba(0, 0, 0, 0.2)' : ''
}
