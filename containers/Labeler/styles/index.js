import styled from 'styled-components'

import Img from '../../../components/Img'
import { theme, Animate } from '../../../utils'

export const Wrapper = styled.div``

export const LabelItem = styled.div`
  display: flex;
  color: ${theme('editor.footer')};
  &:hover {
    color: #51abb2;
    animation: ${Animate.pulse} 0.4s linear;
  }
`
export const LabelIcon = styled(Img)`
  fill: ${theme('editor.content')};
  width: 17px;
  height: 17px;
  margin-right: 3px;
  margin-top: 2px;

  ${LabelItem}:hover & {
    fill: ${theme('editor.footerHover')};
  }
`
export const Title = styled.div`
  cursor: pointer;
  font-size: 1rem;
  ${LabelItem}:hover & {
    color: ${theme('editor.footerHover')};
  }
`
