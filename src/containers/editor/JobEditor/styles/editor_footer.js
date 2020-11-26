import styled from 'styled-components'

import Img from '@/Img'
import { animate, theme, css } from '@/utils'
//
export const Wrapper = styled.div`
  ${css.flex('align-both')};
  flex-wrap: wrap;
`
export const Item = styled.div`
  ${css.flex()};
  color: ${theme('editor.footer')};
  &:hover {
    color: #51abb2;
    animation: ${animate.pulse} 0.4s linear;
  }
`
export const Divider = styled(Img)`
  fill: ${theme('editor.footer')};
  ${css.size(10)};
  margin-left: 4px;
  margin-right: 4px;
`
export const ItemTitle = styled.div`
  cursor: pointer;
  font-size: 1rem;
  ${Item}:hover & {
    color: ${theme('editor.footerHover')};
  }
`
export const ItemIcon = styled(Img)`
  fill: ${theme('editor.content')};
  width: 17px;
  height: 17px;
  margin-right: 3px;
  margin-top: 2px;

  ${Item}:hover & {
    fill: ${theme('editor.footerHover')};
  }
`
