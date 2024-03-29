import { FC, memo, useRef } from 'react'

import {
  Wrapper,
  InputWrapper,
  InputMask,
  MaskNumer,
  InputBar,
} from './styles/search_box'

import { changeSearchStatus } from './logic'

type TProps = {
  showSearchMask: boolean
  value: string
  onChange: (e) => void
}

const SearchBox: FC<TProps> = ({ showSearchMask, value, onChange }) => {
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

export default memo(SearchBox)
