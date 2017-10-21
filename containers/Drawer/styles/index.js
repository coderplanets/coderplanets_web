import styled from 'styled-components'

export const fuck = 1
function doTransform(visible) {
  return visible ? 'translate(0px, 0px)' : 'translate(105%, 0px)'
}

export const DrawerOverlay = styled.div`
  // background-color: tomato;
  bottom: 0;
  cursor: pointer;
  left: 0;
  overflow: auto;
  position: absolute;
  height: 100%;
  right: 0;
  z-index: 1001;
  top: 0;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`
// z-index: 1001;
// z-index: ${props => (props.visible ? 1001 : -1)};
// display: ${props => (props.visible ? 'block' : 'none')};
// visibility: ${props => (props.visible ? 'visible' : 'hidden')};

export const DrawerWrapper = styled.div`
  color: rgba(0, 0, 0, 0.87);
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  transition: transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  font-family: Roboto, sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px;
  border-radius: 0px;
  height: 100%;
  width: 40%;
  right: 0;
  position: fixed;
  transform: ${props => doTransform(props.visible)};
  top: 0px;
  overflow: auto;
  z-index: 1002;
`
// right: ${props => (props.visible ? '0' : '40%')};
