import styled from 'styled-components'

import { theme, cs } from '../../../utils'

export const PageOverlay = styled.div`
  bottom: 0;
  cursor: pointer;
  left: 0;
  overflow: auto;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1001;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
`
// flex-grow example: http://zhoon.github.io/css3/2014/08/23/flex.html
export const PanelContainer = styled.div`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  width: 45vw;
  max-width: 550px;
  position: fixed;
  top: 12vh;
  z-index: 1002;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  left: 50%;
  margin-left: -19vw;
`
// #001b21;
export const BaseBar = styled.div`
  ${cs.flex('align-center')};
  border: 1px solid ${theme('shell.border')};
  width: 100%;
  height: 70px;
  background: ${theme('shell.barBg')};
  color: white;
`

export const AlertBar = styled(BaseBar)`
  position: relative;
  padding: 18px;
  color: #365760;
  &:before {
    content: '⚠ ';
    margin-right: 10px;
    color: tomato;
  }
`
