import styled from 'styled-components'

import { theme, animate, cs } from 'utils'
import Img from 'Img'

// display: ${props => (props.show ? 'block' : 'none')};
export const Mask = styled.div`
  position: fixed;
  overflow: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${cs.zIndex.modalOverlay};
  display: ${({ show }) => (show ? 'block' : 'none')};
`

export const Wrapper = styled.div`
  position: relative;
  background-color: ${({ background }) =>
    background === 'default' ? theme('modal.bg') : theme('preview.bg')};
  margin: 0 auto;
  top: ${({ offsetTop }) => offsetTop};
  width: ${({ width }) => width};
  min-height: 320px;
  max-height: 81vh;
  box-shadow: -5px 6px 37px -8px rgba(0, 0, 0, 0.42);
  border: 1px solid;
  border-top: 3px solid;
  border-color: ${({ mode }) =>
    mode === 'default' ? theme('modal.border') : theme('baseColor.error')};
  animation: ${animate.zoomInRule};
`
export const ChildrenWrapper = styled.div`
  min-height: 320px;
  max-height: 80vh;
  height: auto;
  overflow-y: scroll;
`
export const CloseBtn = styled(Img)`
  fill: ${({ mode }) =>
    mode === 'default' ? theme('font') : theme('baseColor.error')};
  position: absolute;
  width: 30px;
  height: 30px;
  right: 15px;
  top: 15px;
  display: ${({ show }) => (show ? 'block' : 'none')};

  &:hover {
    animation: ${animate.rotate360CloseRule};
    font-weight: bold;
    cursor: pointer;
  }
`
