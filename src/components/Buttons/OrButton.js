import React from 'react'
import T from 'prop-types'

import { Wrapper, LeftButton, OrSign, RightButton } from './styles/or_button'

// const OrButton = ({ children, onClick, size }) => {
const OrButton = ({ onClick, size }) => {
  return (
    <Wrapper onClick={onClick} size={size}>
      <LeftButton size={size}>列表</LeftButton>
      <OrSign>or</OrSign>
      <RightButton size={size}>里程碑</RightButton>
    </Wrapper>
  )
}

OrButton.propTypes = {
  // children: T.oneOfType(T.string, T.node),
  size: T.oneOf(['default', 'small']),
  onClick: T.func,
}

OrButton.defaultProps = {
  // children: 'Button',
  size: 'default',
  // eslint-disable-next-line no-console
  onClick: console.log,
}

export default OrButton
