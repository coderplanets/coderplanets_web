import styled from 'styled-components'
import { darken } from 'polished'
import { theme } from '../../../utils/functions'

export const Sidebar = styled.div`
  border-right: 1px solid;
  position: fixed;
  height: 100vh;
  top: 0;
  width: ${props => (props.open ? '256px' : '56px')};
  background: ${theme('sidebar.bg')};
  border-color: ${theme('sidebar.border_color')};
  z-index: 1000;
  overflow-y: scroll;
  overflow-x: hidden;

  transition: width 0.2s, opacity 0.8s, box-shadow 0.1s linear 0.1s,
    background-color 0.3s;
`

export const MenuItem = styled.ul`
  margin-top: 0px;
  left: 0;
  position: relative;
  width: 260px;
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
    //    border: 1px solid grey;
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
`
