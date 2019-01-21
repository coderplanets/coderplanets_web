import styled from 'styled-components'

import { theme, cs } from 'utils'

// 纯css，div隐藏滚动条，保留鼠标滚动效果。
// http://blog.csdn.net/liusaint1992/article/details/51277751
export const Container = styled.aside`
  ${cs.flexColumn()};
  border-right: 1px solid;
  position: fixed;
  height: 100vh;
  top: 0;
  width: ${({ pin }) => (pin ? '250px' : '56px')};
  box-shadow: ${({ pin }) => (pin ? '3px 0 20px rgba(0, 0, 0, 0.2); ' : '')};
  background: ${theme('sidebar.bg')};
  border-color: ${theme('sidebar.borderColor')};
  z-index: 2000;
  overflow: hidden;

  transition: width 0.2s, opacity 0.8s, box-shadow 0.1s linear 0.1s,
    background-color 0.3s;

  &:hover {
    width: 250px;
    box-shadow: 3px 0 20px rgba(0, 0, 0, 0.2);
  }
`

export const holder = 1
