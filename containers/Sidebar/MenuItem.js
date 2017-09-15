import styled from 'styled-components'

const SideBar = styled.ul`
  margin-top: 0px;
  left: 0;
  position: relative;
  width: 260px;
  transition: left 0.2s;

  > li {
    display: block;
  }
  > li > span {
    cursor: pointer;
    opacity: 1;
    border: 1px solid grey;
    transition: color 0.2s;
    text-decoration: none;
    padding-left: 20px;
    font-size: 15px;
    line-height: 50px;
    height: 50px;
    width: 100%;
    box-sizing: border-box;
    color: lightgrey;
  }

  > li > span > a {
    color: ${props => props.theme.sidebar.menuLink};
  }
`

export default SideBar
