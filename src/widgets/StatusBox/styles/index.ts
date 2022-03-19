import styled from 'styled-components' //

import css, { theme, animate } from '@/utils/css'

export const Wrapper = styled.div`
  min-height: 1rem;
`
export const Msg = styled.span`
  margin-left: 5px;
`

export const SuccessMsgBox = styled.div<{ show?: boolean }>`
  color: ${theme('baseColor.green')};
  display: ${({ show }) => (show ? 'block' : 'none')};
  animation: ${animate.fadeInUp} 0.5s linear;
`

export const WarningMsgBox = styled.div<{ show?: boolean }>`
  color: #e8c557;
  animation: ${animate.pulse} 0.4s linear;
  display: ${({ show }) => (show ? 'block' : 'none')};
`

export const ErrorMsgBox = styled.div<{ show?: boolean }>`
  color: ${theme('baseColor.red')};
  animation: ${animate.shake} 0.3s linear;
  display: ${({ show }) => (show ? 'block' : 'none')};
`

export const ErrorArrayWrapper = styled.div`
  ${css.flexColumn()};
  color: ${theme('baseColor.red')};
  animation: ${animate.shake} 0.3s linear;
`

export const ErrorMsg = styled.div`
  ${css.flex()};
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
