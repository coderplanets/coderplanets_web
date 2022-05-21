import styled from 'styled-components'

export const Wrapper = styled.div<{ effect: string }>`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  opacity: 0.9;
  /* see https://www.zhangxinxu.com/wordpress/2015/11/css3-will-change-improve-paint/ */
  will-change: transform;
  ${({ effect }) => effect || ''};
  transition: all 0.25s;
`

export const holder = 1
