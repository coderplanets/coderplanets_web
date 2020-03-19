import React from 'react'
import T from 'prop-types'

import { Wrapper, RedWrapper } from './styles/button'

const Button = ({ children, ghost, type, onClick }) => {
  switch (type) {
    case 'red': {
      return (
        <RedWrapper ghost={ghost} onClick={onClick}>
          {children}
        </RedWrapper>
      )
    }
    default: {
      return (
        <Wrapper ghost={ghost} onClick={onClick}>
          {children}
        </Wrapper>
      )
    }
  }
}

Button.propTypes = {
  children: T.oneOfType(T.string, T.node),
  ghost: T.bool,
  type: T.oneOf(['primary', 'red', 'ghost']),
  onClick: T.func,
}

Button.defaultProps = {
  children: 'Button',
  ghost: false,
  type: 'primary',
  // eslint-disable-next-line no-console
  onClick: console.log,
}

export default Button
