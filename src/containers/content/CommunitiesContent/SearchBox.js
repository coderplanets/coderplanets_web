import React, { useRef, useState } from 'react'

import {
  Wrapper,
  InputWrapper,
  InputMask,
  MaskNumer,
  InputBar,
} from './styles/search_box'

const SearchBox = ({ value, onChange }) => {
  const ref = useRef(null)

  const [maskvisible, setMaskvisible] = useState(true)

  return (
    <Wrapper>
      <InputWrapper>
        <InputMask
          show={maskvisible}
          onClick={() => {
            setMaskvisible(false)
            ref.current.focus()
          }}
        >
          <MaskNumer>120+</MaskNumer> 社区
        </InputMask>
        <InputBar
          ref={ref}
          onChange={onChange}
          value={value}
          onBlur={() => setMaskvisible(true)}
        />
      </InputWrapper>
    </Wrapper>
  )
}

export default SearchBox
