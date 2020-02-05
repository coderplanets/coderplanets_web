import React, { useRef } from 'react'
import T from 'prop-types'

import {
  Wrapper,
  InputWrapper,
  InputMask,
  MaskNumer,
  InputBar,
} from '../styles/banner/input_box'

const InputBox = ({
  showMask,
  placeholder,
  value,
  autoFocus,
  onChange,
  noRound,
  onBlur,
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

InputBox.propTypes = {
  showMask: T.bool,
  placeholder: T.string,
  value: T.string,
  autoFocus: T.bool,
  onChange: T.func,
  onBlur: T.func,
  noRound: T.bool,
}

InputBox.defaultProps = {
  showMask: false,
  value: '',
  placeholder: '',
  autoFocus: false,
  onChange: console.log,
  onBlur: console.log,
  noRound: false,
}

export default InputBox
