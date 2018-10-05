import styled from 'styled-components'

import Img from '../../../components/Img'
import { theme } from '../../../utils'

export const Wrapper = styled.div``

export const LabelItem = styled.div`
  display: flex;
  align-items: center;
  color: ${theme('editor.footer')};
  &:hover {
    color: ${theme('banner.title')};
  }
`
export const LabelIcon = styled(Img)`
  fill: ${theme('editor.content')};
  width: 16px;
  height: 16px;
  margin-right: 3px;
  display: block;

  ${LabelItem}:hover & {
    fill: ${theme('editor.footerHover')};
  }
`
export const Title = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 2px;
  ${LabelItem}:hover & {
    color: ${theme('editor.footerHover')};
  }
`
