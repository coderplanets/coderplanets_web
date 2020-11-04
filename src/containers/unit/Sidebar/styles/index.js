import styled from 'styled-components'

import { theme, css } from '@/utils'

import { SIDEBAR_WIDTH, SIDEBAR_EXPAND_WIDTH } from './metric'

// 纯css，div隐藏滚动条，保留鼠标滚动效果。
// http://blog.csdn.net/liusaint1992/article/details/51277751
export const Wrapper = styled.aside.attrs((props) => ({
  'data-test-id': props.testId,
}))`
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

export const MainWrapper = styled.div`
  display: ${({ isPulled }) => (isPulled ? 'flex' : 'none')};
  flex-direction: column;

  /* top: 0; */
  /* left: 0; */
  width: ${({ pin }) => (pin ? SIDEBAR_EXPAND_WIDTH : SIDEBAR_WIDTH)};
  height: 100vh;
  box-shadow: ${({ pin }) => (pin ? '3px 0 20px rgba(0, 0, 0, 0.2); ' : '')};
  background: ${theme('sidebar.bg')};
  z-index: ${css.zIndex.sidebar};

  &:hover {
    width: 260px;
    box-shadow: 3px 0 20px rgba(0, 0, 0, 0.2);
    transition-delay: 0.4s;
  }

  transition: width 0.2s, opacity 0.8s, box-shadow 0.1s linear 0.1s,
    background-color 0.3s z-index 0.5s;
`
