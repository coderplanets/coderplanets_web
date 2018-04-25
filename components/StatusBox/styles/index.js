import styled from 'styled-components' //

import { Animate } from '../../../utils'

export const Wrapper = styled.div`
  height: 1em;
`
export const Msg = styled.span`
  margin-left: 5px;
`

export const SuccessMsgBox = styled.div`
  color: yellowgreen;
  animation: ${Animate.fadeInUp} 0.5s linear;
  display: ${props => (props.success ? 'block' : 'none')};
`

export const WarningMsgBox = styled.div`
  color: #e8c557;
  animation: ${Animate.pulse} 0.3s linear;
  display: ${props => (props.warn ? 'block' : 'none')};
`

export const ErrorMsgBox = styled.div`
  color: tomato;
  animation: ${Animate.shake} 0.3s linear;
  display: ${props => (props.error ? 'block' : 'none')};
`
