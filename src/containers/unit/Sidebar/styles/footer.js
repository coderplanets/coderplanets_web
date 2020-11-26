import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  margin-top: -20px;
  background: ${theme('sidebar.bg')};

  z-index: 1;
`
export const InnerWrapper = styled.div`
  ${css.flex('align-center')};
  height: 5vh;
`
export const OptionWrapper = styled.div`
  ${css.flex('justify-center')};
  opacity: ${({ pin }) => (pin ? '1' : '0')};
  justify-content: ${({ pin }) => (pin ? 'center' : '')};
  width: ${({ pin }) => (pin ? '100%' : 0)};
`
export const OptionDivider = styled.div`
  border-right: 1px solid;
  margin-left: 10px;
  margin-right: 10px;
  border-right-color: ${theme('sidebar.menuLink')};
  opacity: 0.4;
`
export const OptionItem = styled.div`
  ${css.flex('align-center')};
  background: ${({ active }) =>
    active ? theme('sidebar.menuHover') : 'transparent'};
  padding: 0 5px;
  border-radius: 6px;
  cursor: pointer;
`
export const OptionIcon = styled(Img)`
  fill: ${theme('sidebar.menuLink')};
  ${css.size(12)};
`
export const OptionText = styled.div`
  font-size: 13px;
  margin-left: 5px;
  color: ${({ active }) =>
    active ? theme('sidebar.pinActive') : theme('sidebar.menuLink')};
`
