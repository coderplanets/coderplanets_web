import styled from 'styled-components'

import Img from '@/Img'
import { theme } from '@/utils'

import { Wrapper as SidebarWrapper } from './index'

export const Wrapper = styled.div`
  cursor: pointer;
`
export const PinIcon = styled(Img)`
  fill: ${({ pin }) => (pin ? theme('sidebar.pinActive') : 'grey')};
  margin-right: 10px;
  width: 23px;
  height: 23px;
  visibility: ${({ pin }) => (pin ? 'visible' : 'hidden')};
  opacity: ${({ pin }) => (pin ? 1 : 0)};
  transition: visibility 0s, opacity 0.3s linear;
  cursor: pointer;

  ${SidebarWrapper}:hover & {
    visibility: visible;
    opacity: 1;
    transition-delay: 0.4s;
  }
`
