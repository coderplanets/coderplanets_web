import React from 'react'
import T from 'prop-types'

import {
  Wrapper,
  UpButton,
  OrSign,
  BottomButton,
} from '../styles/or_button/vertical_button'

// const OrButton = ({ children, onClick, size }) => {
const VerticalButton = ({ onClick, size }) => {
  return (
    <Wrapper onClick={onClick} size={size}>
      <UpButton size={size}>站内</UpButton>
      <OrSign>or</OrSign>
      <BottomButton size={size}>站外</BottomButton>
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
