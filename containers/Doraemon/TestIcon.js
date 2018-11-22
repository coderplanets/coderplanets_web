import React from 'react'
import styled from 'styled-components'

export const Wrapper = styled.svg`
  fill: tomato;
  width: 60px;
  height: 60px;
  display: block;
`

const SvgComponent = props => (
  <Wrapper
    className="prefix__icon"
    viewBox="0 0 1024 1024"
    width="1em"
    height="1em"
    {...props}
  >
    <defs>
      <style />
    </defs>
    <path d="M942.08 769.138l-354.987-589.37c-43.235-77.368-113.777-77.368-157.013 0L75.093 769.139c-43.235 77.369-6.826 138.809 79.645 138.809H864.71c84.196 0 120.605-63.716 77.369-138.81zM475.591 357.262c0-18.204 15.929-34.133 34.133-34.133s34.134 15.929 34.134 34.133v238.934c0 18.204-15.93 34.133-34.134 34.133s-34.133-15.929-34.133-34.133V357.262zm31.858 418.702c-27.307 0-47.787-22.755-47.787-47.786s22.756-47.787 47.787-47.787 47.787 22.756 47.787 47.787-20.48 47.786-47.787 47.786z" />
  </Wrapper>
)

export default SvgComponent
