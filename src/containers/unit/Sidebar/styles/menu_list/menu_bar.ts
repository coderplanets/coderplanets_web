import styled from 'styled-components'

import type { TActive } from '@/spec'
import css, { theme, zIndex } from '@/utils/css'
import Img from '@/Img'
import CommunityFaceLogo from '@/widgets/CommunityFaceLogo'

type TMenuItemTitle = TActive & { pin: boolean }

export const Wrapper = styled.div`
  display: block;
  position: relative;
  z-index: ${zIndex.sidebar + 1};

  transition: all 0.2s;
`
export const ActiveBar = styled.div<TActive>`
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
export const DragIcon = styled(Img)<TActive>`
  position: absolute;
  top: 15px;
  left: 0;
  fill: ${theme('sidebar.menuLink')};
  display: ${({ show }) => (show ? 'block' : 'none')};
  ${css.size(15, false)};

  cursor: pointer;
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
export const MenuRow = styled.div<{ sortOptActive: boolean }>`
  ${css.flex('align-center')};
  font-size: 1rem;
  margin-left: ${({ sortOptActive }) => (sortOptActive ? '10px' : '0')};
`
// opacity maybe overwrite by lazy image
export const MenuItemIcon = styled(CommunityFaceLogo)<TActive>`
  opacity: ${({ active }) => (active ? '1 !important' : '0.8 !important')};
  ${css.size(18)};
  margin-right: 10px;
  transition: opacity 0.2s;
`
export const MenuItemTitle = styled.div<TMenuItemTitle>`
  /* flex-grow: 1; */
  width: ${({ pin }) => (pin ? '100%' : '1px')};
  max-width: ${({ pin }) => (pin ? '52%' : '')};
  visibility: ${({ pin }) => (pin ? 'visible' : 'hidden')};
  color: ${theme('sidebar.menuLink')};
  opacity: ${({ active }) => (active ? 1 : 0.7)};
  letter-spacing: 1.2px;
  overflow: hidden;
  font-size: 14px;

  ${Wrapper}:hover & {
    opacity: 1;
  }
  transition: opacity 0.2s;
`
export const MiniChartWrapper = styled.div<{ pin: boolean }>`
  ${css.flex('align-both')};
  display: ${({ pin }) => (pin ? 'flex' : 'none')};
  width: 45%;
  margin-right: 10px;

  svg {
    width: 100%;
  }
`
