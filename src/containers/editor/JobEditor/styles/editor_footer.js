import styled from 'styled-components'

import Img from '@/Img'
import { animate, theme, cs } from '@/utils'
//
export const Wrapper = styled.div`
  ${cs.flex('align-both')};
  flex-wrap: wrap;
`
export const Item = styled.div`
  ${cs.flex()};
  color: ${theme('editor.footer')};
  &:hover {
    color: #51abb2;
    animation: ${animate.pulseRule};
  }
`
export const Divider = styled(Img)`
  fill: ${theme('editor.footer')};
  width: 10px;
  height: 10px;
  margin-left: 4px;
  margin-right: 4px;
  display: block;
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
