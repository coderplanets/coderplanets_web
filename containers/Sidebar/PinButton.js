import React from 'react'
import styled from 'styled-components'
import { PinIcon } from '../../components/Icons'

const StyledPin = styled.div`
  color: ${props => (props.isPin ? props.theme.sidebar.pin_active : 'grey')};
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  opacity: ${props => (props.isOpen ? 1 : 0)};
  position: absolute;
  font-size: 25px;
  right: 10px;
  top: 5px;
  transition: visibility 0s, opacity 0.3s linear;
  cursor: pointer;
`

const PinButton = props => (
  <StyledPin {...props}>
    <PinIcon />
  </StyledPin>
)

export default PinButton
