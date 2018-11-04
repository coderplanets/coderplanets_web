import styled from 'styled-components'

import Img from '../../../components/Img'
import { theme, animate, cs } from '../../../utils'

export const AdderWrapper = styled.div`
  ${cs.flex('justify-end')};
  width: 80px;
  text-align: right;
  &:active {
    animation: ${animate.pulse} 0.3s linear;
  }
`
export const AdderText = styled.div`
  font-size: 0.9rem;
  color: ${theme('tabs.header')};
  margin-top: -2px;
  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
  transition: color 0.3s linear;
`
export const AdderIcon = styled(Img)`
  fill: ${theme('tabs.header')};
  width: 17px;
  height: 17px;
  margin-right: 3px;
  &:hover {
    cursor: pointer;
    fill: ${theme('tabs.headerActive')};
  }
`
