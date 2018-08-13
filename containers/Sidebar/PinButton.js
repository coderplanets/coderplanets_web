import React from 'react'
import { PinIconWrapper, PinIcon } from './styles/index'

import { ICON_ASSETS } from '../../config'

const PinButton = ({ pin, onClick }) => (
  <PinIconWrapper onClick={onClick}>
    <PinIcon pin={pin} src={`${ICON_ASSETS}/cmd/pin.svg`} />
  </PinIconWrapper>
)

export default PinButton
