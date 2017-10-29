/*
 *
 * ThemeSelector
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { FlexWrapper, ThemeDot } from './style'
import { makeDebugger } from '../../utils/functions'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:ThemeSelector:index')
/* eslint-enable no-unused-vars */

const ThemeSelector = ({ themeKeys, curTheme, changeTheme }) => {
  return (
    <FlexWrapper>
      {themeKeys.map(name => (
        <ThemeDot
          key={name}
          active={curTheme === name}
          type={name}
          onClick={changeTheme.bind(this, name)}
        />
      ))}
    </FlexWrapper>
  )
}

ThemeSelector.propTypes = {
  themeKeys: PropTypes.array,
  curTheme: PropTypes.string,
  changeTheme: PropTypes.func.isRequired,
  // https://www.npmjs.com/package/prop-types
}

ThemeSelector.defaultProps = {
  themeKeys: [],
  curTheme: '',
}

export default ThemeSelector
