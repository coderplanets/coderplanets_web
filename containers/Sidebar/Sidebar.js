import styled from 'styled-components'

const SideBar = styled.div`
  border-right: 1px solid;
  position: fixed;
  height: 100vh;
  top: 0;
  width: ${props => (props.isOpen ? '256px' : '56px')};
  background: ${props => props.theme.sidebar.bg};
  border-color: ${props => props.theme.sidebar.border_color};
  z-index: 1000;
  overflow-y: scroll;
  overflow-x: hidden;

  transition: width 0.2s, opacity 0.8s, box-shadow 0.1s linear 0.1s,
    background-color 0.3s;
`

export default SideBar
