import styled from 'styled-components'

/* import { Img } from '../../../components' */
import Img from '../../../components/Img'
import { theme } from '../../../utils'

// 纯css，div隐藏滚动条，保留鼠标滚动效果。
// http://blog.csdn.net/liusaint1992/article/details/51277751
export const Container = styled.aside`
  display: flex;
  flex-direction: column;
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
export const Header = styled.div`
  display: flex;
  margin-top: 14px;
  margin-bottom: ${({ pin }) => (pin ? '0' : '20px')};
  ${Container}:hover & {
    margin-bottom: 4px;
  }
`
export const HeaderFuncs = styled.div`
  display: flex;
  flex-grow: 1;
`
export const PinIconWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`
export const SiteLogoWrapper = styled.div`
  margin-left: 15px;
  color: ${theme('sidebar.logoText')};
  letter-spacing: 1px;
  margin-top: -4px;
  display: ${({ pin }) => (pin ? 'none' : 'block')};
  ${Container}:hover & {
    display: none;
  }
`
export const SiteLogo = styled(Img)`
  width: 25px;
  height: 25px;
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

  &:hover {
    cursor: pointer;
  }
  ${Container}:hover & {
    visibility: visible;
    opacity: 1;
  }
`
export const ExploreWrapper = styled.div`
  padding-left: 16px;
  visibility: ${({ pin }) => (pin ? 'visible' : 'hidden')};
  opacity: ${({ pin }) => (pin ? 1 : 0)};

  ${Container}:hover & {
    visibility: visible;
    opacity: 1;
  }
`
export const ExploreContent = styled.div`
  display: flex;
  align-items: center;
`
export const ExploreText = styled.div`
  letter-spacing: 1.5px;
  ${ExploreContent}:hover & {
    letter-spacing: 3px;
  }
  transition: letter-spacing 0.3s;
`
export const ExploreIcon = styled(Img)`
  fill: ${theme('button.primary')};
  width: 16px;
  height: 16px;
  margin-right: 5px;
  display: block;
  margin-top: -1px;
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
  align-items: center;
  font-size: 1rem;
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
export const MenuItemTitle = styled.div`
  display: ${({ pin }) => (pin ? 'block' : 'none')};
  color: ${theme('sidebar.menuLink')};
  opacity: ${({ active }) => (active ? 1 : 0.7)};
  flex-grow: 1;
  max-width: 50%;
  letter-spacing: 1.5px;
  transition: opacity 0.2s;

  ${MenuRow}:hover & {
    opacity: 1;
    letter-spacing: 2.5px;
  }
  ${Container}:hover & {
    display: block;
    flex-grow: 1;
    max-width: 50%;
  }
`

// TODO: hover
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
