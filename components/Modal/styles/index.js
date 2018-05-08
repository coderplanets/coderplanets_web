import styled from 'styled-components'
import { Animate } from '../../../utils'

// display: ${props => (props.show ? 'block' : 'none')};
export const Mask = styled.div`
  position: fixed;
  overflow: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  display: ${props => (props.show ? 'block' : 'none')};
`

export const Wrapper = styled.div`
  position: relative;
  top: 15%;
  width: 600px;
  min-height: 320px;
  max-height: 80vh;
  box-shadow: -5px 6px 37px -8px rgba(0, 0, 0, 0.42);
  border: 1px solid;
  border-top: 3px solid;
  animation: ${Animate.zoomeIn} 0.5s linear;
`
/* display: ${props => (props.show ? 'block' : 'none')}; */
/* opacity: ${props => (props.show ? 1 : 0)}; */
/* transition: opacity 1s ease-out; */

// animation: ${Animate.zoomeIn} 0.5s linear;
