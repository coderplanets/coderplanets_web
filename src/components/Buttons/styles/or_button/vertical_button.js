import styled from 'styled-components'
// import { lighten } from 'polished'

import { cs, theme } from '@/utils'

import { Wrapper as BaseBtnWrapper } from '../button'
import { OrSignBase } from './index'

export const Wrapper = styled.div`
  ${cs.flexColumn('align-center')};
  position: relative;
`
const BaseButton = styled(BaseBtnWrapper)`
  ${cs.flexColumn('align-both')};
  width: 32px;
  min-height: 70px;
  white-space: pre-line;
  color: ${({ active }) => (active ? theme('button.fg') : '#99b9bf')};
  background: ${({ active }) => (active ? theme('button.primary') : '#024250')};
  border-color: ${({ active }) =>
    active ? theme('button.primary') : '#024250'};

  &:hover {
    color: ${({ active }) => (active ? theme('button.fg') : '#99b9bf')};
    border-color: ${({ active }) =>
      active ? theme('button.hoverBg') : '#065061'};
    background-color: ${({ active }) =>
      active ? theme('button.hoverBg') : '#065061'};
  }
`

export const UpButton = styled(BaseButton)`
  white-space: pre-line;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`
export const OrSign = styled(OrSignBase)`
  top: calc(50% - 8.5px);
  left: 8.5px;
`
export const BottomButton = styled(BaseButton)`
  margin-top: 3px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`
