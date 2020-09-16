import styled from 'styled-components'

import Img from '@/Img'
import { theme, cs } from '@/utils'

import { Wrapper as SidebarWrapper } from './index'

export const Wrapper = styled.div`
  margin-top: -20px;
  background: ${theme('sidebar.bg')};

  z-index: 1;
`
export const InnerWrapper = styled.div`
  ${cs.flex('align-center')};
  height: 5vh;
`
export const OptionWrapper = styled.div`
  ${cs.flex('justify-center')};
  opacity: ${({ pin }) => (pin ? '1' : '0')};
  justify-content: ${({ pin }) => (pin ? 'center' : '')};
  width: ${({ pin }) => (pin ? '100%' : 0)};

  ${SidebarWrapper}:hover & {
    opacity: 1;
    width: 100%;
    transition-delay: 0.5s;
  }
`
export const OptionDivider = styled.div`
  border-right: 1px solid;
  margin-left: 10px;
  margin-right: 10px;
  border-right-color: ${theme('sidebar.menuLink')};
  opacity: 0.4;
`
export const OptionItem = styled.div`
  ${cs.flex('align-center')};
  background: ${({ active }) =>
    active ? theme('sidebar.menuHover') : 'transparent'};
  padding: 0 5px;
  border-radius: 6px;
  cursor: pointer;
`
export const OptionIcon = styled(Img)`
  fill: ${theme('sidebar.menuLink')};
  width: 12px;
  height: 12px;
  display: block;
`
export const OptionText = styled.div`
  font-size: 13px;
  margin-left: 5px;
  color: ${({ active }) =>
    active ? theme('sidebar.pinActive') : theme('sidebar.menuLink')};
`
