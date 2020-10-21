import { M_MENU_HEIGHT } from './index'

export const getFilterMenuScrollHeight = () => {
  const SCROLL_BUTTOM_OFFSET = '100px'

  return `calc(${M_MENU_HEIGHT} - ${SCROLL_BUTTOM_OFFSET})`
}

export const holder = 1
