import React from 'react'
import T from 'prop-types'

import {
  Wrapper,
  LeftButton,
  OrSign,
  RightButton,
} from '../styles/or_button/horizontal_button'

// const OrButton = ({ children, onClick, size }) => {
const HorizontalButton = ({ onClick, size }) => {
  return (
    <Wrapper onClick={onClick} size={size}>
      <LeftButton size={size}>列表</LeftButton>
      <OrSign>or</OrSign>
      <RightButton size={size}>里程碑</RightButton>
    </Wrapper>
  )
}

HorizontalButton.propTypes = {
  // children: T.oneOfType(T.string, T.node),
  size: T.oneOf(['default', 'small']),
  onClick: T.func,
}

HorizontalButton.defaultProps = {
  // children: 'Button',
  size: 'default',
  // eslint-disable-next-line no-console
  onClick: console.log,
}

export default HorizontalButton
