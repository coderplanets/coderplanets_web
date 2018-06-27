import styled from 'styled-components'

import { Img } from '../../../components'
import { theme } from '../../../utils'

// 纯css，div隐藏滚动条，保留鼠标滚动效果。
// http://blog.csdn.net/liusaint1992/article/details/51277751
export const Container = styled.aside`
  border-right: 1px solid;
  position: fixed;
  height: 100vh;
  top: 0;
  width: ${({ pin }) => (pin ? '250px' : '56px')};
  box-shadow: ${({ pin }) => (pin ? '3px 0 20px rgba(0, 0, 0, 0.2); ' : '')};
  background: ${theme('sidebar.bg')};
  border-color: ${theme('sidebar.borderColor')};
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
  color: ${({ pin }) => (pin ? theme('sidebar.pinActive') : 'grey')};
  visibility: ${({ pin }) => (pin ? 'visible' : 'hidden')};
  opacity: ${({ pin }) => (pin ? 1 : 0)};
  position: absolute;
  font-size: 25px;
  right: 10px;
  top: 5px;
  transition: visibility 0s, opacity 0.3s linear;
  cursor: pointer;

  ${Container}:hover & {
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
`
export const MenuItemWrapper = styled.li`
  display: block;
  &:hover {
    background: ${theme('sidebar.menuHover')};
  }
`
export const MenuItemEach = styled.div`
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
  display: flex;
  justify-content: left;
  font-size: 1em;

  > a {
    display: ${({ pin }) => (pin ? 'block' : 'none')};
    color: ${theme('sidebar.menuLink')};
    opacity: ${({ active }) => (active ? 1 : 0.5)};
    flex-grow: 1;
    max-width: 50%;
  }

  ${Container}:hover & {
    a {
      display: block;
      flex-grow: 1;
      max-width: 50%;
    }
  }
`
// TODO: hover
export const MiniChartWrapper = styled.div`
  width: 12vh;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  margin-top: -2px;

  display: ${({ pin }) => (pin ? 'flex' : 'none')};
  ${Container}:hover & {
    display: flex;
  }
`

export const MiniChartBar = styled.div`
  height: 8px;
  width: 60px;
  background-color: #285763;
  border-radius: 2px;
`

export const MiniChartText = styled.div`
  position: absolute;
  font-size: 1.1em;
  top: -2px;
  color: #5396a7;
  right: 2px;

  ${MenuRow}:hover & {
    font-weight: bold;
  }
`

export const SVGIconWrapper = styled.div`
  margin-top: 5px;
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  > svg {
    width: 22px;
    height: 22px;
  }
`

export const MenuItemIcon = styled(Img)`
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  margin-top: 1em;
  width: 22px;
  height: 22px;
`
