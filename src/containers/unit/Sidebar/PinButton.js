import React from 'react'

import { ICON_CMD } from '@/config'
import { Wrapper, PinIcon } from './styles/pin_button'

import { setPin } from './logic'

const PinButton = ({ pin }) => (
  <Wrapper onClick={setPin}>
    <PinIcon pin={pin} src={`${ICON_CMD}/pin.svg`} />
  </Wrapper>
)

export default React.memo(PinButton)
