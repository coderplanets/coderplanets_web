import styled from 'styled-components'

import css, { theme, zIndex } from '@/utils/css'

import { getMainWidth, getShadow, SIDEBAR_WIDTH } from './metric'

// 纯css，div隐藏滚动条，保留鼠标滚动效果。
// http://blog.csdn.net/liusaint1992/article/details/51277751
type TWrapper = { ispulled: boolean }
export const Wrapper = styled.aside<TWrapper>`
  position: fixed;
  top: 0;
  min-width: ${SIDEBAR_WIDTH};
  height: 100vh;
  border-right: 1px solid;
  border-color: ${theme('sidebar.borderColor')};
  z-index: ${zIndex.sidebar};

  transform: ${({ ispulled }) =>
    ispulled ? 'translateX(0)' : `translateX(-${SIDEBAR_WIDTH})`};

  ${css.media.maxContent`
    left: 0;
  `};
  ${css.media.tablet`display: none`};
`
type TMainWrapper = { pin: boolean; ispulled?: boolean; testid: string }
export const MainWrapper = styled.div.attrs(
  ({ pin, testid }: TMainWrapper) => ({
    style: {
      width: getMainWidth(pin),
      'box-shadow': getShadow(pin),
      'data-test-id': testid,
    },
  }),
)<TMainWrapper>`
  display: ${({ ispulled }) => (ispulled ? 'flex' : 'none')};
  flex-direction: column;

  height: 100vh;
  background: ${theme('sidebar.bg')};
  z-index: ${zIndex.sidebar};

  transition: width 0.1s, box-shadow 0.25s cubic-bezier(0.25, 1, 0.5, 1);
`
