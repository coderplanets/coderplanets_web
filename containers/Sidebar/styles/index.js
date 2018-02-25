import styled from 'styled-components'
import ReactSVG from 'react-svg'

import { darken } from 'polished'
import { theme } from '../../../utils'

// 纯css，div隐藏滚动条，保留鼠标滚动效果。
// http://blog.csdn.net/liusaint1992/article/details/51277751
export const Sidebar = styled.div`
  border-right: 1px solid;
  position: fixed;
  height: 100vh;
  top: 0;
  width: ${props => (props.pin ? '250px' : '56px')};
  box-shadow: ${props => (props.pin ? '3px 0 20px rgba(0, 0, 0, 0.2); ' : '')};
  background: ${theme('sidebar.bg')};
  border-color: ${theme('sidebar.border_color')};
  z-index: 1000;
  overflow: hidden;

  transition: width 0.2s, opacity 0.8s, box-shadow 0.1s linear 0.1s,
    background-color 0.3s;

  &:hover {
    width: 250px;
    box-shadow: 3px 0 20px rgba(0, 0, 0, 0.2);
  }
`

export const StyledPin = styled.div`
  color: ${props => (props.pin ? props.theme.sidebar.pin_active : 'grey')};
  visibility: ${props => (props.pin ? 'visible' : 'hidden')};
  opacity: ${props => (props.pin ? 1 : 0)};
  position: absolute;
  font-size: 25px;
  right: 10px;
  top: 5px;
  transition: visibility 0s, opacity 0.3s linear;
  cursor: pointer;

  ${Sidebar}:hover & {
    visibility: visible;
    opacity: 1;
  }
`

export const MenuItem = styled.ul`
  margin-top: 0px;
  left: 0;
  position: relative;
  width: 260px;
  height: 95vh;
  overflow-y: scroll;
  transition: left 0.2s;

  > li {
    display: block;
    &:hover {
      background: ${props => darken(0.05, props.theme.sidebar.bg)};
    }
  }
  > li > div {
    cursor: pointer;
    opacity: 1;
    transition: color 0.2s;
    padding-left: 15px;
    font-size: 15px;
    line-height: 50px;
    height: 50px;
    width: 100%;
    box-sizing: border-box;
    color: ${theme('sidebar.menu_link')};
  }

  > li > div > a {
    text-decoration: none;
  }
`

export const MenuRow = styled.div`
  display: flex;
  justify-content: left;
  > a {
    display: ${props => (props.pin ? 'block' : 'none')};
    color: ${theme('sidebar.menu_link')};
    opacity: ${props => (props.active ? 1 : 0.5)};
  }

  ${Sidebar}:hover & {
    a {
      display: block;
    }
  }
`

export const SVGIconWrapper = styled.div`
  margin-top: 5px;
  opacity: ${props => (props.active ? 1 : 0.5)};
  > svg {
    width: 22px;
    height: 22px;
  }
`

export const MenuItemIcon = styled(ReactSVG)`
  opacity: ${props => (props.active ? 1 : 0.5)};
  margin-top: 0.9em;
  width: 22px;
  height: 22px;
`
