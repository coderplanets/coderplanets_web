import styled from 'styled-components' //

import { animate, cs } from '../../../utils'

export const Wrapper = styled.div`
  min-height: 1rem;
`
export const Msg = styled.span`
  margin-left: 5px;
`

export const SuccessMsgBox = styled.div`
  color: yellowgreen;
  animation: ${animate.fadeInUp} 0.5s linear;
  display: ${({ show }) => (show ? 'block' : 'none')};
`

export const WarningMsgBox = styled.div`
  color: #e8c557;
  animation: ${animate.pulse} 0.3s linear;
  display: ${({ show }) => (show ? 'block' : 'none')};
`

export const ErrorMsgBox = styled.div`
  color: tomato;
  animation: ${animate.shake} 0.3s linear;
  display: ${({ show }) => (show ? 'block' : 'none')};
`

export const ErrorArrayWrapper = styled.div`
  ${cs.flexColumn()};
  color: tomato;
  animation: ${animate.shake} 0.5s ease-in;
`

export const ErrorMsg = styled.div`
  ${cs.flex()};
`

export const ErrorKey = styled.div`
  min-width: 50px;
  text-align: right;
  margin-right: 6px;
  opacity: 0.6;
`
export const ErrorDetail = styled.div`
  opacity: 0.9;
`
