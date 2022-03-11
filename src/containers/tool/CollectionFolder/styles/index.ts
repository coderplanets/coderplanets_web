import styled from 'styled-components'

import Img from '@/Img'
import css, { theme, animate } from '@/utils/css'
import { MODAL_MIN_HEIGHT } from './metric'

export const Wrapper = styled.div`
  width: 100%;
  min-height: ${MODAL_MIN_HEIGHT};
`
export const AdderWrapper = styled.div`
  ${css.flex('justify-end')};
  width: 80px;
  text-align: right;
  &:active {
    animation: ${animate.pulse} 0.4s linear;
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
