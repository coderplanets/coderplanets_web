import styled from 'styled-components'
import { darken } from 'polished'

const SideBar = styled.ul`
  margin-top: 0px;
  left: 0;
  position: relative;
  width: 260px;
  transition: left 0.2s;

  > li {
    display: block;
    &:hover {
      background: ${props => darken(0.05, props.theme.sidebar__bg)};
    }
  }
  > li > span {
    cursor: pointer;
    opacity: 1;
    //    border: 1px solid grey;
    transition: color 0.2s;
    padding-left: 20px;
    font-size: 15px;
    line-height: 50px;
    height: 50px;
    width: 100%;
    box-sizing: border-box;
    color: lightgrey;
  }

  > li > span > a {
    color: ${props => props.theme.sidebar__menuLink};
    text-decoration: none;
  }
`

export default SideBar
