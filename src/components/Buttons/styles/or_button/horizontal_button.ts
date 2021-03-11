import styled from 'styled-components'
// import { lighten } from 'polished'

import { theme, css } from '@/utils'

import { Wrapper as BaseBtnWrapper } from '../button'
import { OrSignBase } from './index'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  position: relative;
`
const BaseButton = styled(BaseBtnWrapper)`
  ${css.flex('align-both')};
  width: 50%;
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
export const LeftButton = styled(BaseButton)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  /* border-color: #024250; */
`
export const OrSign = styled(OrSignBase)``

export const RightButton = styled(BaseButton)`
  border-color: #024250;
  margin-left: 3px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`
