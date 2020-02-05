import React, { useRef } from 'react'

import {
  Wrapper,
  InputWrapper,
  InputMask,
  MaskNumer,
  InputBar,
} from '../styles/banner/input_box'

import { changeSearchStatus } from '../logic'

const InputBox = ({ showSearchMask, value, autoFocus, onChange }) => {
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
          <MaskNumer>120+</MaskNumer> 社区
        </InputMask>
        <InputBar
          ref={ref}
          onChange={onChange}
          value={value}
          autoFocus={autoFocus}
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
