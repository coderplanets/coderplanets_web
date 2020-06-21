import React from 'react'
import T from 'prop-types'

import { RedWrapper } from './styles/confirm_btn'

const Button = ({ children, ghost, onClick, size, className }) => {
  return (
    <RedWrapper
      ghost={ghost}
      onClick={onClick}
      size={size}
      className={className}
    >
      {children}
    </RedWrapper>
  )
}

Button.propTypes = {
  children: T.oneOfType([T.string, T.node]),
  ghost: T.bool,
  size: T.oneOf(['default', 'small']),
  onClick: T.func,
  className: T.string,
}

Button.defaultProps = {
  children: 'Button',
  ghost: false,
  size: 'default',
  // eslint-disable-next-line no-console
  onClick: console.log,
  className: '',
}

export default React.memo(Button)
