import styled from 'styled-components'

import type { TActive } from '@/spec'
import { theme, animate, css } from '@/utils'
import Img from '@/Img'

// display: ${props => (props.show ? 'block' : 'none')};
export const Mask = styled.div<TActive>`
  position: fixed;
  overflow: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${css.zIndex.modalOverlay};
  display: ${({ show }) => (show ? 'block' : 'none')};
`

type TWrapper = {
  background: string
  width: string
  mode: string
  offsetTop: string
}
export const Wrapper = styled.div<TWrapper>`
  position: relative;
  background-color: ${({ background }) =>
    background === 'default' ? theme('modal.bg') : theme('drawer.bg')};
  margin: 0 auto;
  top: ${({ offsetTop }) => offsetTop};
  width: ${({ width }) => width};
  border-radius: 8px;
  min-height: 320px;
  max-height: 81vh;
  box-shadow: -5px 6px 37px -8px rgba(0, 0, 0, 0.42);
  /* border: 1px solid; */
  border-left: 2px solid;
  border-right: 2px solid;
  border-color: ${({ mode }) =>
    mode === 'default' ? theme('modal.border') : theme('baseColor.red')};
  animation: ${animate.zoomIn} 0.2s linear;

  ${css.media.tablet`width: 460px`};
  ${css.media.mobile`width: 320px`};
`
export const ChildrenWrapper = styled.div`
  min-height: 320px;
  max-height: 80vh;
  height: auto;
  overflow-y: scroll;
`
type TCloseBtn = TActive & { mode: string }
export const CloseBtn = styled(Img)<TCloseBtn>`
  fill: ${({ mode }) =>
    mode === 'default' ? theme('font') : theme('baseColor.red')};
  position: absolute;
  top: 0;
  right: -45px;
  ${css.size(30)};
  display: ${({ show }) => (show ? 'block' : 'none')};
  z-index: ${css.zIndex.modalCloseBtn};

  &:hover {
    animation: ${animate.rotate360} 2s cubic-bezier(0, 0.56, 0.24, 0.72);
    font-weight: bold;
    cursor: pointer;
  }
`
