import styled from 'styled-components'

import { theme, cs } from '@/utils'

// 纯css，div隐藏滚动条，保留鼠标滚动效果。
// http://blog.csdn.net/liusaint1992/article/details/51277751
export const Wrapper = styled.aside.attrs((props) => ({
  'data-testid': props.testid,
}))`
  ${cs.flexColumn()};
  border-right: 1px solid;
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  width: ${({ pin }) => (pin ? '260px' : '56px')};
  box-shadow: ${({ pin }) => (pin ? '3px 0 20px rgba(0, 0, 0, 0.2); ' : '')};
  background: ${theme('sidebar.bg')};
  border-color: ${theme('sidebar.borderColor')};
  z-index: ${cs.zIndex.sidebar};
  // overflow: hidden;

  transition: width 0.2s, opacity 0.8s, box-shadow 0.1s linear 0.1s,
    background-color 0.3s;

  &:hover {
    width: 260px;
    box-shadow: 3px 0 20px rgba(0, 0, 0, 0.2);
  }
  ${cs.media.tablet`display: none`};
`
export const holder = 1
