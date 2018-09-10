import React from 'react'
import { PinIconWrapper, PinIcon } from './styles/index'

import { ICON_CMD } from '../../config'

const PinButton = ({ pin, onClick }) => (
  <PinIconWrapper onClick={onClick}>
    <PinIcon pin={pin} src={`${ICON_CMD}/pin.svg`} />
  </PinIconWrapper>
)

export default PinButton
