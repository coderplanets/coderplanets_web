import React from 'react'
import { PinIcon } from '../../components/Icons'

import { StyledPin } from './styles/index'

const PinButton = props => (
  <StyledPin {...props}>
    <PinIcon />
  </StyledPin>
)

export default PinButton
