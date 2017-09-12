import styled from 'styled-components'

const SideBar = styled.div`
  border-right: 1px solid #ebebeb;
  position: fixed;
  height: 100vh;
  top: 0;
  width: 265px;
  background: #222029;
  color: white;
  z-index: 1000;
  overflow-y: scroll;
  overflow-x: hidden;

  transition: width 0.2s, opacity 0.8s, box-shadow 0.1s linear 0.1s,
    background-color 0.3s;

  :hover {
    box-shadow: 3px 0 20px rgba(0, 0, 0, 0.2);
    width: 260px;
  }
`

export default SideBar
