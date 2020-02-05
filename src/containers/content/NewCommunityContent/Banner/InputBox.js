import React, { useRef } from 'react'

import {
  Wrapper,
  InputWrapper,
  InputMask,
  MaskNumer,
  InputBar,
} from '../styles/banner/input_box'

import { changeSearchStatus } from '../logic'

const InputBox = ({
  showSearchMask,
  placeholder,
  value,
  autoFocus,
  onChange,
}) => {
  const ref = useRef(null)

  return (
    <Wrapper>
      <InputWrapper>
        <InputMask
          show={showSearchMask}
          onClick={() => {
            changeSearchStatus({
              showSearchMask: false,
              searchfocused: true,
            })
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
          onBlur={() =>
            changeSearchStatus({
              showSearchMask: true,
              searchfocused: false,
            })
          }
        />
      </InputWrapper>
    </Wrapper>
  )
}

export default InputBox
