import styled from 'styled-components'

import { TActive } from '@/types'
import { theme, animate, css } from '@/utils'

export const DeleteHintText = styled.div`
  color: ${theme('baseColor.red')};
  font-size: 1.3em;
  margin-bottom: 10px;
`
export const DeleteOverlay = styled.div<TActive>`
  ${css.flexColumn('align-both')};

  position: absolute;
  margin-top: -15px;
  margin-left: -20px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  z-index: 10;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  animation: ${animate.pulse} 0.4s linear;
`
export const DeleteBtnGroup = styled.div`
  ${css.flex()};
`
