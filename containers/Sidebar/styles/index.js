import styled from 'styled-components'
import ReactSVG from 'react-svg'

import { darken } from 'polished'
import { theme } from '../../../utils/themes'

// 纯css，div隐藏滚动条，保留鼠标滚动效果。
// http://blog.csdn.net/liusaint1992/article/details/51277751
export const Sidebar = styled.div`
  border-right: 1px solid;
  position: fixed;
  height: 100vh;
  top: 0;
  width: ${props => (props.open ? '250px' : '56px')};
  background: ${theme('sidebar.bg')};
  border-color: ${theme('sidebar.border_color')};
  z-index: 1000;
  overflow: hidden;

  transition: width 0.2s, opacity 0.8s, box-shadow 0.1s linear 0.1s,
    background-color 0.3s;
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

export const Row = styled.div`
  display: flex;
  justify-content: left;
  > a {
    color: ${theme('sidebar.menu_link')};
    opacity: ${props => (props.active ? 1 : 0.5)};
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
