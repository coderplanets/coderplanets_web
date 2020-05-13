import React from 'react'

import { ICON_CMD } from '@/config'
import { Wrapper, ToggleIcon, ToggleTitle } from './styles/toggle_read_button'
import { toggleReadState } from './logic'

const ToggleReadButton = ({ readState }) => (
  <Wrapper onClick={toggleReadState}>
    {readState ? (
      <ToggleIcon src={`${ICON_CMD}/turn_on.svg`} />
    ) : (
      <ToggleIcon src={`${ICON_CMD}/turn_off.svg`} />
    )}

    {!readState ? (
      <ToggleTitle>已读</ToggleTitle>
    ) : (
      <ToggleTitle>未读</ToggleTitle>
    )}
  </Wrapper>
)

export default React.memo(ToggleReadButton)
