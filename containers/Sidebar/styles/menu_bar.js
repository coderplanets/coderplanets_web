import styled from 'styled-components'

import CommunityFaceLogo from '@components/CommunityFaceLogo'
import { theme, cs } from '@utils'
import { Wrapper as IndexWrapper } from './index'

export const Wrapper = styled.div`
  display: block;
  z-index: ${cs.zIndex.sidebar + 1};
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
export const MenuItemIcon = styled(CommunityFaceLogo)`
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  width: 22px;
  height: 22px;
  margin-right: 10px;

  ${MenuRow}:hover & {
    opacity: 1;
  }
  transition: opacity 0.2s;
`
export const MenuRow = styled.div`
  ${cs.flex()};
  justify-content: left;
  align-items: center;
  font-size: 1rem;
`
export const MenuItemTitle = styled.div`
  display: ${({ pin }) => (pin ? 'block' : 'none')};
  color: ${theme('sidebar.menuLink')};
  opacity: ${({ active }) => (active ? 1 : 0.7)};
  letter-spacing: ${({ forceRerender }) => (forceRerender ? '1.3px' : '1.2px')};
  transition: opacity 0.2s;
  margin-right: 10px;

  ${cs.truncate('110px')};

  ${MenuRow}:hover & {
    opacity: 1;
    letter-spacing: 2px;
  }
  ${IndexWrapper}:hover & {
    display: block;
    max-width: 50%;
  }
`

export const MiniChartWrapper = styled.div`
  width: 28%;
  justify-content: flex-end;
  align-items: center;
  position: relative;

  display: ${({ pin }) => (pin ? 'flex' : 'none')};
  ${IndexWrapper}:hover & {
    display: flex;
  }
`
