import React, { useRef } from 'react'
import T from 'prop-types'

import {
  Wrapper,
  InputWrapper,
  InputMask,
  MaskNumer,
  InputBar,
} from '../styles/search_cover/input_box'

type TProps = {
  showMask?: boolean
  placeholder?: string
  value?: string
  autoFocus?: boolean
  noRound?: boolean

  onChange?: (e) => void
  onBlur?: () => void
}

const InputBox: React.FC<TProps> = ({
  showMask = false,
  value = '',
  placeholder = '',
  autoFocus = false,
  onChange = console.log,
  onBlur = console.log,
  noRound = false,
}) => {
  const ref = useRef(null)

  return (
    <Wrapper>
      <InputWrapper noRound={noRound}>
        <InputMask
          show={showMask}
          onClick={() => {
            ref.current.focus()
          }}
        >
          <MaskNumer>--</MaskNumer> xxx
        </InputMask>
        <InputBar
          ref={ref}
          onChange={onChange}
          value={value}
          autoFocus={autoFocus}
          placeholder={placeholder}
          onBlur={onBlur}
        />
      </InputWrapper>
    </Wrapper>
  )
}

export default React.memo(InputBox)
