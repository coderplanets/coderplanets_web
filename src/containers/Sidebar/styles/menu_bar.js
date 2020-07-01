import styled from 'styled-components'

import { theme, cs } from '@/utils'
import Img from '@/Img'
import CommunityFaceLogo from '@/components/CommunityFaceLogo'

import { Wrapper as SidebarWrapper } from './index'

export const Wrapper = styled.div`
  display: block;
  position: relative;
  z-index: ${cs.zIndex.sidebar + 1};
  &:hover {
    background: ${theme('sidebar.menuHover')};
  }
`
export const ActiveBar = styled.div`
  position: absolute;
  opacity: ${({ active }) => (active ? 1 : 0)};
  background: ${theme('sidebar.activeBar')};
  width: 3px;
  height: 12px;
  /* top: ${({ pin }) => (pin ? '20px' : '4px')}; */
  top: 20px;
  left: 0;
  border-radius: 3px;
`
export const DragIcon = styled(Img)`
  cursor: pointer;
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: absolute;
  top: 15px;
  left: 0;
  fill: ${theme('sidebar.menuLink')};
  width: 15px;
  height: 20px;
`
// box-shadow: 0px 6px 4px 0px rgba(0,0,0,0.2);
// border-bottom: 1px dashed #316d7b;
export const MenuItemBar = styled.div`
  ${cs.flex('align-center')};
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
export const MenuRow = styled.div`
  ${cs.flex('align-center')};
  font-size: 1rem;
  margin-left: ${({ sortOptActive }) => (sortOptActive ? '10px' : '0')};
`
export const MenuItemIcon = styled(CommunityFaceLogo)`
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  width: 22px;
  height: 22px;
  margin-right: 10px;

  ${MenuRow}:hover & {
    opacity: 1;
    transition-delay: 0.3s;
  }
  transition: opacity 0.2s;
`
export const MenuItemTitle = styled.div`
  /* flex-grow: 1; */
  width: ${({ pin }) => (pin ? '100%' : '1px')};
  visibility: ${({ pin }) => (pin ? 'visible' : 'hidden')};
  overflow: hidden;
  /* width: 100%;
  border: 1px solid tomato; */
  color: ${theme('sidebar.menuLink')};
  opacity: ${({ active }) => (active ? 1 : 0.7)};
  letter-spacing: ${({ forceRerender }) => (forceRerender ? '1.3px' : '1.2px')};
  margin-right: 10px;

  /* ${cs.truncate('110px')}; */

  ${MenuRow}:hover & {
    width: 100%;
    opacity: 1;
    letter-spacing: 2px;
    transition-delay: 0.3s;
    visibility: visible;
  }
  ${SidebarWrapper}:hover & {
    width: 100%;
    max-width: 50%;
    transition-delay: .5s;
    transition-timing-function: ease-in;
    visibility: visible;
  }

  transition: all 0.2s;
  transition-timing-function: ease-in;
`
export const MiniChartWrapper = styled.div`
  display: ${({ pin }) => (pin ? 'flex' : 'none')};
  width: 28%;
  justify-content: flex-end;
  align-items: center;
  position: relative;

  ${SidebarWrapper}:hover & {
    display: flex;
  }
`
