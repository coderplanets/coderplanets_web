import React from 'react'
import T from 'prop-types'

import {
  Wrapper,
  LeftButton,
  OrSign,
  RightButton,
} from '../styles/or_button/vertical_button'

// const OrButton = ({ children, onClick, size }) => {
const VerticalButton = ({ onClick, size }) => {
  return (
    <Wrapper onClick={onClick} size={size}>
      <LeftButton size={size}>站内</LeftButton>
      <OrSign>or</OrSign>
      <RightButton size={size}>站外</RightButton>
    </Wrapper>
  )
}

VerticalButton.propTypes = {
  // children: T.oneOfType(T.string, T.node),
  size: T.oneOf(['default', 'small']),
  onClick: T.func,
}

VerticalButton.defaultProps = {
  // children: 'Button',
  size: 'default',
  // eslint-disable-next-line no-console
  onClick: console.log,
}

export default VerticalButton
