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
  ${cs.flex('align-start')};
  height: 5vh;
  color: wheat;
  padding-left: 17px;
`
export const SettingIcon = styled(Img)`
  fill: ${theme('sidebar.menuLink')};
  width: 16px;
  height: 16px;
  display: block;
`
export const OptionWrapper = styled.div`
  ${cs.flex('justify-center')};
  opacity: ${({ pin }) => (pin ? '1' : '0')};
  justify-content: ${({ pin }) => (pin ? 'center' : '')};
  width: 0;

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
  color: ${({ active }) =>
    active ? theme('sidebar.pinActive') : theme('sidebar.menuLink')};

  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};

  cursor: pointer;
`
