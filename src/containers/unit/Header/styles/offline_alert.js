import styled from 'styled-components'

import { theme, css, animate } from '@/utils'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  background: ${theme('baseColor.red')};
  color: ${theme('header.bg')};
  margin-left: 30px;
  padding: 0 16px;
  border-radius: 4px;
  animation: ${animate.breath} 1.5s linear infinite;

  ${css.media.tablet`display: none;`};
`
export const Holder = 1
