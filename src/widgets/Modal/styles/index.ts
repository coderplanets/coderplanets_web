import styled from 'styled-components'

import type { TActive } from '@/spec'
import css, { theme, animate, zIndex } from '@/utils/css'
import CloseCrossSVG from '@/icons/CloseLight'

// display: ${props => (props.show ? 'block' : 'none')};
export const Mask = styled.div<TActive>`
  position: fixed;
  overflow: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${zIndex.modalOverlay};
  display: ${({ show }) => (show ? 'block' : 'none')};
  background: ${theme('modal.mask')};
`
type TWrapper = {
  background: string
  width: string
  mode: string
  offsetTop: string
  offsetLeft: string
}
export const Wrapper = styled.div<TWrapper>`
  position: relative;
  background-color: ${({ background }) =>
    background === 'default' ? theme('modal.bg') : theme('drawer.bg')};
  margin: 0 auto;
  top: ${({ offsetTop }) => offsetTop};
  width: ${({ width }) => width};
  height: auto;
  border-radius: 8px;
  min-height: 320px;
  max-height: 65vh;
  box-shadow: -5px 6px 37px -8px rgba(0, 0, 0, 0.42);
  padding-top: 25px;
  /* border: 1px solid; */
  /* border-top: 2px solid; */
  border-color: ${({ mode }) =>
    mode === 'default' ? theme('modal.border') : theme('baseColor.red')};
  animation: ${animate.jump} 0.3s linear;
  margin-left: ${({ offsetLeft }) => offsetLeft};

  ${css.media.tablet`width: 460px`};
  ${css.media.mobile`width: 320px`};
`
export const ChildrenWrapper = styled.div`
  min-height: 320px;
  /* height: 100%; */
  height: auto;
  overflow-y: scroll;
`
type TCloseBtn = { mode: string }
export const CloseBtn = styled(CloseCrossSVG)<TCloseBtn>`
  position: absolute;
  top: 16px;
  right: 18px;
  fill: ${({ mode }) =>
    mode === 'default' ? theme('thread.extraInfo') : theme('baseColor.red')};
  ${css.size(20)};
  z-index: ${zIndex.modalCloseBtn};
  opacity: 0.8;

  &:hover {
    animation: ${animate.pulse} 0.3s linear;
    cursor: pointer;
    opacity: 1;
  }
`
export const EscHint = styled.div<{ mode: string }>`
  color: ${({ mode }) =>
    mode === 'default' ? theme('font') : theme('baseColor.red')};
  opacity: 0.7;
  position: absolute;
  top: 35px;
  right: -44px;
  font-size: 13px;
`
