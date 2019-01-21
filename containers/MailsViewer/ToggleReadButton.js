import React from 'react'

import { ICON_CMD } from 'config'
import { Wrapper, ToggleIcon, ToggleTitle } from './styles/toggle_read_button'
import { toggleReadState } from './logic'

const ToggleReadButton = ({ readState }) => (
  <Wrapper onClick={toggleReadState}>
    {!readState ? (
      <ToggleIcon src={`${ICON_CMD}/turn_on.svg`} />
    ) : (
      <ToggleIcon src={`${ICON_CMD}/turn_off.svg`} />
    )}
    <ToggleTitle>显示未读</ToggleTitle>
  </Wrapper>
)

export default ToggleReadButton
