import styled from 'styled-components'

import { theme, css } from '@/utils'
import Img from '@/Img'
import CommunityFaceLogo from '@/components/CommunityFaceLogo'

export const Wrapper = styled.div`
  display: block;
  position: relative;
  z-index: ${css.zIndex.sidebar + 1};

  transition: all 0.25s;
`
export const ActiveBar = styled.div`
  position: absolute;
  opacity: ${({ active }) => (active ? 1 : 0)};
  background: ${theme('sidebar.activeBar')};
  width: 3px;
  height: 12px;
  top: 20px;
  left: 0;
  border-radius: 3px;

  ${Wrapper}:hover & {
    opacity: ${({ active }) => (active ? 1 : 0.6)};
  }

  transition: opacity 0.25s;
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
  ${css.flex('align-center')};
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
  ${css.flex('align-center')};
  font-size: 1rem;
  margin-left: ${({ sortOptActive }) => (sortOptActive ? '10px' : '0')};
`
// opacity maybe overwrite by lazy image
export const MenuItemIcon = styled(CommunityFaceLogo)`
  opacity: ${({ active }) => (active ? '1 !important' : '0.8 !important')};
  ${css.size(22)};
  margin-right: 10px;
  transition: opacity 0.2s;
`
export const MenuItemTitle = styled.div`
  /* flex-grow: 1; */
  width: ${({ pin }) => (pin ? '100%' : '1px')};
  max-width: ${({ pin }) => (pin ? '52%' : '')};
  visibility: ${({ pin }) => (pin ? 'visible' : 'hidden')};
  overflow: hidden;
  color: ${theme('sidebar.menuLink')};
  opacity: ${({ active }) => (active ? 1 : 0.7)};
  letter-spacing: ${({ forceRerender }) => (forceRerender ? '1.3px' : '1.2px')};
  margin-right: 10px;

  ${Wrapper}:hover & {
    opacity: 1;
  }
  transition: opacity 0.25s;
`
export const MiniChartWrapper = styled.div`
  display: ${({ pin }) => (pin ? 'flex' : 'none')};
  width: 45%;
  justify-content: center;
  align-items: center;
  margin-right: 10px;

  svg {
    width: 100%;
  }
`
