/*
 *
 * ThemeSelector
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import DotSelector from './DotSelector'
import CardSelector from './CardSelector'

import { makeDebugger } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:ThemeSelector:index')
/* eslint-enable no-unused-vars */

const ThemeSelector = ({ displayStyle, curTheme, changeTheme }) => {
  return displayStyle === 'default' ? (
    <DotSelector curTheme={curTheme} changeTheme={changeTheme} />
  ) : (
    <CardSelector curTheme={curTheme} changeTheme={changeTheme} />
  )
}

ThemeSelector.propTypes = {
  curTheme: PropTypes.string,
  displayStyle: PropTypes.oneOf(['default', 'card']),
  changeTheme: PropTypes.func.isRequired,
  // https://www.npmjs.com/package/prop-types
}

ThemeSelector.defaultProps = {
  curTheme: '',
  displayStyle: 'default',
}

export default ThemeSelector
