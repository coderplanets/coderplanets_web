/*
 *
 * Checker
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON } from '@/config'
import { buildLog } from '@/utils'

import { Wrapper, IconWrapper, Icon, ChildWrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:Checker:index')

const Checker = ({ checked, onChange, hiddenMode, size, children }) => {
  const show = checked || !hiddenMode

  return (
    <Wrapper show={show} onClick={() => show && onChange(!checked)}>
      <IconWrapper checked={checked} size={size}>
        <Icon src={`${ICON}/shape/checked.svg`} checked={checked} size={size} />
      </IconWrapper>
      <ChildWrapper checked={checked} size={size}>
        {children}
      </ChildWrapper>
    </Wrapper>
  )
}

Checker.propTypes = {
  checked: T.bool,
  hiddenMode: T.bool,
  size: T.oneOf(['default', 'small']),
  children: T.oneOfType([T.string, T.node]),
  onChange: T.func,
}

Checker.defaultProps = {
  checked: false,
  hiddenMode: false,
  children: '',
  size: 'default',
  onChange: log,
}

export default React.memo(Checker)
