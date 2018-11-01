import styled from 'styled-components'

import { Container } from './index'
import { Img } from '../../../components'
import { theme } from '../../../utils'

export const MenuItem = styled.div`
  margin-top: 0px;
  left: 0;
  position: relative;
  width: 260px;
  height: 95vh;
  overflow-y: scroll;
  transition: left 0.2s;
`
export const MenuItemWrapper = styled.div`
  display: block;
  z-index: 2001;
  &:hover {
    background: ${theme('sidebar.menuHover')};
  }
`
export const MenuItemBar = styled.div`
  cursor: pointer;
  opacity: 1;
  transition: color 0.2s;
  padding-left: 15px;
  font-size: 15px;
  line-height: 50px;
  height: 50px;
  width: 100%;
  box-sizing: border-box;
  color: ${theme('sidebar.menuLink')};
`
export const MenuItemIcon = styled(Img)`
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  width: 22px;
  height: 22px;
  display: block;
  margin-right: 10px;

  ${MenuRow}:hover & {
    opacity: 1;
  }
  transition: opacity 0.2s;
`
export const MenuRow = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 1rem;
`

export const MenuItemTitle = styled.div`
  display: ${({ pin }) => (pin ? 'block' : 'none')};
  color: ${theme('sidebar.menuLink')};
  opacity: ${({ active }) => (active ? 1 : 0.7)};
  // flex-grow: 1;
  // max-width: 50%;
  letter-spacing: 1.3px;
  transition: opacity 0.2s;

  width: 110px;
  margin-right: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${MenuRow}:hover & {
    opacity: 1;
    letter-spacing: 2px;
  }
  ${Container}:hover & {
    display: block;
    // flex-grow: 1;
    max-width: 50%;
  }
`

export const MiniChartWrapper = styled.div`
  width: 28%;
  justify-content: flex-end;
  align-items: center;
  position: relative;

  display: ${({ pin }) => (pin ? 'flex' : 'none')};
  ${Container}:hover & {
    display: flex;
  }
`
