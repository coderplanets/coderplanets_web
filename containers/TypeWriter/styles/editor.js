import styled from 'styled-components'

import { Img } from '../../../components'
import { Animate, theme } from '../../../utils'

export const ExtraWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const ExtraItem = styled.div`
  display: flex;
  color: ${theme('editor.footer')};
  &:hover {
    color: #51abb2;
    animation: ${Animate.pulse} 0.4s linear;
  }
`

export const ExtraDivider = styled(Img)`
  fill: #75898a;
  width: 10px;
  height: 10px;
  margin-left: 4px;
  margin-right: 4px;
`
export const ExtraItemTitle = styled.div`
  cursor: pointer;
  font-size: 1.2em;
  ${ExtraItem}:hover & {
    color: ${theme('editor.footerHover')};
  }
`
export const ExtraItemIcon = styled(Img)`
  fill: ${theme('editor.content')};
  width: 17px;
  height: 17px;
  margin-right: 3px;
  margin-top: 2px;

  ${ExtraItem}:hover & {
    fill: ${theme('editor.footerHover')};
  }
`
