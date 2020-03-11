/*
 *
 * Dropdown
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@config'
import { buildLog } from '@utils'

import { Wrapper, IconWrapper, Icon } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:Dropdown:index')

const Dropdown = ({ children, size }) => {
  return (
    <Wrapper size={size}>
      {children}
      <IconWrapper size={size}>
        <Icon src={`${ICON_CMD}/dropdown_arrow.svg`} size={size} />
      </IconWrapper>
    </Wrapper>
  )
}

Dropdown.propTypes = {
  children: T.node.isRequired,
  // content: T.oneOfType([T.string, T.node]).isRequired,
  size: T.oneOf(['12px', '14px', '16px']),
}

Dropdown.defaultProps = {
  size: '12px',
}

export default React.memo(Dropdown)
