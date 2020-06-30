import styled from 'styled-components'

import { theme, cs } from '@/utils'
import Img from '@/Img'

import { Wrapper as SidebarWrapper } from './index'

export const Wrapper = styled.div`
  margin-top: -20px;
  background: ${theme('sidebar.bg')};

  z-index: 1;
`
export const InnerWrapper = styled.div`
  height: 5vh;
  color: wheat;
  ${cs.flex('align-both')};
  justify-content: ${({ pin }) => (pin ? 'flex-start' : 'center')};
  padding: ${({ pin }) => (pin ? '0 17px' : '')};

  ${SidebarWrapper}:hover & {
    justify-content: flex-start;
    padding: 0 17px;
  }
`
export const SettingIcon = styled(Img)`
  fill: ${theme('sidebar.menuLink')};
  width: 16px;
  height: 16px;
  display: block;
`

export const OptionWrapper = styled.div`
  /* display: ${({ pin }) => (pin ? 'flex' : 'none')}; */
  ${cs.flex('justify-center')};
  opacity: ${({ pin }) => (pin ? '1' : '0')};
  justify-content: ${({ pin }) => (pin ? 'center' : '')};
  width: 1px;

  ${SidebarWrapper}:hover & {
    opacity: 1;
    width: 100%;
    transition-delay: 0.4s;
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
  color: ${({ active }) =>
    active ? theme('sidebar.pinActive') : theme('sidebar.menuLink')};

  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};

  cursor: pointer;
`
