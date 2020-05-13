import styled from 'styled-components'

import { theme, animate, cs } from '@/utils'

export const DeleteHintText = styled.div`
  color: ${theme('baseColor.error')};
  font-size: 1.3em;
  margin-bottom: 10px;
`
export const DeleteOverlay = styled.div`
  ${cs.flexColumn('align-both')};

  position: absolute;
  margin-top: -15px;
  margin-left: -20px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  z-index: 10;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  animation: ${animate.pulseRule};
`
export const DeleteBtnGroup = styled.div`
  ${cs.flex()};
`
