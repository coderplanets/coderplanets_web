import styled from 'styled-components'

import { TTestable } from '@/types'
import { theme, css } from '@/utils'

import { getMainWidth, getShadow, SIDEBAR_WIDTH } from './metric'

// 纯css，div隐藏滚动条，保留鼠标滚动效果。
// http://blog.csdn.net/liusaint1992/article/details/51277751
export const Wrapper = styled.aside.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable & { isPulled: boolean }>`
  position: fixed;
  top: 0;
  min-width: ${SIDEBAR_WIDTH};
  height: 100vh;
  border-right: 1px solid;
  border-color: ${theme('sidebar.borderColor')};
  z-index: ${css.zIndex.sidebar};

  transform: ${({ isPulled }) =>
    isPulled ? 'translateX(0)' : `translateX(-${SIDEBAR_WIDTH})`};

  ${css.media.maxContent`
    left: 0;
  `};
  ${css.media.tablet`display: none`};
`
type TMainWrapper = { pin: boolean; isPulled?: boolean }
export const MainWrapper = styled.div.attrs(({ pin }: TMainWrapper) => ({
  style: {
    width: getMainWidth(pin),
    'box-shadow': getShadow(pin),
  },
}))<TMainWrapper>`
  display: ${({ isPulled }) => (isPulled ? 'flex' : 'none')};
  flex-direction: column;

  height: 100vh;
  background: ${theme('sidebar.bg')};
  z-index: ${css.zIndex.sidebar};

  transition: width 0.1s, box-shadow 0.25s cubic-bezier(0.25, 1, 0.5, 1);
`
